import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "andrew/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        Array.prototype.map((post) => (
          <div key={post.id}>
            <h2>{post.Title}</h2>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get post from api
  const res = await fetch("http://localhost:1337/api/posts");

  const posts = await res.json();

  console.log(posts);

  return {
    props: { posts },
  };
}
