//always remember whenever we use setstate it rerender the page again with some new additional features , in simple words reloading of the page again.
import React, { useState } from "react";

export default function Tour(props) {

  const [details, setDetails] = useState(false);

  //when doing destructuring of the object, need to pass exact name of the props which pased into the previous section
  let { uniid, functionremtour, toursimage, toursinfo, toursname, toursprice } =
    props;
  return (
    
      <div className="universal card mb-5  card-width">
        <img className="card-img-top image-size" src={toursimage} alt={toursname} />
        <div className="card-body">
          <div className="universal ess-details">
            <h3 className="card-title">{toursname}</h3>
            <p className="tourprice">{toursprice}$</p>
            <br />
          </div>
          <p className="card-text">
            {details ? toursinfo : `${toursinfo.slice(0, 150)}....`}
            <button className="clickbtn" onClick={() => setDetails(!details)}>
              {details ? "---Show Less" : "Read More"}
            </button>
          </p>
          {/* Noted : in onclick event handler, setstate should not be passed directly. Because if we do so then state will be updated automatically at the time intiall loading of the page. To avoid this use arrow function  */}
          <button
            type="button"
            //noted : in react when you are passing function with (), then it is important to bind it with the arrow function instead function will gonna execute immediately without even occuring of that event.
            onClick={()=> functionremtour(uniid)}
            className="btn btn-outline-danger"
          >
            Not Intersted
          </button>
        </div>
      </div>
  );
}
