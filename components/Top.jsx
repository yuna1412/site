import React from 'react'
import topSheet from '../styles/top.module.scss'

export default function Top() {
    return (
        <>
            <div className={topSheet.container}>
                <img className={topSheet.img} src="/image/cover_14.jpg"/>
                <div className={topSheet.textScroll}>
                    <p className={topSheet.border}>Scroll Down</p>
                </div>
                <div className={topSheet.text}>
                    <p  className={topSheet.guidance}>Products, brands, and experiences.</p>
                    <a href='/' className={topSheet.Url}>
                        <img className={topSheet.UrlImg} src="/image/arrow-2.svg"/>
                        <span className={topSheet.UrlText}>See work archive</span>
                    </a>
                </div>
            </div>
        </>
    );
}