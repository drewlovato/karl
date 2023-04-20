// export default function Post({ post }) {
//   return <div>{post.Slug}</div>;
// }

// // tell next.js how many pages there are
// export async function getStaticPaths({ posts }) {
//   const res = await fetch(`http://localhost:1337/api/posts?Slug=`);
//   const data = await res.json();

//   const paths = posts.data.map((element) => {
//     return {
//       params: { slug: element.id.attributes.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// // // for each individual page: get the data for that page
// export async function getStaticProps() {
//   // get post from api
//   const res = await fetch("http://localhost:1337/api/posts?populate=*");

//   const posts = await res.json();

//   // console.log(posts);

//   return {
//     props: { posts },
//   };
// }

import React from "react";

export async function getStaticPaths() {
  try {
    const res = await fetch("http://localhost:1337/api/posts?Slug=populate=*");
    const data = await res.json();

    const paths = Array.isArray(data)
      ? data.map((post) => {
          return {
            params: { slug: post.Slug },
          };
        })
      : [];

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:1337/api/posts/" + id);
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { post: [] },
    };
  }
}

const Post = ({ post: [] }) => {
  return (
    <div>
      <h1>{post.data.attributes.id}</h1>
    </div>
  );
};

export default Post;
