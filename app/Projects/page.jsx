import Link from "next/link";
import Image from "next/image";

const fetchPosts = () => {
  return fetch('https://you-ilab-next.vercel.app/api/projects/')
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return res.json();
    });
}

export default async function PostsPage() {
  try {
    const posts = await fetchPosts();
    if (!Array.isArray(posts)) {
      throw new Error("El resultado de fetchPosts no es una matriz");
    }

    console.log(posts);

    return (
      <section className="mt-2 2xl:mx-[200px] xl:mx-2 md:mx-8 sm:mx-6 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 gap-4"> {/* Grid que se adapta al tamaño de pantalla */}
          {posts.map((post) => (
            <article key={post.id} className="max-w-md">
              <Link href='/Projects/[id]/' as={`/Projects/${post.id}`} className="max-w-md">
                <h2 className="text-2xl pt-4 sm:pt-6 pb-6 text-center sm:text-center font-OverPassSemiBold">{post.title}</h2>
                <Image
                  src={post.imagen}
                  alt=""
                  width={300}
                  height={200}
                  className="mb-4 sm:h-60 w-auto grayscale hover:grayscale-0 rounded-xl ml-2 sm:ml-4 "
                />
              </Link>
            </article>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error al recuperar los posts:", error);
  }
}
