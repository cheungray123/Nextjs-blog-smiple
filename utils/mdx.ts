import fs from "fs";
import path from "path";
import { promisify } from "util";
import { compileMDX } from "next-mdx-remote/rsc";
import { slugify } from "./stringUtils";
import { Frontmatter } from "@/types";
import { mdxComponents } from "./mdxComponents";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import toc from "@jsdevtools/rehype-toc";
import rehypePrismPlus from "rehype-prism-plus";
import remarkTocHeadings from "./remark-toc-headings";
const readFile = promisify(fs.readFile);

/**
 * 获取文章文件夹路径
 * @param folder 文章文件夹名
 * @returns 文章文件夹的完整路径
 */
const getPostsDir = (folder: string) => {
    return path.join(process.cwd(), "content", folder);
};

/**
 * 从文件名中获取 Slug
 * @param filename 文件名
 * @returns Slug
 */
const getSlugFromFilename = (filename: string) => {
    return path.parse(filename).name;
};

/**
 * 获取所有文章信息
 * @param folder 文章文件夹名
 * @returns 所有文章信息的数组，按日期排序
 */
const getPostsData = async (folder: string) => {
    // 获取文章文件夹下的所有文件
    const files = await fs.promises.readdir(getPostsDir(folder));

    const posts = await Promise.all(
        files
            .filter((file) => /\.mdx?$/i.test(file))
            .map(async (file) => {
                const slug = getSlugFromFilename(file);
                const filePath = path.join(getPostsDir(folder), file);
                const source = await readFile(filePath, "utf8");

                // 编译 MDX 文件，并解析 frontmatter
                const { frontmatter } = await compileMDX({
                    source: source,
                    options: { parseFrontmatter: true },
                });

                const mata = frontmatter as Frontmatter;

                // 如果 frontmatter 中没有定义 description，则从源文件中提取摘要
                if (mata.description === undefined) {
                    const summary = source.split("---").slice(2).toString().slice(0, 200);
                    mata.description = summary;
                }

                return {
                    slug,
                    ...mata,
                };
            })
    );

    // 按日期排序
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

/**
 * 根据 Slug 获取单篇文章信息
 * @param folder 文章文件夹名
 * @param slug 文章的 Slug
 * @returns 单篇文章信息，如果未找到对应文章则返回 null
 */
const getPostBySlug = async (folder: string, slug: string) => {
    // 获取文章文件夹下的所有文件
    const files = await fs.promises.readdir(getPostsDir(folder));

    // 根据 Slug 找到对应的文件名
    const filename = files.find(
        (filename) => slugify(path.parse(filename).name) === slugify(slug)
    );

    if (!filename) {
        return null; // 未找到对应文章
    }

    const filePath = path.join(getPostsDir(folder), filename!);
    const Source = await readFile(filePath, "utf8");

    // 编译 MDX 文件，并解析 frontmatter 和内容
    const { frontmatter, content } = await compileMDX({
        source: Source,
        components: mdxComponents,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    [rehypeSlug],
                    [rehypeAutolinkHeadings],
                    // [rehypePrismPlus, { ignoreMissing: true }],
                    // [rehypeCodeTitles, { ignoreMissing: true }],
                ],
                remarkPlugins:[
                    // [remarkTocHeadings, { exportRef: toc }],
                ]
            },
        },
    });

    const mata = frontmatter as Frontmatter;

    return {
        slug,
        ...mata,
        content,
    };
};
export { getPostsData, getPostBySlug }