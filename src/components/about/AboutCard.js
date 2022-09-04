import React from 'react'
import Img from '../../images/card1.jpg'
import Title from '../home/Title'
import { homeAbout } from '../../dummydata'
import AWapper from './AWapper'
import './about.css'

export default function AboutCard() {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    <img src={Img} alt="" />
                </div>
                <div className="right row">
                    <Title subtitle='LEARN ANYTHING' title='Learn and Build Ypur life' />
                    <div className="items">
                        {homeAbout.map((val)=>(
                            <div className="item flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <AWapper />
    </>
  )
}
