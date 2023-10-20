import Link from "next/link"
import Image from "next/image"

const fetchPosts = () => {
  return fetch('http://localhost:3000/api/prueba/')
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
}

export default async function PostsPage({ params }) {
  try {
    const posts = await fetchPosts();
    if (!Array.isArray(posts)) {
      throw new Error("El resultado de fetchPosts no es una matriz");
    }

    console.log(posts);

    return (
      <section className="mt-2 ml-4">
        {posts.map(post => (
          <article key={post.id}>
            <Link href='/Projects/[id]/' as={`/Projects/${post.id}`}>
              <h2 className="text-2xl ">{post.title}</h2>
              <Image src={post.imagen} alt="" width={300} height={300} className="mb-4" />
            </Link>
          </article>
        ))}
      </section>
    );
  } catch (error) {
    console.error("Error al recuperar los posts:", error);
  }
}
