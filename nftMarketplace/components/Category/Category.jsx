import React from "react";
import Image from "next/image";
import { BsCCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

export const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5,6];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={1 + 1}>
            <Image
              src={images.creatorbackground1}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            ></Image>

            <div className={Style.category_box_title}>
              <span>
                <BsCCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Enterainment</h4>
                <small>2003 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
