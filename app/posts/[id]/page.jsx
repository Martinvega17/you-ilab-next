const fetchSinglePost = (id) => {

  return fetch(`https://my-json-server.typicode.com/Martinvega17/json-db/personajes/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  
  return (
    <article className="ml-2">
    <h1 className="mt-20 text-2xl">{post.nombre}</h1>
    <p>{post.descripcion}</p>
    </article>
  )
}