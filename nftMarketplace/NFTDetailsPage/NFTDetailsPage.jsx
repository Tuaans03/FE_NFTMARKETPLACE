import React from "react";

//INTERNAL IMPORT
import { NFTDescription, NFTDetailslmg, NFTTabs } from "./NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";

export const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailslmg /> 
        <NFTDescription />
     
      </div>
    </div>
  );
};

