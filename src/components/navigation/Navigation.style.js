import { makeStyles } from '@material-ui/core'

export const NavStyle = makeStyles({
    Container : {
        width : '100vw',      
        position : 'fixed',
        display : 'flex',
        justifyContent : 'center',
        zIndex : '10'
    },
    NavContainer : {
        padding : '0.5em',
        width : '35em',
        backgroundColor : '#2B2B2B', //191919 101115 171717
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderRadius : '0 0 5px 5px'
    },
    NavItem : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        cursor : 'pointer',
        
        '&:hover $icons' : {
            color : '#FFC300',
            transition : '0.5s'
        },
        '&:hover $sections' : {
            color : '#FFC300',
            transition : '0.5s'
        }
    },
    icons : {
        color : '#FFFFFF',
        transition : '0.5s',
    },
    sections : {
        color : '#FFFFFF',
        fontSize : '8pt',
        transition : '0.5s',
    }
})