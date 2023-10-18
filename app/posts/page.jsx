import Link from "next/link"
import Image from "next/image"

const fetchPosts = () => {
  return fetch('https://my-json-server.typicode.com/Martinvega17/json-db/personajes')
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
            <h2 className="text-2xl ">{post.nombre}</h2>
            <Image src={post.imagen} alt="" width={300} height={300} className="mb-4"/>
          </Link>
        </article>
      ))
      }
    </section >
  )
}