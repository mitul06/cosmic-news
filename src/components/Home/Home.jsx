import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import newsApiActions from '../../redux/actions/newsApiActions'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.data)

  const location = useLocation()
  
  const searchPara = search => {
    dispatch(newsApiActions.fetchNews(search))
  }

  useEffect(() => {
    if(location.state.value === ''){
      searchPara('Top News')
    }else{
    searchPara(location.state.value)
    }
  }, [location.state.value])

  return (
    <>
      <div className='headline'>
        <h2>Headlines of {location.state.value === '' ? 'Top News': location.state.value}</h2>
        <hr />
      </div>
      {state?.articles.map(n => {
        return (
          <div className='homepage'>
            <div className='card-body'>
              <div className='header-img'>
                <h5 className='card-title'>{n.title}</h5>
                <div className='media'>
                  <img src={n.media} alt='img' />
                </div>
              </div>
              <div className='author'>
                Author: <span>{n.author !== null ? n.author : 'Unkonwn'}</span>
              </div>{' '}
              <div className='publish-date'>
                Publish : <span>{moment(n.published_date).fromNow()}</span>
              </div>
              <br />
              <ul>
                <li>
                  <p className='card-text'>{n.summary}</p>
                </li>
              </ul>
              <p className='country'>Country: {n.country}</p> <br />
              <button className='link'>
                {' '}
                <a href={n.link} target='_blank' rel='noopener noreferrer'>
                  Know More
                </a>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Home
