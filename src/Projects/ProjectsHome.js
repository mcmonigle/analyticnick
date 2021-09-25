import Sidebar from '../Components/Sidebar';
import ProjectPreview from '../Components/ProjectPreview'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import icusepsisimg from './Projects/ICUSepsis/img/roc.png'
import rnnimg from './Projects/RNN-TS/img/missing-data.webp'

const icusepsismeta = require('./Projects/ICUSepsis/meta.json')
const rnnmeta = require('./Projects/RNN-TS/meta.json')

const useStyles = makeStyles((theme) => ({

  }));
const sidebar = {
    title: 'Welcome to my portfolio!',
    description:
        'These are projects meant to showcase my abilities using a variety of tools and analytical methods.',
    social: [
        { type: 'GitHub', name: 'See all notebooks', url: 'https://github.com/mcmonigle' },
        { type: 'LinkedIn', name: 'Connect with me!', url: 'https://linkedin.com/in/nicholasmcmonigle' }
    ],
};


export default function ProjectsHome() {
    const classes = useStyles();

    return <Grid container justify="space-between" direction="row-reverse" alignItems="flex-start" className={classes.mainGrid}>
        <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        social={sidebar.social}
        />            
        <Grid item xs={12} md={8}>
            <ProjectPreview post={icusepsismeta} img={icusepsisimg} />
            <ProjectPreview post={rnnmeta} img={rnnimg} />
        </Grid>
    </Grid>
}