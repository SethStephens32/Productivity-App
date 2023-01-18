import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true
                        }
                    },
                    "color": {
                        "value": "var(--color-white)",
                        "animation": {
                            "enable": true,
                            "speed": 15,
                            "sync": true
                        }
                    },
                    "opacity": {
                        "value": 0.5
                    },
                    "size": {
                        "value": {
                            "min": 0.5,
                            "max": 3
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 100,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 4
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "outModes": {
                            "default": "out"
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "repulse": {
                            "distance": 100
                        },
                        "push": {
                            "quantity": 4
                        }
                    }
                },
                "background": {
                    "color": "#000"
                }
            }
            }
        />
  )
}

export default Particle