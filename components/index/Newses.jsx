import React from 'react'
import newsSheet from '../../styles/index/news.module.scss'
import News from './News';

export default function Newses() {
    return (
        <div className={newsSheet.container}>
            <h3 className={newsSheet.title}>Recent news</h3>
            <News 
                imageUrl={"/image/j_012.jpg"}
                day={"2020.12 / Award"}
                text={"DFAアジアデザイン賞2020（香港）にて、broom inc.でクリエイティブ全般を手掛けた「12/JU-NI」がコミュニケーションデザイン部門からBronze Award、「Parcel」がインダストリアルデザイン部門からMerit Awardを、それぞれ受賞しました。"}
                Url={"DFA AWARDS"}
            />
            <News 
                imageUrl={"/image/j_010.jpg"}
                day={"2020.07 / Launch"}
                text={"訪日外国人の防災をサポートするプロジェクトを立ち上げました。（運営・プロジェクトオーナー : 株式会社ヒロモリ Fun to BOSAI Unit / 事業開発支援・クリエイティブディレクション : broom inc. ）"}
                Url={"BOSAI UNISON PROJECT"}
            />
        </div>

    );
}