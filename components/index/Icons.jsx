import React from 'react'
import iconsSheet from '../../styles/index/icons.module.scss'

export default function Icons() {
    return (
        <div className={iconsSheet.container} id='down'>
            <div className={iconsSheet.item}>
                <h5 className={iconsSheet.text}>We design</h5>
                <img className={iconsSheet.img} src="/image/top_icons_a.gif"/>
            </div>
            <div className={iconsSheet.item}>
                <h5 className={iconsSheet.text}>Integrate for</h5>
                <img className={iconsSheet.img} src="/image/top_icons_b.gif"/>
            </div>
        </div>
    );
}