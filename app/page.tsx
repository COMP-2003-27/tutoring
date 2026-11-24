"use client";

import BlogCard from "@/components/Home/BlogCard";
import BlogSection from "@/components/Home/BlogSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";


async function fetchData() {
  let url = "https://jsonplaceholder.typicode.com/posts"

  const response = await fetch(url);
  const data = await response.json();
  return data;

}

export default function Home() {

  const [posts, setPosts] = useState([]);
  // let posts = [];



  function addPost() {
    const newPost = {
      id: posts.length + 1,
      title: "New Post",
      body: "This is a new post.",
    };
    setPosts([...posts, newPost]);
  }



  return (
    <div className="">
      <Navbar />
      <button onClick={addPost}>Add Post</button>
      {posts.map((post: any) => (
        <BlogCard key={post.id} title={post.title} description={post.body} />
      ))}
    </div>
  );
}
