import React from 'react'
import headerSheet from '../styles/header.module.scss'

export default function Header() {
    return (
        <>
            <div className={headerSheet.container}>
                <div className={headerSheet.titleLeft}>
                    <img className={headerSheet.title} src="/image/broom.svg"/>
                </div>
                <ul className={headerSheet.titleRight}>
                    <li className={headerSheet.group}>
                        <a href='/' className={`${headerSheet.subtitle} ${headerSheet.select}`}>Ja</a> 
                        <a href='/' className={`${headerSheet.subtitle} ${headerSheet.select}`}>En</a> 
                    </li>
                    <li className={headerSheet.group}>
                        <a href='/' className={headerSheet.menu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}