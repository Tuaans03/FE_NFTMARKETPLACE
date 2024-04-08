import React ,{useState,useEffect} from 'react'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,
  } from "react-icons/bs";

//INTERNAL INPORT
import Style from "./Collection.module.css";
import { DaysComponents } from './DaysComponents/DaysComponents';

export const Collection = () => {
    
    const [populer, setPopuler] = useState(true);
    const [following, setfollowing] = useState(false);
    const [news, setnews] = useState(false);
    const CardArray = [1,2,3,4,5,6,7,8];
    const followingArray = [1,2,3,4];
    const newsArray = [1,2,3,4,5,6];

    const openPopuler = ()=>{
        if(!populer){
            setfollowing(false);
            setPopuler(true);
            setnews(false);
        }
    } 
    
    const openNews = ()=>{
        if(!news){
            setfollowing(false);
            setPopuler(false);
            setnews(true);
        }
    } 

    const openFollower = ()=>{
        if(!following){
            setfollowing(true);
            setPopuler(false);
            setnews(false);
        }
    } 

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={ () => openPopuler() }>
                        <BsFillAlarmFill/> Last 24 hours
                        </button>


                        <button onClick={ () => openNews() }>
                        <BsFillCalendarDateFill/> Last 30 days
                        </button>

                        <button onClick={ () => openFollower()}>
                        <BsCalendar3/> Last 24 hours
                        </button>
                    </div>
                </div>
            </div>

            {
                populer && (
                    <div className={Style.collection_box}>
                        {CardArray.map( (el,i) =>(
                            <DaysComponents key={i+1}/>
                        ))}
                    </div>
                )
            }

            {
                following && (
                    <div className={Style.collection_box}>
                         {followingArray.map( (el,i) =>(
                            <DaysComponents key={i+1}/>
                         ))}
                    </div>
                )
            }

            {
                news && (
                    <div className={Style.collection_box}>
                        {newsArray.map( (el,i) => (
                            <DaysComponents key={i+1}/>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
