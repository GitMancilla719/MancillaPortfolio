import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { Flip   } from 'react-reveal'
import {WorksStyle} from './Works.style'
import TempoThumb from '../../assets/tempoThumb.png'
import covidtracker from '../../assets/cvd-tracker.jpg'
import viewBtn from '../../assets/viewbutton.png'
import gitBtn from '../../assets/gitbutton.png'


const Works = () => {
    const cls = WorksStyle()

    const Project = [
        { image : covidtracker, 
          title : 'Covid Tracker', 
          description : [<p className={cls.tools}>ReactJS</p>,<p className={cls.tools}>Material-UI</p>,<p className={cls.tools}>Redux</p>,<p className={cls.tools}>Covid API</p>,], 
          github : '', 
          demo : ''
        },
        
        
        // { image : covidtracker, title : 'Covid Tracker', description : ['ReactJS', 'Material-UI', 'Redux', 'Covid API'], github : '', demo : ''},
        // { image : TempoThumb, title : 'Project Name', description : 'Project Description', github : '', demo : ''},
        // { image : TempoThumb, title : 'Project Name', description : 'Project Description', github : '', demo : ''},
    ]
        
    return (
        <Box className={cls.container}>
            <Grid container className={cls.gridContainer} justify='center'>
                {
                    Project.map((proj, index) => 
                    <Grid item xs={11} sm={5} md={3} className={cls.gridItem} key={index}>
                        <Flip top delay={1000}>
                            <img className={cls.projectImage} src={proj.image} alt="proj" />
                        </Flip>

                        <Box className={cls.overlay}>
                            <Typography className={cls.title}>{proj.title}</Typography>

                            <Typography className={cls.desc}>{proj.description}</Typography>


                            <Box display='flex' flexDirection='row'>
                                <Button>
                                    <a href={proj.demo} target="_blank" rel="noreferrer">
                                        <img className={cls.demos} src={viewBtn} alt="view" />
                                    </a>
                                </Button>
                                <Button>
                                    <a href={proj.github} target="_blank" rel="noreferrer">
                                        <img className={cls.demos} src={gitBtn} alt="git" />
                                    </a>
                                </Button>
                            </Box>
                        </Box>

                    </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default Works
