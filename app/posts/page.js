import Link from "next/link";
import React from "react";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await response.json();

  const postjsx = posts.map((post) => {
    return (
      <div key={post.id} style={{ background: "gray", width:"70%" , margin:"20px", color:"white" , borderRadius:"10px" , padding:"10px"}}>
        <Link href={`/posts/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Link>
      </div>
    );
  });
  console.log(posts);
  return (
    <div>
      <h1>posts page</h1>
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexDirection:"column"}}>{postjsx}</div>
    </div>
  );
}
