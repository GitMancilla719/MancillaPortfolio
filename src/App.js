import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'

import Particles from 'react-particles-js'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const appStyle = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#171717',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundSize: 'cover',
    [theme.breakpoints.between(600, 959)]: {
      height: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
}))

const params = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffc300',
    },
    shape: {
      type: 'triangle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.21646062821684559,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 80.17060304327615,
      color: '#ffffff',
      opacity: 0.05,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 85.26810729164123,
        size: 3,
        duration: 7.308694910712106,
        opacity: 0.5928163649799819,
        speed: 3,
      },
      repulse: {
        distance: 97.44926547616141,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
}

function App() {
  const cls = appStyle()
  const [tabSelect, setTab] = useState(0)

  return (
    <div className={cls.main}>
      <Particles params={params} style={{ position: 'absolute' }} />
      <Navigation setTab={setTab} />

      <Carousel
        activeIndex={tabSelect}
        onSelect={(selectedIndex) => setTab(selectedIndex)}
        indicators={false}
        controls={false}
        interval={null}
      >
        <Carousel.Item style={{ transitionDuration: '1.2s' }}>
          <Home />
        </Carousel.Item>
        <Carousel.Item style={{ transitionDuration: '1.2s' }}>
          <About />
        </Carousel.Item>
        <Carousel.Item style={{ transitionDuration: '1.2s' }}>
          <Works />
        </Carousel.Item>
        <Carousel.Item style={{ transitionDuration: '1.2s' }}>
          <Contact />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default App
