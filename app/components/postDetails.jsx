import React from 'react';

export default async function PostsDetails({postid}) {

await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve();
  },2000) 
})
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, {
    next: {
      revalidate: 120,
    },
  });
  const postsdetails = await response.json();

  return (
   <div style={{padding:"20px"}}>
    <div style={{ background: "gray", width:"70%" , margin:"20px", color:"white" , borderRadius:"10px" , padding:"10px"}}>
        <h2>{postsdetails.title}</h2><hr></hr>
        <p>{postsdetails.body}</p>
    </div>
   </div>
  )
}
