import React from 'react'
import Spin from "./loading.gif"

export default function Spinner() {
  return (
    <div>
      <div className="container text-center my-5">
        <img src={Spin} alt="loader" />
      </div>
    </div>
  )
}
