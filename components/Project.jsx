import Head from 'next/head'
import React from 'react'
import projectsSheet from '../styles/projects.module.scss'

export default function Project({imageUrl, text}) {
    return (
        <li className={projectsSheet.move}>
            <a href='/' >
                <img className={projectsSheet.img} src={imageUrl}/>
                <span className={projectsSheet.text}>{text}</span>
            </a>
        </li>
    );
}