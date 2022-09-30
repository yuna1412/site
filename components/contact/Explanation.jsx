import React from 'react'
import explanationSheet from '../../styles/contact/explanation.module.scss'

export default function Explanation() {
    return (
            <div className={explanationSheet.explanation}>
                <div className={explanationSheet.guidance}>
                    <p className={explanationSheet.textTitle}>Work with us</p>                        
                    <p className={explanationSheet.text}>プロジェクトのご依頼やご相談等、常に歓迎しています。実績にないジャンルのご相談も大歓迎です。まずは、フォームまたは hello (at) broom-studio (dot) com からご連絡ください。担当者からご返信を差し上げます。</p>
                </div>
                <div className={explanationSheet.guidance}>
                    <p className={explanationSheet.textTitle}>Studio address</p>
                    <p className={explanationSheet.text}>〒107-0062 東京都港区南青山 2-2-6 ラセーナ南青山#303 ( 東京メトロ 銀座線/半蔵門線 青山一丁目駅 徒歩１分 )</p>
                    <a href='/' className={explanationSheet.Url}>
                        <img className={explanationSheet.UrlImg} src="/image/arrow-2.svg"/>
                        <span className={explanationSheet.UrlText}>Google Map</span>
                    </a>                
                </div>
            </div>       
    );
}