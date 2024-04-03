import React from 'react'
import { BsArrowUpSquare } from 'react-icons/bs';

import './ReturnToTop.css';

const ReturnToTop = () => (
    <div className='app__returntotop'>
        <BsArrowUpSquare 
            className='app__returntotop_arrow-icon' 
        />
    </div>
);

export default ReturnToTop