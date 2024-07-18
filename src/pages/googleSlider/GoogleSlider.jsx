import React, { useState } from 'react'
import './googleSlider.css'

const GoogleSlider = () => {
    const [slide,setSlide] = useState(0);
    const titles = [
        "Apply to our programs",
        "Get Google technology",
        "Meet the right people",
        "Discover Campus"
    ];
    const descs = [
        "Google for Startups offers a wide variety of programs to help startups grow and scale. Selected startups get bespoke Google support and guidance to help achieve their specific goals.",
        "Reach more customers, build better products, and run more efficiently by using innovative Google tools and products.",
        "Connect with like-minded founders, get expert guidance from Google mentors, network with industry leaders, and maybe even find your next investor at the Campus Cafe.",
        "Google for Startups Campuses offer physical spaces around the world where tech-based startups enjoy the best of Google with free trainings, mentoring, and a diverse community of problem solvers."
    ];
    const btnInfo = [
        "Explore",
        "Find tools",
        "Learn",
        "Learn more"
    ];
    const images = [
        'https://kstatic.googleusercontent.com/files/9e0a5271a603f3c7c5022d2f2acc9605c9082f5cb8595ba13edbf307a869dfa5fb070f9e46719dea3f97fd12c50e07cfa154b6b61222a74af5d13ae779a770c8',
        'https://kstatic.googleusercontent.com/files/20f7204c32c94a37bd3dd5495862d00b72e2b7fb5f0093313c607ef04f9fb33d48bdcca6efd58e3de3ad4e3f542f2fde4c36328dffb5ffc457bc090eb451cfa8',
        'https://kstatic.googleusercontent.com/files/cfcd5e259075efc8dd70bfc736c72c8a171ad394670f015ba24c19eaef85ab0dfa1bd34bbf8e55f130ec22adda82ff5a4200ac46e64f368fffc07eddc2d93cf4',
        'https://kstatic.googleusercontent.com/files/acd18ca25e2b117831e384bb00d5a16b7a560253f99c51fd4299074656d2317c27693ba5837b95151143a3cf3d940a7cddec4593b6942ae3f67954a97383f0e5'
    ]
  return (
    <div className='slidesMain' style={{
        color : "white"
    }}>
        <div className="slideNames">
            <div onClick={() => setSlide(0)} className={slide == 0 ? 'active' : ''}>Programs</div>
            <div onClick={() => setSlide(1)} className={slide == 1 ? 'active' : ''}>Products</div>
            <div onClick={() => setSlide(2)} className={slide == 2 ? 'active' : ''}>People</div>
            <div onClick={() => setSlide(3)} className={slide == 3 ? 'active' : ''}>Spaces</div>
        </div>
        <div className='infoSection'>
            <div className='dataSection'>
                <div className="wrapper">
                <h1>{titles[slide]}</h1>
                <p>{descs[slide]}</p>
                <button>{btnInfo[slide]}</button>
                </div>
            </div>
            <div className='imgSection'>
                <img src={images[slide]} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default GoogleSlider