import React from 'react'
// import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App () {

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://free-news.p.rapidapi.com/v1/search',
  //     params: {q: 'Elon Musk', lang: 'en'},
  //     headers: {
  //       'x-rapidapi-host': 'free-news.p.rapidapi.com',
  //       'x-rapidapi-key': 'cd61582f8amsh5065293a7ca81bep1c2904jsn8b3f7d99cd2a'
  //     }
  //   }

  //   axios.request(options).then((res) => {
  //     console.log(res, "res");
  //   }).catch(err => {console.log(err);})

  // }, [])

  return (
    <>

      <Router>
      <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about'  element={<About />}  />
        <Route exact path='/contact'  element={<Contact />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
