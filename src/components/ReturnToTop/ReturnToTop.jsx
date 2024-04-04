import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

import './ReturnToTop.css';

const ArrowBtn = (props) => (
    <div className={props.class}>
        <a href="#home">
            <BsArrowUpSquare 
                className='app__returntotop_arrow-icon' 
            />
        </a>  
    </div>
)

const ReturnToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);    
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        {(scrollPosition > 150 ) && (
                <ArrowBtn class='app__returntotop btn1' />
        )}

        {(scrollPosition > 1000) && (
                <ArrowBtn class='app__returntotop btn2' />
        )}
        </>
    )
}

export default ReturnToTop