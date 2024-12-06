import React, { Suspense } from "react";
import PostsDetails from "@/app/components/postDetails";

export default async function PostsDetailsPage({ params }) {
  const post_id = params.postId;
  const loadingJsx=(<div><h1>Loading...</h1></div>)

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Details</h1>
      {/* هيك اللودينج بصير يظهر فقط مكان هاي الجزئية من الكود  */}
      <Suspense fallback={loadingJsx}>
        <PostsDetails postid={post_id} /> 
      </Suspense>
    </div>
  );
}
