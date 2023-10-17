export default function PostLayout({ children }) {
    return (
        <div>
            <h1 className="mt-20 ml-4 text-4xl font-MontserratBold">Este es el layout de los posts</h1>
            {children}
        </div>
    )
}