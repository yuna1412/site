import React from 'react'
import productsSheet from '../styles/products.module.scss'

export default function Products() {
    return (
        <>
            <div className={usSheet.container}>
                <div className={usSheet.item}>
                    <div className={usSheet.itemText}>
                        <h3 className={usSheet.text}>About us</h3><br/><br/>
                        <p  className={usSheet.textExplanation}>broom inc.は東京を拠点に活動するデザインスタジオ。モノの企画・設計、ブランディング、事業開発まで、デザインを軸に、だいたいなんでもやっています。多様で複雑な現代のブランドやサービス、延いては物事の構造に合わせて、やわらかくいちばんいい”カタチ”を模索し、価値の高いアウトプットを実現します。</p>
                        <br/><br/><a href='/'  className={usSheet.textUrl}>→ Learn more</a>
                    </div>
                    <img className={usSheet.img}src="/image/top_ven.svg"/>
                </div>
            </div>

        </>
    );
}