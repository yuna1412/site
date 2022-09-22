import React, {useState, useRef}  from 'react'
import modalSheet from '../styles/modal.module.scss'

export default function Modal({show}) {
    return (
        <div>
            {show &&
                <div className={modalSheet.modal}>
                    <div className={modalSheet.container}>
                        <ul className={modalSheet.menu}>
                            <li className={modalSheet.item}>
                                <a href='/' className={modalSheet.text}>Projects</a>
                            </li>
                            <li className={modalSheet.item}>
                                <a href='/' className={modalSheet.text}>Journal</a>
                            </li>
                            <li className={modalSheet.item}>
                                <a href='/' className={modalSheet.text}>About</a>
                            </li>
                            <li className={modalSheet.item}>
                                <a href='/' className={modalSheet.text}>Contact</a>
                            </li>
                        </ul>

                        <div className={modalSheet.follow}>
                            <p className={modalSheet.message}>Follow us</p>
                            <ul className={modalSheet.icons}>
                                <li  className={modalSheet.icon}>
                                    <a href='/'>
                                        <img className={modalSheet.img} src='/image/sns_b_2.svg'/>
                                    </a>
                                </li>
                                <li  className={modalSheet.icon}>
                                    <a href='/'>
                                        <img className={modalSheet.img} src='/image/sns_b_3.svg'/>
                                    </a>
                                </li>
                                <li  className={modalSheet.icon}>
                                    <a href='/'>
                                        <img className={modalSheet.img} src='/image/sns_b_1.svg'/>
                                    </a>
                                </li>
                                <li  className={modalSheet.icon}>
                                    <a href='/'>
                                        <img className={modalSheet.img} src='/image/sns_b_4.svg'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}