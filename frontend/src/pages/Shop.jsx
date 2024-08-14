import React from 'react'
import ShopItem from '../components/ShopItem'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'

const Shop = () => {
  return (
    <div>
      <ShopItem />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
