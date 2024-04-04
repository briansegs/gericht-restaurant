import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

import './ReturnToTop.css';

const ArrowBtn = () => (
    <div className='app__returntotop'>
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

    const [widthPosition, setWidthPosition] = useState(0);

    const handleResize = () => {
        const width = window.innerWidth;
        setWidthPosition(width);    
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        {(scrollPosition > 150 && 
            widthPosition > 1150) && (
                <ArrowBtn />
        )}

        {(scrollPosition > 1000 && 
            widthPosition < 1150 && 
            widthPosition > 900) && (
                <ArrowBtn />
        )}
        </>
    )
}

export default ReturnToTop