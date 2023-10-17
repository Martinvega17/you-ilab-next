import Link from "next/link"

const fetchPosts = () => {
  return fetch('https://apimocha.com/youilabprojects/projects')
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
}

export default async function PostsPage({ params }) {
  const posts = await fetchPosts()
  return (
    <section className="mt-2 ml-4">
      {posts.map(post => (
        <article key={post.id}>
          <Link  href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </article>
      ))
      }
    </section >
  )
}