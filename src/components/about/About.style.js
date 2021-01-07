import { makeStyles } from '@material-ui/core'

export const AboutStyle = makeStyles((theme) => ({
  gridContainer: {
    height: '100vh',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'hidden',
    [theme.breakpoints.between(600, 959)]: {
      height: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
    [theme.breakpoints.down(360)]: {
      height: 'auto',
    },
  },
  gridItem: {
    margin: '0.5em',
    '&:nth-child(1)': {
      [theme.breakpoints.down('sm')]: {
        marginTop: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '3.5%',
        marginTop: '8em',
      },
    },
    '&:nth-child(2)': {
      [theme.breakpoints.down('sm')]: {
        paddingBottom: '3.5em',
      },
    },
  },
  mainText: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    color: '#FFC300',
    fontSize: '17pt',
  },
  text: {
    color: '#FFFFFF',
    fontSize: '11pt',
    fontWeight: '300',
    letterSpacing: '-0.2px',
  },
  textAbout: {
    marginTop: '1.5em',
  },
  skillBox: {
    overflow: 'wrap',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: '#FFFFFF',
  },
  techImage: {
    height: 'auto',
    width: '5em',
  },
  TechSection: {
    textAlign: 'left',
    color: '#FFC300',
    fontSize: '14pt',
    fontWeight: '700',
    marginTop: '1em',
  },
  techContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
