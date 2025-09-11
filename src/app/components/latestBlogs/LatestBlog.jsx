import React from 'react'
import PartA from './partA/PartA'
import CardSection from './partB/PartB'
import FeaturedCard from './partC/PartC'
import Button2 from '../Buttons/Button2'

const LatestBlog = () => {
  return (
    <>
    <Button2 label={"Latest Blogs"} />
    <PartA />
    <CardSection />
    <FeaturedCard />
    </>
  )
}

export default LatestBlog