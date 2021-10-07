import React, {  Suspense, lazy } from  'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Components/Header';
import {
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import('./Home'))
const Blog = lazy(() => import('./Blog/Blog'))
const About = lazy(() => import('./About'))
const Projects = lazy(() => import('./Projects/Projects'))

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  pageContainer: {
    backgroundColor: "#000000",
    color: "#fff",
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh'
  },
  pageContent: {
    flex: '1 1 auto'
  }
}));

const sections = [
  { title: 'Projects', url: '/projects' },
  { title: 'Blog', url: '/blog' },
  { title: 'About Me', url: '/about' },  
];

export default function Site() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <div id="Blogpage" className={classes.pageContainer} >
        <Container maxWidth="lg" className={classes.pageContainer}>
          <Header title="Nick McMonigle" sections={sections} />
          <div className={classes.pageContent}>
          <Grid container  justify="center"
              alignItems="center" spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={11}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>              
                <Route path={`/blog`} component={Blog} />
                <Route path={`/about`} component={About} />
                <Route path={`/projects`} component={Projects} />
                <Route exact path={"/"} component={Home} />           
              </Switch>
              </Suspense>
            </Grid>
          </Grid>
          </div>
        </Container>
      </div>
      </div>
  );
}
