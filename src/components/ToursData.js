import React, { useEffect, useState } from "react";
import Tourlist from "./Showingtours";
import Spinner from "./Spinner";

export default function Toursdata() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  function removingtour(id){
    console.log("is it happening because of this or not ")
    let updatedtours = tours.filter((e)=>{
      return e.id !== id
    })
    setTours(updatedtours)
  }
  
  async function fetchingdata() {
    let url = "https://course-api.com/react-tours-project";
    try {
      setLoading(true);
      let data = await fetch(url);
      let parsheddata = await data.json();
      setTours(parsheddata);
      setLoading(false);
    } catch (error) {
      console.log("i am not able to fetch data");
    }
  }
  useEffect(() => {
    fetchingdata();
    // eslint-disable-next-line
  }, []);

  if(loading){
    return(
      <div>
        <Spinner/>
      </div>
    )
  }
  console.log("this is here to check things  = ",tours)
    if(tours.length === 0){
      return (
        <div className="main-container universal">
          <h1>No Tours left</h1>
          <button type="button" onClick={fetchingdata} class="btn btn-outline-dark">Refresh It!</button>
        </div>
      )
    }
  
  return (
    <>
      <div className="universal main-container container">
        <div className=" universal heading-container">
          <h1>Our Offered Tours </h1>
        </div>
        <div>
          {tours.map((e) => {
            let { id, image, info, name, price } = e;
            return (
              <Tourlist
                uniid={id}
                key={id}
                toursimage={image}
                toursinfo={info}
                toursname={name}
                toursprice={price}
                functionremtour = {removingtour}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
