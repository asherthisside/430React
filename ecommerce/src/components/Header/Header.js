import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
// import { loginContext } from '../../App'
import { useContext } from 'react'

export default function Header() {
  // const [loggedIn, setLoggedIn] = useContext(loginContext)

  // useEffect(() => {
  //   console.log(loggedIn);
  // })
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">E-Comm</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/cart">
                <button className='btn btn-primary' onClick={() => {setLoggedIn(!loggedIn)}}>Logout</button>
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}