import React from 'react'
import aboutSheet from '../../styles/index/about.module.scss'

export default function About() {
    return (
        <div className={aboutSheet.container}>
            <div className={aboutSheet.inner}>
                <div className={aboutSheet.item}>
                    <div className={aboutSheet.itemText}>
                        <h3 className={aboutSheet.text}>About us</h3>
                        <p  className={aboutSheet.textExplanation}>broom inc.は、東京を拠点に活動するデザインスタジオ。モノの企画・設計、ブランディング、事業開発まで、デザインを軸に、だいたいなんでもやっています。多様で複雑な現代のブランドやサービス、延いては物事の構造に合わせて、やわらかくいちばんいい”カタチ”を模索し、価値の高いアウトプットを実現します。</p>
                        <a href='/' className={aboutSheet.Url}>
                            <img className={aboutSheet.UrlImg} src="/image/arrow-2.svg"/>
                            <span className={aboutSheet.UrlText}>Learn more</span>
                        </a>
                    </div>
                    <img className={aboutSheet.img}src="/image/top_ven.svg"/>
                </div>
            </div>
        </div>
    );
}