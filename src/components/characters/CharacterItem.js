import React from 'react'

function CharacterItem({name,img,birthday,portrayed,status,nickname}) {
  
  const image = img || 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg';
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={image} alt='' />
      </div>
      <div className='card-back'>
        <h1>{name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {birthday}
          </li>
          <li>
            <strong>Status:</strong> {status}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default CharacterItem