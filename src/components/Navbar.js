import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home">StayRooms</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link " to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link " to="/register">Register</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link " to="/login">login</Link>
                            </li>



                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }
