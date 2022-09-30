import React from 'react'
import productsSheet from '../../styles/index/products.module.scss'

export default function Products() {
    return (
        <div className={productsSheet.container}>
            <div className={productsSheet.item}>
                <div className={productsSheet.itemText}>
                    <h3 className={productsSheet.text}>About us</h3><br/><br/>
                    <p  className={productsSheet.textExplanation}>broom inc.は東京を拠点に活動するデザインスタジオ。モノの企画・設計、ブランディング、事業開発まで、デザインを軸に、だいたいなんでもやっています。多様で複雑な現代のブランドやサービス、延いては物事の構造に合わせて、やわらかくいちばんいい”カタチ”を模索し、価値の高いアウトプットを実現します。</p>
                    <br/><br/><a href='/'  className={productsSheet.textUrl}>→ Learn more</a>
                </div>
                <img className={productsSheet.img}src="/image/top_ven.svg"/>
            </div>
    </div>
    );
}