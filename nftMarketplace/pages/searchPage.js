import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css"
import {Slider,Brand} from '../components/componentsindex'
import {SearchBar} from "../SearchPage/SearchBar/SearchBar"
import { Filter } from '../components/componentsindex'
import {NFTCardTwo,Banner} from "../collectionPage/collectionIndex"
import images from "../img"

 const searchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ]
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2}/>
      <Filter/>
      <SearchBar/>
      <NFTCardTwo NFTData={collectionArray}/>
      <Slider/>
      <Brand/>
    </div>
  )
}
export default searchPage;