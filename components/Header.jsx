import React, {useState, useRef, forwardRef, useImperativeHandle}  from 'react'
import headerSheet from '../styles/header.module.scss'
import Modal from './Modal'

export default function Header({Open, show}) {
    return (
        <div className={headerSheet.container}>
            <img className={headerSheet.logo} src="/image/broom.svg"/>
            <ul className={headerSheet.titleRight}>
                <li className={headerSheet.group}>
                    <a href='/' className={`${headerSheet.switching} ${headerSheet.select}`}>Ja</a> 
                    <a href='/' className={`${headerSheet.switching} ${headerSheet.select}`}>En</a> 
                </li>
                <li className={headerSheet.group}>
                    <a className={`${headerSheet.menu} ${show && headerSheet.move}`} onClick={Open}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}