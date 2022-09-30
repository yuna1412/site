import React, {useState, useRef}  from 'react'
import navSheet from '../../styles/common/nav.module.scss'

export default function Nav({show}) {
    return (
        <div>
            {show &&
                <div className={navSheet.modal}>
                    <div className={navSheet.container}>
                        <ul className={navSheet.menu}>
                            <li className={navSheet.item}>
                                <a href='/' className={navSheet.text}>Projects</a>
                            </li>
                            <li className={navSheet.item}>
                                <a href='/' className={navSheet.text}>Journal</a>
                            </li>
                            <li className={navSheet.item}>
                                <a href='/' className={navSheet.text}>About</a>
                            </li>
                            <li className={navSheet.item}>
                                <a href='/' className={navSheet.text}>Contact</a>
                            </li>
                        </ul>

                        <div className={navSheet.follow}>
                            <p className={navSheet.message}>Follow us</p>
                            <ul className={navSheet.icons}>
                                <li  className={navSheet.icon}>
                                    <a href='/'>
                                        <img className={navSheet.img} src='/image/sns_b_2.svg'/>
                                    </a>
                                </li>
                                <li  className={navSheet.icon}>
                                    <a href='/'>
                                        <img className={navSheet.img} src='/image/sns_b_3.svg'/>
                                    </a>
                                </li>
                                <li  className={navSheet.icon}>
                                    <a href='/'>
                                        <img className={navSheet.img} src='/image/sns_b_1.svg'/>
                                    </a>
                                </li>
                                <li  className={navSheet.icon}>
                                    <a href='/'>
                                        <img className={navSheet.img} src='/image/sns_b_4.svg'/>
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