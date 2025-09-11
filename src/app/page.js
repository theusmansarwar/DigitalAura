import React from 'react'
import Featured from './components/Featured/Featured'
import Welcome from './components/Welcome'
import Serve from './components/Serve'
import Graphic from './components/Graphic'
import Testimonal from './components/Testimonal'
import Ranking from './components/Ranking'

const page = () => {
  return (
    <div>
      <Featured/>
          <Welcome/>
        <Serve/>
        <Ranking/>
        <Graphic/>
      <Testimonal/>
    </div>
  )
}

export default page