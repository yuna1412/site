import Head from 'next/head'
import React from 'react'
import projectsSheet from '../styles/projects.module.scss'

export default function Projects() {
    return (
        <>
            <Head>
            <meta charset='UTF-8'/>
            <meta name="description" content="Generated by create next app" />
            </Head>

            <h3>Featured projects</h3>
            <img src="/image/p_ju-ni_a.jpg"/>
            <img src="/image/p_h-stool_a.jpg"/>
            <img src="/image/p_parcel_a.gif"/>
            <img src="/image/p_pjb_a.jpg"/>
            <p>See work archive</p>

        </>
    );
}