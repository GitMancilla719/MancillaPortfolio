import React from 'react'
import { Box,Typography } from '@material-ui/core'
import { Flip } from 'react-reveal'
import { HomeStyle } from './Home.style'
import clsx from 'clsx'
import gitLogo from '../../assets/gitlogo.png'
import inLogo from '../../assets/LnkIn.png'
import MLogo from '../../assets/MLogo.png'

const Home = () => {
    const cls = HomeStyle()
    const Marwel = 'Marwel'.split('').map(letters => <span className={cls.perLetterFname}>{letters}</span>)
    const Mancilla = 'Mancilla'.split('').map(letters => <span className={cls.perLetterLname}>{letters}</span>)
    const developer = 'developer.'.split('').map(letters => <span className={cls.perLetterDev}>{letters}</span>)
    const web = 'web'.split('').map(letters => <span className={cls.perLetterWeb}>{letters}</span>)
    return (
        <>
        <Box className={cls.container}>
            <Flip left cascade delay={1000}>
                <Box className={cls.MLogoBox}>
                    <img className={cls.MLogo} src={MLogo} alt="github Logo"/>
                </Box>
            </Flip>
            <Flip top cascade delay={1100}>
                <Typography className={clsx(cls.font)} >{Marwel} <span className={cls.spanned}>{Mancilla}</span></Typography>
                <Box component={Typography} className={clsx(cls.NameMobile)} display='flex' flexDirection='column' alignItems='center' >
                    <span>{Marwel}</span>
                    <span className={cls.spanned}>{Mancilla}</span>
                </Box>
            </Flip>
            <Flip bottom cascade delay={1200}>
                <Typography className={clsx(cls.font, cls.secondary)} ><span className={cls.spanned}>{web}</span> {developer}</Typography>
                <Box component={Typography} className={clsx(cls.JobMobile)} display='flex' flexDirection='column' alignItems='center' >
                    <span className={cls.spanned}>{web} {developer}</span>
                </Box>




                <Typography className={clsx(cls.whiteText)} >''Keep Going Even When the Going Gets Tough''</Typography>
                <Box className={cls.logoBox}>
                    <a href='https://github.com/GitMancilla719' target="_blank" rel="noreferrer">
                        <img className={cls.logo} src={gitLogo} alt="github Logo"/>
                    </a>
                    <a href='https://www.linkedin.com/in/marwelmancilla/' target="_blank" rel="noreferrer">
                        <img className={cls.logo} src={inLogo} alt="github Logo"/>
                    </a>
                </Box>
            </Flip>
            
        </Box>
        </>
    )
}

export default Home
