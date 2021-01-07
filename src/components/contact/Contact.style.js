import { makeStyles } from '@material-ui/core'

export const ContactStyle = makeStyles((theme) => ({
  container: {
    marginTop: '7em',
    direction: 'column',
    height: '100vh',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0px',
      background: 'transparent',
    },
  },
  Form: {
    //backgroundColor : 'brown',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5em',
    [theme.breakpoints.down(960)]: {
      //marginTop : '-10em'
    },
    [theme.breakpoints.down(321)]: {
      //marginTop : '-0.5em'
    },
  },
  Greeter: {
    //backgroundColor : 'orange',
    height: '10em',
    padding: '1.5em',
    //marginBottom : '-2em',
    [theme.breakpoints.down(960)]: {
      height: 'auto',
    },
  },
  greeterText: {
    fontFamily: 'Ramabhadra, sans-serif',
    fontWeight: '500',
    paddingBottom: '0.5em',
    color: '#FFC300',
  },
  greeterTextSub: {
    fontSize: '11pt',
    color: 'white',
    fontWeight: '300',
  },
  inputs: {
    margin: '0.3em',
    backgroundColor: '#2B2B2B',
    //color : 'white',
    width: 'auto',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      //bordercolor initial
      borderColor: '#2B2B2B',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //bordercolor onfocus
      borderColor: '#FFC300',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      //input text color onfocus
      color: 'white',
    },
    '& .MuiOutlinedInput-input': {
      //after typing input color
      color: 'white',
    },
    '& .MuiInputLabel-outlined': {
      //label color initial
      color: 'rgb(255,255,255,0.5)',
    },
  },
  sendBtn: {
    margin: '0.3em',
    backgroundColor: '#FFC300',
    width: '35%',
    '&:hover': {
      backgroundColor: '#2B2B2B',
      color: '#FFC300',
      border: '2px solid #FFC300',
    },
  },
  name: {
    color: 'white',
    width: '100vw',
    marginTop: '10em',
  },
}))
