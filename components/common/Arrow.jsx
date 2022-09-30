import React from 'react'
import arrowSheet from '../../styles/common/arrow.module.scss'

export default function Arrow() {
    return (
            <div className={arrowSheet.container}>
                <a href='/' className={arrowSheet.arrow}/>
            </div>
    );
}