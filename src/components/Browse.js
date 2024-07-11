import React from 'react'
import Header from './Header'

const Browse = ({isAuthenticated}) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated}/>
    </div>
  )
}

export default Browse
