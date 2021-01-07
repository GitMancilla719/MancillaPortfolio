import { makeStyles } from '@material-ui/core'

export const WorksStyle = makeStyles((theme) => ({
  container: {
    height: '100vh',
    flexWrap: 'wrap',
    marginTop: '5em',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0px',
      background: 'transparent',
    },
  },
  gridContainer: {
    paddingBottom: '6em',
  },
  gridItem: {
    position: 'relative',
    width: '50%',
    '&:hover $overlay': {
      transform: 'scale(1)',
    },
  },
  projectImage: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(23, 23, 23,0.8)',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    transform: 'scale(0)',
    transition: '0.5s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3.5em 0 1em 0',
  },
  demos: {
    width: '35px',
  },
  title: {
    fontFamily: 'Ramabhadra, sans-serif',
    fontWeight: '500',
    fontSize: '23pt',
    color: '#FFFFFF',
  },
  desc: {
    fontWeight: '300',
    color: '#3D3D3D',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '-2em',
  },
  tools: {
    backgroundColor: '#2B2B2B',
    fontWeight: '500',
    margin: '0.2em',
    padding: '0.3em',
    color: '#FFC300',
    borderRadius: '5px',
    fontSize: '10pt',
  },
}))
