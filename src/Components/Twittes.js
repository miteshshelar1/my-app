import React from 'react'
import CreateTweet from './CreateTweet'

const Twittes = () => {
  return (
    <div className='posts'>
      <div className='posts_home'>Home
      <div className='btnSection'>
            <input type='button' value='For you' className='btn btn-main'  />
            <input type='button' value='Following' className='btn btn-tweet' />
          </div>
      </div>
   <CreateTweet></CreateTweet>
</div>

  )
}

export default Twittes 
