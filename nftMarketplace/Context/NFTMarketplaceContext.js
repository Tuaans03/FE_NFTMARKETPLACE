import React, { useState, useEffect, useContext } from "react";

import { ethers } from "ethers";
import Router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
//INTERNAL IMPORT

import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";

//--FETCHING SMART CONTRACT
const fetchContract = (singnerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceABI,
    NFTMarketplaceAddress,
    singnerOrProvider
  );

//--CONNECTIONG WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    if(window.ethereum){
      const accountAddress = await window.ethereum.request({
        method:"eth_requestAccounts",
      })
      
      console.log(accountAddress[0]);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI,
        signer
      );
      if(accountAddress.length) {setcurrentAccount(accountAddress[0])};
      window.location.reload();
      return contract;
    }
    else{
      alert("Please install MetaMask Extension!!!");
    }
  } catch (error) {
    console.log("Something went wrong while connecting with contract " + error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover ,collect, and sell NFTs";

  //---USESTATE
  const [currentAccount, setcurrentAccount] = useState("");



  return (
    <NFTMarketplaceContext.Provider value={{ titleData }}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
