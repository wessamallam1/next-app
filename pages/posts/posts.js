import Link from "next/link";

export default function posts(props) {
  return (
    <>
      {/* <h1 className="post_title">My Posts</h1> */}

      <div className="p_nav"> 
        {props.posts.map((post) => (
          <div key={post.id} className="post_nav">
            <Link href={`/posts/${post.id}`} className="nav">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
// بستخدمها عشان يجبلي تفاصيل كل منتج عندي مثلا
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  //  هنا مستخدمتش usefetch عشان انا عايز كل حاجه يحصلها pre-render
  return {
    props: {
      posts: data,
    },
  };
}
