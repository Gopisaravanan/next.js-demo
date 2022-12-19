import Link from "next/link"

const ProductList = () => {
  return (
    <div>
      <h2>product 1</h2>
      <h2>product 2</h2>
      <h2>product 3</h2>
      <br></br>
    <button>
    <Link href='/'>
      Home
      </Link>
      </button>
    </div>
  )
}

export default ProductList
