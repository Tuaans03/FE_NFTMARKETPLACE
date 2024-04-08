import React, {useState,useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subcribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
  

} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const index = () => {
  const {} = useContext(NFTMarketplaceContext);
 
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider/>
      <Title
      heading="Lastest Audio Collection"
      paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive/>
      <Title
      heading="Filter by Collection"
      paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <FollowerTab/>
      <Collection/>
      <Title
      heading="Explore NFTs Video"
      paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Slider/>
      <Title
      heading="Featured NFTs"
      paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter/>
      <NFTCard/>
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
      <Subcribe />
      <Brand/>
      <Video/>
    </div>
  );
};

export default index;
