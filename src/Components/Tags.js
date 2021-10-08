import React, {useState} from  'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    tag: {
        border: '1px #000000 solid',
        color: '#fff',
        backgroundColor: "#000000",
        textAlign: 'center',
        textDecoration: 'none',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
        paddingTop: '0',
        paddingBottom: '0',
        minHeight: '20px',
        margin: '0px 1px',
        cursor: 'pointer',
        fontSize: '0.8em',
        borderRadius: '15px',
    }, 
    root: {
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        }
    }
  }));


const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#dcdbdb',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

export default function Tag(props) {
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    function handleTooltipOpen(event) {
        event.stopPropagation()     
        setOpen(!open)
    }
    function handleTooltipClose() {
        setOpen(false)
    }

    return ( 
        <div>
            <Hidden mdUp>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <HtmlTooltip     
                        onClose={handleTooltipClose}
                        leaveTouchDelay={4000}
                        title={<React.Fragment>
                            <span dangerouslySetInnerHTML={{__html: props.description}}></span>
                        </React.Fragment>} 
                        open={open} 
                        onClick={handleTooltipOpen}  >
                    <Button classes={{root: classes.root}} size="small" variant='contained'
                        className={classes.tag} 
                        >{props.label}</Button>
                </HtmlTooltip>
            </ClickAwayListener>
            </Hidden>
            <Hidden smDown>
                <HtmlTooltip
                title={<React.Fragment>
                        <span dangerouslySetInnerHTML={{__html: props.description}}></span>
                    </React.Fragment>} >
                <Button classes={{root: classes.root}} size="small" variant='contained'
                    className={classes.tag}
                    >{props.label}</Button>
                </HtmlTooltip>            
            </Hidden>
        </div>
        )
}