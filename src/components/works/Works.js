import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { Flip } from 'react-reveal'
import { WorksStyle } from './Works.style'
import covidtracker from '../../assets/cvd-tracker.jpg'
import jbgh from '../../assets/JBGH.jpg'
import KickNiks from '../../assets/KickNiks.jpg'
import viewBtn from '../../assets/viewbutton.png'
import gitBtn from '../../assets/gitbutton.png'

const Works = () => {
  const cls = WorksStyle()

  const Project = [
    {
      image: covidtracker,
      title: 'Covid Tracker',
      description: [
        <p className={cls.tools}>ReactJS</p>,
        <p className={cls.tools}>Material-UI</p>,
        <p className={cls.tools}>Redux</p>,
        <p className={cls.tools}>Covid API</p>,
      ],
      github: 'https://github.com/GitMancilla719/CovidTrackerProject',
      demo: 'https://coronovirustracker.netlify.app/',
    },
    {
      image: jbgh,
      title: 'Jobs by GitHub',
      description: [
        <p className={cls.tools}>ReactJS</p>,
        <p className={cls.tools}>Material-UI</p>,
        <p className={cls.tools}>Redux</p>,
        <p className={cls.tools}>GitHub Jobs API</p>,
      ],
      github: 'https://github.com/GitMancilla719/JOBSbyGH',
      demo: 'https://jobsbygithub.netlify.app/',
    },
    {
      image: KickNiks,
      title: 'KickNiks Shoe Store',
      description: [
        <p className={cls.tools}>Under Construction</p>,
        <p className={cls.tools}>ReactJS</p>,
        <p className={cls.tools}>Node</p>,
        <p className={cls.tools}>MongoDB</p>,
      ],
      github: 'https://github.com/GitMancilla719/KickNiks-Client',
      demo: '',
    },
  ]

  return (
    <Box className={cls.container}>
      <Grid container className={cls.gridContainer} justify='center'>
        {Project.map((proj, index) => (
          <Grid item xs={11} sm={5} md={3} className={cls.gridItem} key={index}>
            <Flip top delay={1000}>
              <img className={cls.projectImage} src={proj.image} alt='proj' />
            </Flip>

            <Box className={cls.overlay}>
              <Typography className={cls.title}>{proj.title}</Typography>

              <Typography className={cls.desc}>{proj.description}</Typography>

              <Box display='flex' flexDirection='row'>
                <Button>
                  <a href={proj.demo} target='_blank' rel='noreferrer'>
                    <img className={cls.demos} src={viewBtn} alt='view' />
                  </a>
                </Button>
                <Button>
                  <a href={proj.github} target='_blank' rel='noreferrer'>
                    <img className={cls.demos} src={gitBtn} alt='git' />
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Works
