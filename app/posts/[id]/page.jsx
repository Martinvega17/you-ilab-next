const fetchSinglePost = (id) => {

  return fetch(`https://apimocha.com/youilabprojects/projects/${id}`, {
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
    <h1 className="mt-20 text-2xl">{post.title}</h1>
    <p>{post.body}</p>
    </article>
  )
}