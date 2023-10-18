const fetchSinglePost = (id) => {

  return fetch(`https://my-json-server.typicode.com/Martinvega17/json-db/Projects/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article className="ml-2">
      <h1 className="mt-20 text-5xl text-center font-MontserratBold text-titleAbout dark:text-neutral-300">{post.title}</h1>
      <div className="px-4 py-8 sm:py-16 lg:px-24 xl:px-[200px]">
        <div className="text-[15px] leading-[27px] text-justify">
          <div className="w-auto left ">
            <p>{post.mainSection}</p>
          </div>
        </div>
      </div>
    </article>
  )
}