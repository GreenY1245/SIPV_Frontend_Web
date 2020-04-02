import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, MenuList, MenuItem, Paper, Popper, ClickAwayListener, Grow, IconButton, Typography, ButtonGroup } from '@material-ui/core';
import { Mms } from '@material-ui/icons';
import classNames from 'classnames';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0C7C59',
        light: '#0F996D'
      },
      secondary: {
        main: '#D64933',
      },
    }
  });

const styles = theme => ({

    root: {
        width: '100vw',
        height: '100px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    innerLinks: {
        display: 'flex',
    },
    boldText: {
        fontWeight: 'bold'
    },
    padding: {
        margin: '15px',
        padding: '7px 15px 7px 15px',
    },
    border: {
        border: 'solid #2B303A 2px'
    },
    primaryColor: {
        color: '#2B303A'
    },
    secondaryColor: {
        color: '#BAC1B8'
    },
});


const Navbar = (props) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const location = useLocation();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }

    const prevOpen = React.useRef(open);
    
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={props.classes.root}>
            <IconButton color="primary">
                <Mms />
                <Typography variant="h5">Messngr</Typography>
            </IconButton>

            <div className={props.classes.innerLinks}>
                {props.links.map((item, index) => {
                    if (item.link === '#') {
                        return (
                            <div key={item.name}>
                                <Button className={classNames([props.classes.boldText, props.classes.padding, props.classes.primaryColor, props.classes.border])} ref={anchorRef} aria-controls={open ? 'menu-list' : undefined} aira-haspopup="true" onClick={handleToggle}>
                                    {item.name}
                                </Button>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList>
                                                        {item.content.map((sublink, index) => (
                                                            <MenuItem key={sublink.name} className={classNames([props.classes.boldText, props.classes.primaryColor])} component="button" onClick={() => { console.log(sublink) }}>{sublink.name}</MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                            )
                    } else {
                        return (
                            <Button style={{ color: location && location.pathname === item.link ? '#636363' : undefined, borderColor: location && location.pathname === item.link ? '#636363' : undefined }} className={classNames([props.classes.boldText, props.classes.padding, props.classes.primaryColor, props.classes.border])} key={item.name} onClick={() => {console.log(item)}}>{item.name}</Button>
                        )
                    }
                })}
            </div>
            
            <ThemeProvider theme={theme}>
                <ButtonGroup>
                    <Button style={{ color: location && (location.pathname === '/auth' || location.pathname === '/auth/signin') ? '#636363' : undefined, borderColor: location && (location.pathname === '/auth' || location.pathname === '/auth/signin') ? '#636363' : undefined }} className={classNames([props.classes.boldText, props.classes.border])} variant="contained" color="primary">
                        Login
                    </Button>
                    <Button style={{ color: location && location.pathname === '/auth/signup' ? '#636363' : undefined, borderColor: location && location.pathname === '/auth/signup' ? '#636363' : undefined }} className={classNames([props.classes.boldText, props.classes.border])} variant="contained" color="secondary">
                        Register
                    </Button>
                </ButtonGroup>
            </ThemeProvider>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object,
    links: PropTypes.array.isRequired,
}

export default withStyles(styles)(Navbar);