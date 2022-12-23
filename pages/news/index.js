import Link from "next/link"
const NewsList = ({articles}) => {
  return (
    <>
      <h1>News List</h1>
      {articles.map((article) => {
        return (
          <div key = {article.id}>
            <h2>
            {article.title} {article.description} | {article.category}
            </h2>
            <hr></hr>
          </div>
        )
      })}
            <button>
        <Link href={"/"}>Home</Link>
      </button>
      
      
      </>
  )
}

export default NewsList

export const getServerSideProps = async () => {
    const response = await fetch ('http://localhost:4000/news')
    const data = await response.json()

    return {
        props : {
            articles : data,
        },
    }
}
