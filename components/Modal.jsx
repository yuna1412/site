import React from 'react'
import modalSheet from '../styles/modal.module.scss'

export default function Modal() {
    return (
        <div className={modalSheet.modal}>
            <ul className={modalSheet.container}>
                <li className={modalSheet.menu}>
                    <a href='/' className={modalSheet.text}>Projects</a>
                    <a href='/' className={modalSheet.text}>Journal</a>
                    <a href='/' className={modalSheet.text}>About</a>
                    <a href='/' className={modalSheet.text}>Contact</a>
                </li>

                <li className={modalSheet.follow}>
                    <p className={modalSheet.message}>Follow us</p>
                    <p className={modalSheet.icons}>
                        <a href='/' className={modalSheet.icon}>
                            <img className={modalSheet.img} src='/image/sns_b_2.svg'/>
                        </a>
                        <a href='/' className={modalSheet.icon}>
                            <img className={modalSheet.img} src='/image/sns_b_3.svg'/>
                        </a>
                        <a href='/' className={modalSheet.icon}>
                            <img className={modalSheet.img} src='/image/sns_b_1.svg'/>
                        </a>
                        <a href='/' className={modalSheet.icon}>
                            <img className={modalSheet.img} src='/image/sns_b_4.svg'/>
                        </a>
                    </p>
                </li>
            </ul>
        </div>
    );
}