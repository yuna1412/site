import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import topSheet from '../../styles/index/top.module.scss'

gsap.registerPlugin(ScrollToPlugin);

export default function Top() {
    const scrollDown = (e) => {
        e.preventDefault()
        gsap.to(window, {
            duration: 0.5,
            scrollTo: {y: window.innerHeight},
        })
    }
    return (
        <div className={topSheet.container}>
            <img className={topSheet.img} src="/image/cover_14.jpg"/>
            <div className={topSheet.textScroll}>
                <a href="#" className={topSheet.border} onClick={scrollDown}>Scroll Down</a>
            </div>
            <div className={topSheet.text}>
                <p  className={topSheet.guidance}>Products, brands, and experiences.</p>
                <a href='/' className={topSheet.Url}>
                    <img className={topSheet.UrlImg} src="/image/arrow-2.svg"/>
                    <span className={topSheet.UrlText}>See work archive</span>
                </a>
            </div>
        </div>
    );
}