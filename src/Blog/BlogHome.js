import Sidebar from '../Components/Sidebar';
import ProjectPreview from '../Components/ProjectPreview'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import bp1img from './Blogs/BlogPost1/img/roc.png'
const bp1meta = require('./Blogs/BlogPost1/bpmeta.json')

const useStyles = makeStyles((theme) => ({

  }));
const sidebar = {
    title: 'Welcome to my blog!',
    description:
        'This is where I write tutorials and muse about things that interest me.',
    social: [
        { type: 'GitHub', name: 'See my notebooks', url: 'https://github.com/mcmonigle' },
        { type: 'LinkedIn', name: 'Connect with me', url: 'https://linkedin.com/in/nicholasmcmonigle' }
    ],
};


export default function BlogHome() {
    const classes = useStyles();

    return <Grid container justify="space-between" direction="row-reverse" alignItems="flex-start" className={classes.mainGrid}>
              <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              />            
              <Grid item xs={12} md={8}>
                <ProjectPreview post={bp1meta} img={bp1img} />
              </Grid>
          </Grid>
}