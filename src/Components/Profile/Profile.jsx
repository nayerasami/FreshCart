import React from 'react'

export default function Profile({userData}) {
  return (
    <div className='container'>
    <h1>Hello {userData?.name}</h1>
    </div>
  )
}
