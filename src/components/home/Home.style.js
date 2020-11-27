import { makeStyles } from '@material-ui/core'

export const HomeStyle = makeStyles(theme => ({
    container : {
        height : '100vh',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
    font : {
        height : '1em',
        fontFamily : 'Ramabhadra, sans-serif',
        letterSpacing : '-0.5px',
        fontWeight : '700',
        lineHeight : '1em',
        color : '#FFFFFF',
        fontSize : '45pt',
        cursor : 'default',
        whiteSpace: 'initial',
        overflowWrap: 'break-word',
        [theme.breakpoints.down('xs')]: {         
            height : 'auto',
        },
        [theme.breakpoints.down(450)]: {         
            height : 'auto',
            '&:nth-child(1)' : {
                display : 'none'
            },
        },
    },
    secondary : {
        fontWeight : '500',
        fontSize : '30pt',
        marginBottom :'0.2em',
        display : 'block'
    },
    NameMobile : {
        display : 'none',
        fontFamily : 'Ramabhadra, sans-serif',
        letterSpacing : '-0.5px',
        fontWeight : '700',
        lineHeight : '1em',
        color : '#FFFFFF',
        fontSize : '45pt',
        cursor : 'default',
        [theme.breakpoints.down(450)]: {   
            display : 'flex',
        },
    },
    JobMobile : {
        display : 'none',
        fontFamily : 'Ramabhadra, sans-serif',
        letterSpacing : '-0.5px',
        fontWeight : '500',
        lineHeight : '1em',
        color : '#FFFFFF',
        fontSize : '30pt',
        cursor : 'default',
        marginBottom :'0.2em',
        [theme.breakpoints.down(450)]: {   
            display : 'flex',
        },
    },
    spanned : {
        color : '#FFC300'
    },
    whiteText : {
        color : '#B1B1B1',
        fontSize : '11pt'
    },
    perLetterFname : {
        display:'inline-block',
        transition : '0.2s',
        '&:hover' : {
            color : '#FFC300',
            fontSize : '50pt',
            transform:'scale(1,1)',
            transition : '0.2s'
        },
    },
    perLetterLname : {
        display:'inline-block',
        transition : '0.2s',
        '&:hover' : {
            color : '#FFFFFF',
            fontSize : '50pt',
            transform:'scale(1,1.1)',
            transition : '0.2s'
        }
    },
    perLetterDev : {
        display:'inline-block',
        transition : '0.2s',
        '&:hover' : {
            color : '#FFC300',
            fontSize : '35pt',
            transform:'scale(1,1)',
            transition : '0.2s'
        }
    },
    perLetterWeb : {
        display:'inline-block',
        transition : '0.2s',
        '&:hover' : {
            color : '#FFFFFF',
            fontSize : '35pt',
            transform:'scale(1,1)',
            transition : '0.2s'
        }
    },
    logoBox : {
        height : '3em',
        width : '7em',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : '1em'
    },
    logo : {
        height : '40px',
        width : 'auto',
        cursor : 'pointer',
        transition : '0.3s',
        '&:hover' : {
            height : '43px',
            transition : '0.3s'
        }
    },
    MLogoBox : {
        marginBottom : '1em',
    },
    MLogo : {
        height : '7em',
        width : 'auto',
        transition : '0.5s',
    }
}))