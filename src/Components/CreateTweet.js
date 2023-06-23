import React from 'react'
import { FaCalendarCheck, FaRegListAlt, FaRegSmile, FaRegImage } from 'react-icons/fa'

const Create_Tweet = () => {
  return (
    <div className='create'>
      <div className='create_first'>
        <div className='create_img'>
          <img src="/images/profile.png" alt="profile img" />
        </div>
        <div className='create_input'>
          <input type='text' className='create_control' placeholder='what is happening?' />
        </div>

      </div>

      <div className='create_second'>
        <FaRegImage className='ic' />
        <FaRegListAlt className='ic' />
        <FaRegSmile className='ic' />
        <FaCalendarCheck className='ic' />

      </div>
    </div>
  )
}

export default Create_Tweet
