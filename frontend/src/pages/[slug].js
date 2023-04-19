export default function Post({ post }) {
  return <div>{post.Slug}</div>;
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/posts?Slug=`);
  const data = await res.json();

  const paths = data.map((element) => {
    return {
      params: { slug: element.id.attributes.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// // for each individual page: get the data for that page
// export async function getStaticProps({ params }) {
//   const { slug } = params.post.Slug;

//   const res = await fetch(`http://localhost:1337/api/posts?Slug=${slug}`);
//   const data = await res.json();
//   const post = data[0];

//   return {
//     props: { post },
//   };
// }
