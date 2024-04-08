import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
//INTERNAL IMPORT
import Style from "./Subcribe.module.css";
import images from "../../img";

export const Subcribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>never miss a drop</h2>
          <p>
            Subscribe to our super-exclusive drop list and be the first to know abour
            upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>get more discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premeum magazines</small>
          </div>

          <div className={Style.subscribe_box_left_box_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill
              className={Style.subscribe_box_left_box_input_icon}
            />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="Get update"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};
