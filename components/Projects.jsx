import React from 'react'
import projectsSheet from '../styles/projects.module.scss'
import Project from './Project';

export default function Projects() {
    return (
        <>  
            <div className={projectsSheet.title}>
                <h3 className={projectsSheet.titleText}>Featured projects</h3>
            </div>
            <div >
                <ul className={projectsSheet.allImage}>
                    <Project
                        imageUrl={"/image/p_ju-ni_a.jpg"}
                        text={<>"12 / JU-NI"<br/>Kimura Soap<br/>Haircare brand, 2019-</>}
                    />
                    <Project
                        imageUrl={"/image/p_h-stool_a.jpg"}
                        text={<>"H Stool"<br/>Hiramiya<br/>Stool,2019</>}
                    />
                    <Project
                        imageUrl={"/image/p_parcel_a.gif"}
                        text={<>"Parcel"<br/>Hiramiya<br/>Storage,2019-</>}
                    />
                    <Project
                        imageUrl={"/image/p_pjb_a.jpg"}
                        text={<>Paper Joint Basket<br/>Own Products<br/>Basket, 2018</>}
                    />
                    <Project
                        imageUrl={"/image/p_pjb_a.jpg"}
                        text={<>Paper Joint Basket<br/>Own Products<br/>Basket, 2018</>}
                    />
                    <Project
                        imageUrl={"/image/p_pjb_a.jpg"}
                        text={<>Paper Joint Basket<br/>Own Products<br/>Basket, 2018</>}
                    />
                </ul>
            </div>
            
                

            <div className={projectsSheet.end}>
                <a href='/' className={projectsSheet.Url}>See work archive</a>
            </div>
        </>
    );
}