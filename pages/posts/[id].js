import Link from "next/link";

export default function Post({ id, time }) {
  const nextPost = id + 1;
  return (
    <div>
      <h1>{time}</h1>
      <Link href={`/posts/${nextPost}`}>
        <a>Go to post {nextPost}</a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id);
  return {
    props: {
      id,
      time: new Date().toLocaleTimeString(),
    },
    revalidate: 10,
  };
}
