import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
     <div className="container text-center e-cont">
      <div>
        <h2>404</h2>
        <h3>UH OH! You'r lost.</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti cum placeat rem laboriosam, labore voluptate debitis, corporis suscipit blanditiis at earum dolor sed repellat.</p>
        <Link to='/'>
        <button type="button" className="btn btn-primary btn-lg">GO Back To Home</button>
        </Link>
      </div>
     </div>

    </>
  )
}

export default Error