'use client'
import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const App = () => {
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)

    //     const tween = gsap.to('#particles-js', {scale: 0.5, duration: 1, ease: 'power1.inOut'})
    //     const timeline = gsap.timeline().add(tween)

    //     ScrollTrigger.create({
    //         trigger: '.content',
    //         start: 'top center',
    //         end: 'bottom center',
    //         pin: true,
    //         pinSpacing: false,
    //         animation: timeline
    //     })
    // }, []);

    return (
        <div>
            {/* <div className="content" style={{ height: '1000px', backgroundColor: '#e4563' }}>Hello</div> */}

            <Particles 
                id="particles-js"
                options={{
                    background: {
                        color: "#0e387a"
                    },
                    fpsLimit: 60,    
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 10800
                            },
                            limit: 0,
                            value: 400
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 1,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.05
                            }, 
                            value: 1,
                        }
                    }
                }}
                
            />
        </div>
    )
}
export default App