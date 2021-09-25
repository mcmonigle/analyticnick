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
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'align-left',
    overflowX: 'auto',
    
  },
  toolbarLink: {
    padding: theme.spacing(1),
    marginRight: '48px',
    flexShrink: 0,
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
          <a style={{color: 'inherit', textDecoration: 'none'}} href="/">{title}</a>
        </Typography>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
            <MuiLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
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
