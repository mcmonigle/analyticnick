import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link as MuiLink} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flex: '0 1 auto',
    borderBottom: `1px solid rgba(255, 255, 255, 0.4);`,
    // '& .MuiSlider-thumb': {
    //   borderRadius: '1px',
    // },
  },
  toolbarTitle: {
    flex: 1,
    fontSize: '24px',
    fontWeight: 'bold'
  },
  toolbarSecondary: {
    justifyContent: 'center',
    overflowX: 'auto',
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    marginRight: 'auto',
    marginLeft: 'auto',
    flexShrink: 0,
    fontSize: '14px',
    '& .MuiTypography-body1': {
      fontSize: '14px'
    },
    fontWeight: 'bold'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <a style={{textDecoration: 'none'}} href="/">{title}</a>
         
        </Typography>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
            <MuiLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body1"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </MuiLink>
        
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
