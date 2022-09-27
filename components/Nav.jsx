import React from 'react'
import navSheet from '../styles/nav.module.scss'

export default function Nav() {
    return (
            <div className={navSheet.container}>
                <a href='/' className={navSheet.arrow}/>
            </div>
    );
}