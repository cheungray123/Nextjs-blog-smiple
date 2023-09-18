import Card from "@/components/wrapper/Card"
import Container from "@/components/wrapper/container"
import { getPostBySlug, getPostsData } from "@/utils/mdx"
import { notFound } from "next/navigation"
export async function generateMetadata({ params, }: { params: { slug: string } }) {
    const posts = await getPostsData("posts")
    const { slug } = params

    const post = posts.find(post => post.slug === slug)

    if (!post) {
        return {
            title: "Post not found!",
        }
    }
    return {
        title: post.title,
        description: post.description,
    }
}
async function page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const post = await getPostBySlug("posts", slug)
    
    if (!post) {
        return notFound
    }
    return (
        <Container className="flex">
            <aside className="menu_toc">
                
            </aside>

            <Card className="flex-1 p-6">
                <h1>{post.title}</h1>
                <div className="prose lg:prose-base max-w-full dark:prose-invert">
                    {post.content}

                </div>
            </Card>
        </Container>
    )
}

export default page
