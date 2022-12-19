import Link from 'next/link'
import { useRouter } from 'next/router'


const Home = () => {

const router = useRouter()

const handleClick = () =>{
  console.log("placing your order");
  router.push('/product')
  // router.replace('/product')
}


  return (
    <div>
      <h1>
        Home page
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus odit deleniti architecto! Nihil iusto optio provident maiores laboriosam beatae ad repellat minus ipsa. Autem sunt eum quasi dolorem laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci, odio veritatis vel nesciunt blanditiis eum autem ullam hic molestias et distinctio vitae, eius at beatae numquam est dolorem tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, autem. Temporibus, omnis! Deleniti cupiditate itaque quis nobis quos. Ducimus quod deleniti porro accusamus ex quos reprehenderit neque aut rerum repellat.</p>
    <br></br>
    <button>
    <Link href='/blog'>
      Blog
      </Link>
      </button>
      <br></br>
      <br></br>

      {/* navigating programmatically */}
    <button onClick={handleClick}>place product order
      </button>
    </div>
  )
}

export default Home
