import { server } from "../../../config";
import Link from "next/link";
import Meta from "@/components/components/Meta";
import { useRouter } from "next/router";

function ArticleById({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Back Home</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// used for dynamic SSG pages / static pages

// export const getStaticProps = async (context) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );

//     const article = await res.json();

//     return {
//       props: {
//         article,
//       },
//     };
//   };

//   export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     const articles = await res.json();

//     const ids = articles.map((article) => article.id);
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//     return {
//       paths,
//       fallback: false, (to return a 404 page if the id does not exist)
//     };
//   };

// to fetch the page each request

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// How to export a static website:
// include the command "next export" to scripts/package.json
// e.g "build": "next build && next export"
// build for production and export as a static website
// it creates out folder, which is a complete static website you can run in a server
// e.g using npm -i serve
// e.g serve -s out -p 8000
// open localhost:8000 and the website is there

export default ArticleById;
