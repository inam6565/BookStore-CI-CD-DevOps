import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
    </div>
  )
}

export default Home