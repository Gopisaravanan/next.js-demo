import Link from "next/link"

const Blog = () => {
  return (
    <div>
      <h1>This is blog page </h1>
      <br></br>
    <button>
    <Link href='/'>
      Home
      </Link>
      </button>
    </div>
  )
}

export default Blog
