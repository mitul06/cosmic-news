import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [value, setValue] = useState('')
  const navigation = useNavigate()

  const handleChangeInput = event => {
    setValue(event.target.value)
  }

  const handleChangeValue = e => {
    navigation('/', { state: { value: value } })
    setValue('')
    e.preventDefault()
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <Link to='/'> Cosmic News </Link>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  <Link to='/'> Home </Link>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <Link to='/about'> About</Link>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <Link to='/contact'>Contact</Link>
                </a>
              </li>
            </ul>
            <form className='d-flex' onSubmit={handleChangeValue}>
              <input
                className='form-control me-3'
                type='search'
                placeholder='Search for topics, locations & sources'
                aria-label='Search'
                value={value}
                onChange={handleChangeInput}
              />
              <button className='btn btn-outline-warning' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
