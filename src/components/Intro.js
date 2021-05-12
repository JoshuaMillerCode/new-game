import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {Link} from 'react-router-dom'

export default function Intro(props) {

    const useStyles = makeStyles({
        instructions: {
            height: '50vh',
            width: '100vw',
            border: 'solid black 1px',
            background: 'linear-gradient(.25turn, #3f4042, #cacfd9, #3f4042)',
            overscroll: 'scroll'
        },
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '50vh',
            width: '100vw'
        },
        title: {
            
        },
        root:{
            height: '100px',
            width: '500px',
            fontSize: '60px'
        }
    })

    const theme = createMuiTheme({
        typography: {
            h1: {
                fontWeight: 500
            }
        }
    })
    

    const classes = useStyles()
    return(
        <ThemeProvider theme={theme}>
            <div>
                <header className={classes.instructions}>

                </header>
                <div className={classes.main}>
                    <Typography 
                        variant='h1' 
                        component='div'
                        className= {classes.title}
                    > 
                    Bomb Squad
                    </Typography>
                        <Button
                            variant='contained' 
                            color='secondary'
                            startIcon={<PlayArrowIcon style={{fontSize: 60}} />}
                            endIcon={<VideogameAssetIcon style={{fontSize: 60}}/>}
                            className={classes.root}
                            href='/game'
                        >
                            Start
                        </Button>
                </div>
            </div>
        </ThemeProvider>
    )
}