import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import arrowSheet from '../../styles/common/arrow.module.scss'

// gsapでscrollToを使用するために必須
gsap.registerPlugin(ScrollToPlugin);

export default function Arrow() {
    const scrollTop = (e) => {
        // イベントをキャンセル
        e.preventDefault()
        // windowはグローバル変数
        gsap.to(window, {
          duration: 0.5,
          scrollTo: {y: 0},
        })
    }
    return (
            <div className={arrowSheet.container}>
                <a href='#' className={arrowSheet.arrow} onClick={scrollTop}/>
            </div>
    );
}