import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import { Flip } from 'react-reveal'
import { AboutStyle } from './About.style'
import clsx from 'clsx'
import reactLogo from '../../assets/1.png'
import muiLogo from '../../assets/2.png'
import gitLogo from '../../assets/3.png'
import githubLogo from '../../assets/4.png'
import jsLogo from '../../assets/5.png'
import cssLogo from '../../assets/6.png'
import htmlLogo from '../../assets/7.png'
import psLogo from '../../assets/8.png'
import reduxLogo from '../../assets/9.png'
import nodeLogo from '../../assets/10.png'
import mongoLogo from '../../assets/11.png'

const About = () => {
  const cls = AboutStyle()

  const FrontEndPics = [
    { tech: reactLogo, title: 'ReactJS' },
    { tech: reduxLogo, title: 'Redux' },
    { tech: muiLogo, title: 'MaterialUI' },
    { tech: jsLogo, title: 'JS' },
    { tech: cssLogo, title: 'CSS' },
    { tech: htmlLogo, title: 'HTML' },
  ]
  const ToolsPics = [
    { tech: gitLogo, title: 'Git' },
    { tech: githubLogo, title: 'GitHub' },
    { tech: psLogo, title: 'Photoshop' },
  ]
  const BackEndPics = [
    { tech: nodeLogo, title: 'NodeJS' },
    { tech: mongoLogo, title: 'MongoDB' },
  ]

  return (
    <div>
      <Box
        className={cls.gridContainer}
        component={Grid}
        container
        direction='row'
        spacing='3'
        justifyContent='center'
        alignContent='center'
      >
        <Grid item xs={11} sm={10} md={5} align='left' className={cls.gridItem}>
          <Flip bottom cascade delay={900}>
            <Typography className={cls.mainText}>About me</Typography>
            <Typography className={clsx(cls.text, cls.textAbout)}>
              I am a fresh graduate with a degree in BS Information Technology with a great passion for web development
              and technology.
            </Typography>
            <Typography className={clsx(cls.text, cls.textAbout)}>
              My skills in web development are mostly from being self-taught, curiosity and a burning desire to improve
              and further progress in this field. I am interested in both the entire frontend and backend spectrum as
              well as working with positive people.
            </Typography>
            <Typography className={clsx(cls.text, cls.textAbout)}>
              I am fairly knowledgeable in the ff:
              <ul>
                <li>Development using the MERN stack</li>
                <li>Creating and consuming of REST API’s</li>
                <li>
                  Database technologies
                  <ul>
                    <li>NoSQL</li>
                    <li>SQL(basic)</li>
                  </ul>
                </li>
                <li>Code versioning tools</li>
              </ul>
            </Typography>
          </Flip>
        </Grid>

        <Grid item xs={11} sm={10} md={5} align='left' className={cls.gridItem}>
          <Flip bottom cascade delay={1100}>
            <Typography className={cls.mainText}>Technologies I use</Typography>
            <Typography className={cls.TechSection}>Front end</Typography>
            <Box className={cls.skillBox}>
              {FrontEndPics.map((pic) => (
                <Box key={pic.title} className={cls.techContainer}>
                  <img src={pic.tech} alt={pic.title} className={cls.techImage} />
                  <Typography className={cls.text}>{pic.title}</Typography>
                </Box>
              ))}
            </Box>

            <Typography className={cls.TechSection}>Back end</Typography>
            <Box className={cls.skillBox}>
              {BackEndPics.map((pic) => (
                <Box key={pic.title} className={cls.techContainer}>
                  <img src={pic.tech} alt={pic.title} className={cls.techImage} />
                  <Typography className={cls.text}>{pic.title}</Typography>
                </Box>
              ))}
            </Box>

            <Typography className={cls.TechSection}>Tools</Typography>
            <Box className={cls.skillBox}>
              {ToolsPics.map((pic) => (
                <Box key={pic.title} className={cls.techContainer}>
                  <img src={pic.tech} alt={pic.title} className={cls.techImage} />
                  <Typography className={cls.text}>{pic.title}</Typography>
                </Box>
              ))}
            </Box>
          </Flip>
        </Grid>
      </Box>
    </div>
  )
}

export default About
