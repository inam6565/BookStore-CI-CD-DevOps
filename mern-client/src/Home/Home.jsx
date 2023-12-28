import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
    </div>
  )
}

export default Home