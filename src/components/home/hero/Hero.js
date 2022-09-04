import React from 'react'
import  './hero.css'
import {FaArrowRight} from 'react-icons/fa';
import Title from '../Title';

export default function Hero() {
  return (
    <>
     <section className="hero">
        <div className="container">
            <div className="row">
            <Title subtitle={"WELLCOME TO"} title={"SK-DIGI-TECH"} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolorum repellendus, incidunt, magnam quod architecto quam consectetur error labore eligendi dolores delectus id officia nisi illo reiciendis ipsum quis dolore.
                Quisquam numquam architecto vero provident, fugit esse quia est quam! Nesciunt necessitatibus, pariatur voluptatum velit, non quidem alias consequuntur repellat illum labore rerum, deserunt magnam. At minus nesciunt temporibus! Earum.
                Neque,!</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET START NOW <FaArrowRight className='i' />
                    </button>
                        <button >
                            VIEW COURCES<FaArrowRight className='i'/>
                        </button>
                </div>
            </div>
        </div>
     </section>
     <div className="margin"></div>
    </>
  )
}
