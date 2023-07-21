import React from 'react'

function NavBar() {
  return (
    <nav>
        <div className='logo'>ReactApp</div>
        <div className='nav_links'>
            <ul>
                <li>Home</li>
                <li>Emp List</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar