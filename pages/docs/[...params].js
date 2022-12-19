// catch all routes

import { useRouter } from "next/router";



const Params = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params);

    if (params.length === 2){
        return(
            <h1>
                viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    }
    if (params.length === 1){
        return(
            <h1>
                viewing docs for feature {params[0]}
            </h1>
        )
    }
  return (
    <div>
      <h1>
        Docs home page
      </h1>
    </div>
  )
}

export default Params
