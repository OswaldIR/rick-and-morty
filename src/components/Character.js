import React from 'react'

const Character = ({ qtyChars = [] }) => {
  return (
    <div className='row'>
      {
        qtyChars.map((item, index) =>(
          <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth: '200px'}}>
              <img src={item.image} alt={item.name}></img>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr />
                <p>{item.status}</p>
                <p>{item.gender}</p>
                <p>{item.origin.name}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Character