import React ,{useEffect} from "react";
import './Main.css';
import img from "../../Assets/img.jpeg";
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi";

import Aos from 'aos';
import 'aos/dist/aos.css';
const Data=[
    {
        id:1,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:2,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:3,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:4,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:5,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:6,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:7,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:8,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
    {
        id:9,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet maiores vero earum est neque consectetur esse. Eveniet aspernatur ercieserunt aliquid soluta ut maiores nemo dpiciatis nam sapiente architecto perferendis tenetur minus, delectus quam quaerat? Nostrum est nisi temporibus.'
    },
]


const Main=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right"  className="title">
                    Most Visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" 
                            className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="container flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Details<HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        </section>
    )

}
export default Main;