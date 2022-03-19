import React from 'react'
import './mensageIten.css'
export default ({data,user})=>{
      
      return(  
      <div className='messageLine'
      
      style={{
              justifyContent: user.id == data.author ?  'flex-end' : "flex-start"
      }}
      >
              <div className='messageItem'
                style={{
                        backgroundColor: user.id == data.author ? '#dcf8c6': '#fff'
                }}
              >
                      <div className='messagetext'>{data.body}</div>
                      <div className='messageDate'>18:00</div>

              </div>
      </div>
      )
}