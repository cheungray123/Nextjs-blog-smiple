import Link from "next/link"
import Card from "../wrapper/Card"
import { getPostsData } from "@/utils/mdx";
import { Frontmatter } from "@/types";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
type PostListProps = {
    posts: Frontmatter[];
};
const PostList = (props: PostListProps) => {
    const { posts } = props;

    return (
        <>
            {
                posts.map((item, index) => {
                    return (
                        <Card className="col-span-2">
                            <Link href={`/posts/${item.slug}`}
                                key={index}
                                className="w-full h-full flex justify-between group"
                            >
                                <div className="h-full flex flex-col justify-around">
                                    <h2 className="text-xl font-extrabold">{item.title}</h2>
                                    <p className="text-sm text-neutral-500">{formatDate(item.date)}</p>
                                </div>
                                {item.bannerUrl && (
                                    <div className="w-36 h-24 ml-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={item.bannerUrl}
                                            alt={item.title}
                                            width={144}
                                            height={96}
                                            priority={true}
                                            className="w-full h-full object-cover object-center group-hover:scale-150 duration-1000 transition"
                                        />
                                    </div>
                                )}
                            </Link>
                        </Card>
                    )

                })
            }
        </>

    )
}
export default PostList