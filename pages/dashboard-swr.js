// client side data fetching useSWR
import useSWR from 'swr'

const fetcher = async () => {
   const response = await fetch('http://localhost:4000/dashboard')
   const data = await response.json()
//    console.log(data);
   return data
   
}

const DashboardSwr = () => {
    const { data, error } = useSWR('dashboard', fetcher)
    console.log(data);
    if (error) return "An error has accured";
    if(!data)return "Loading";
    return (
    <>
      <h2>Dashboard</h2>
      <h2>posts - {data.posts}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>Comments - {data.comments}</h2>
      <h2>followers - {data.followers}</h2>
      <h2>following - {data.following}</h2>
      </>
  )
}


export default DashboardSwr
