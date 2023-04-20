import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Layout>
        <h1>Welcome to my website</h1>
        <p>Here is some content...</p>
      </Layout>
      <div>
        {/* loop over the posts and show them */}
        {posts &&
          posts.data.map((element) => (
            <div key={element.id}>
              <h2>{element.attributes.Title}</h2>
              <div>{element.attributes.Content}</div>
              <div>{element.attributes.createdAt}</div>
              {/* Maps through the authors arttribute for subsidary keys */}
              {element.attributes.Authors.data.map((a) => (
                <div key={a.attributes.id}>
                  <div>{a.attributes.username}</div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div>Hi Everybody</div>
    </>
  );
}

export async function getStaticProps() {
  // get post from api
  const res = await fetch("http://localhost:1337/api/posts?populate=*");

  const posts = await res.json();

  // console.log(posts);

  return {
    props: { posts },
  };
}
