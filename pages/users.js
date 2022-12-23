//  pre rendering and data fetching getStaticProps

import Link from "next/link"


const UserList = ({users}) => {
  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => {
        return(
            <div key = {user.id}>
                <p>User Name : {user.name}</p>
                <p>User Email : {user.email}</p>
            </div>
            
        )
        
      })}
           <button>
            <Link href={"/"}>Home</Link>
           </button>
    </>
  )
}

export default UserList

export const getStaticProps = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);

   return {
    props : {
        users : data
    }
   }
}















