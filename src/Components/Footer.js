import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Contact() {
  return (
    <Typography variant="body2" color='#496fff'  align="center">      
      <Link  href="/about#contact" style={{color: '#a3b6ff'}}>
        Contact me
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textDecoration: 'underline',
    color: '#496fff',
    flex: '0 1 40px',
    marginTop: '24px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Contact />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
