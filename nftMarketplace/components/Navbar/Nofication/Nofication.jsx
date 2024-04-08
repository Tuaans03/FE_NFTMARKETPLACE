import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Nofication.module.css";
import images from "../../../img";

export const Nofication = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>

      <div className={Style.notification_box}>

        <div>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile img"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Nguyễn Quốc Tuấn</h4>
          <p>Measure action your user ....</p>
          <p className={Style.small}>3 minutes ago</p>
        </div>
        <span className={Style.notification_box_new}></span>
        </div>
        
      </div>

    </div>
  );
};
