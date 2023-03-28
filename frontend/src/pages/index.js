import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <div>
        {/* loop over the posts and show them */}
        {posts &&
          posts.data.map((element) => (
            <div key={element.id}>
              <h2>{element.attributes.Title}</h2>
              <div>{element.attributes.Content}</div>
            </div>
          ))}
      </div>
      <div>Hi Everybody</div>
    </>
  );
}

export async function getStaticProps() {
  // get post from api
  const res = await fetch("http://localhost:1337/api/posts");

  const posts = await res.json();

  // console.log(posts);

  return {
    props: { posts },
  };
}
