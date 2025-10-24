import React from "react";
import {useFetch} from "../hooks/useFetch";
const FetchedList = () => {
  const {data,loading, error} =useFetch("https://api.escuelajs.co/api/v1/products")
if (loading) {
  return <p>Fetching items...</p>}
  if (error) {
    return <p >Error: {error}</p>
}

return (<div>
      <h2>Fetched items :-</h2>
      < div>
      {data  &&
    data.slice(0,10).map((item)=>(
            <div key= {item.id}>
            <img  src= {item.images} alt ={item.title} />
            <h3>Item Id:{item.id}</h3>
              <h3>item name: {item.title}</h3>
              <p>Itme description:{item.description}</p>
            </div>
              ))}
  </div>
  </div>
  )
}
export default FetchedList
