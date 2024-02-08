import React from 'react'

import './Header.css'
function Header() {
  return (
    <div>
    <div>
        <ul>
            <li><a class="active" href="#home">LOAN_BAZAR.com</a></li>
        </ul>
  </div>
  <div className=''>
  <ul className='category'>
    <li className='list' >HOME LOAN</li>
    <li className='list' >CAR LOAN</li>
    <li className='list' >PERSONAL LOAN </li>
  </ul>

  </div>

 

  </div>
  )
}

export default Header