import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
            <div class="navbar">
        <nav>
            <div class="logo">
                <img src="https://www.edifycit.com/images/logowhite.png" alt="Logo"/>
            </div>
            <ul class="navlist">
                <li class="navhome"> Home</li>
                <li class="abcd"> Courses</li>
                <li class="abcd"> About</li>
                <li class="abcd"> Team</li>
                <li class="abcd"> Blogs</li>
                <li class="abcd"> News & Events</li>
                <li class="abcd"> Contact</li>
                <li class="apple"> Apply Now &nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </nav>
    </div>
        </>
    )
}

export default Nav
