import Head from 'next/head'
import React, {useEffect, useRef}  from 'react';

import 'intersection-observer';
import { gsap } from "gsap";
import { useInView } from 'react-intersection-observer'


export default function index() {
  const fade = useRef()
  // const options = {
  //   root: null,
  //   rootMargin: "10px",
  //   threshold: 0
    
  // };
  useEffect(() => {
    const elements = document.getElementsByClassName('test')
    const options = {
      root: null, 
      threshold: 0
    };
    const observer = new IntersectionObserver(callback, options);
    for(let i = 0; i <elements.length; i++){
      const elem = elements[i]
      // observer.observe(elem)
      gsap.set(elem, { alpha: 0});
    }
    
    return () => {};
  }, []);
  
  const callback = (data) => {
    console.log("表示")
    console.log(data[0])
  };
  // const observer = new IntersectionObserver({callback, options});
  // observer.observe(target);
  
  return (
    <>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
      <p className='test'>100</p>
    </>
  );
}
