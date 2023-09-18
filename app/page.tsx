import Me from "@/components/group/About";
import Github from "@/components/group/Social";
import Matadata from "@/components/group/matadata";
import Photo from "@/components/group/photo";
import PostList from "@/components/post/postlist";
import Container from "@/components/wrapper/container";
import { getPostsData } from "@/utils/mdx";
export default async function Home() {
const posts = await getPostsData('posts');

  return (
    <Container className='px-24' grid={true}>
      <Matadata />
      <Photo />
      <Me />
      <Github />
      <PostList posts={posts.slice(0,5)}/>
    </Container>
  )
}
