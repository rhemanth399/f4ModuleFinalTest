import React from 'react'
import {Link} from "react-router-dom";
import "../App.css"
function NotFound() {
  return (
   <div className="container">
  <h2>404</h2>
  
  <p>Please Check the URL</p>
  
  <Link className="text-center text-decoration-none" to={`/`}>
          <button className="btn btn-light">Home</button>
        </Link>
</div>

  )
}

export default NotFound