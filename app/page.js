import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";

async function getData() {
  await new Promise((resolve) => resolve, 2000);
  const data = await prisma.BlogPost.findMany({
    select:{
      title : true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      authorId:true,  
      createdAt: true,
      updatedAt: true,

    }
  })
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <BlogPost/>
    </div>
  );
}


async function BlogPost(){
  const data = await getData();
  return(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard blog={item} key={item.id}/>
      ))}
      </div>
  )
}