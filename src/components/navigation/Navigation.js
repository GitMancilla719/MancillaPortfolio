import React from 'react'
import {NavStyle} from './Navigation.style'
import { Box,Typography } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

const Navigation = ({setTab}) => {
    const cls = NavStyle()
    

    return (
        <>
        <Box className={cls.Container}>
            <Box container className={cls.NavContainer} spacing={7}>
                <Box className={cls.NavItem} onClick={()=>setTab(0)}>
                    <HomeOutlinedIcon className={cls.icons}/>
                    <Typography variant='caption' className={cls.sections}>Home</Typography>
                </Box>
                <Box className={cls.NavItem} onClick={()=>setTab(1)}>
                    <PermIdentityIcon className={cls.icons}/>
                    <Typography variant='caption' className={cls.sections}>About</Typography>
                </Box>
                <Box className={cls.NavItem} onClick={()=>setTab(2)}>
                    <WorkOutlineIcon className={cls.icons}/>
                    <Typography variant='caption' className={cls.sections}>Works</Typography>
                </Box>
                <Box className={cls.NavItem} onClick={()=>setTab(3)}>
                    <PermContactCalendarOutlinedIcon className={cls.icons}/>
                    <Typography variant='caption' className={cls.sections}>Contact</Typography>
                </Box>
            </Box>
        </Box>
            
        </>
    )
}

export default Navigation


