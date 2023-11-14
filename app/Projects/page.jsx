import Link from "next/link";
import Image from "next/image";
import about from '@/assets/footer/about.webp';



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
      <div className="">
        <div className="about">

          <div
            className="h-[23rem] sm:h-[20rem] md:h-[18rem] lg:h-[20rem] xl:h-[25rem] w-full flex justify-center items-center"
            style={{
              backgroundImage: `url(${about.src})`,
              backgroundSize: "100% ",
            }}
          >
            <div className="container text-center sm:px-2 md:px-4 lg:px-8 py-4">
              <h1 className="text-white text-3xl lg:text-6xl font-MontserratBold text-center">Nuestros Proyectos</h1>
            </div>
          </div>
        </div>
        

        <section className="mt-2 2xl:mx-[200px] xl:mx-2 md:mx-8 sm:mx-6 mb-10">
          <h1 className="ml-4 text-4xl font-MontserratBold text-center pb-10 mt-10">Conoce nuestros Proyectos</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 gap-4 md:items-center"> {/* Grid que se adapta al tamaño de pantalla */}
            {posts.map((post) => (
              <article key={post.id} className="md:max-w-md">
                <Link href='/Projects/[id]/' as={`/Projects/${post.id}`} className="max-w-md">
                  <Image
                    src={post.imagen}
                    alt=""
                    width={600}
                    height={400}
                    className="mb-4 sm:h-60 w-auto rounded-xl ml-2 sm:ml-4 "
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error al recuperar los posts:", error);
  }
}
