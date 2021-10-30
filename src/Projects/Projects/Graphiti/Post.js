import Sidebar from '../../../Components/Sidebar';
import MarkdownMathCode from '../../../Components/MarkdownMathCode.js';
import Grid from '@material-ui/core/Grid';
import graphitiScreenshot from './img/graphitiScreenshot.png'

const sidebar = {
    title: '',
    social: [
        { type: 'Site', name: 'See the site!', url: 'https://www.graphiti.co' },
        { type: 'GitHub', name: 'See some of my code', url: 'https://github.com/mcmonigle' },
        { type: 'LinkedIn', name: 'Connect with me', url: 'https://linkedin.com/in/nicholasmcmonigle' }
    ],
};

const title_info = `# Graphiti: An easy-to-use graphing calculator for beautiful mathematical plots   
`
const background_info = `
### Background  
I created [Graphiti](https://www.graphiti.co) [(https://www.graphiti.co)](https://www.graphiti.co) over the course of a few months in 2020 to give math educators a more intuitive 
graphing calculator. 

Graphiti is an homage to my love of math education. Prior to becoming a data scientist, 
I spent a semester in an education master's program at Hunter College (City University of New York)
with the goal of becoming a high school math teacher in Brooklyn. I still love the
idea of becoming an educator one day, but for now I'd like to pursue a more technical career path.`

const tech_info = `
### Features
Users can plot
* Functions
* Inequalities
* Circles
* Ellipses
* Polygons 
* Shape transformations

and can modify
* Shape/line size, color, width
* Annotation using LaTex (including automatic annotation for equations, inequalities, and shapes!)
* Shape vertex and center point labels
* Plot size
* Grid line size and color
* Plot title and font size
* Axis numbering (e.g. every 1, 2, or 3 lines)
* and much more!

Users can then download or copy their plot in .png, .jpg, or .svg format.

### Tech stack
Graphiti was built using React, Material UI, and Plotly. The site currently has no backend, but I may add a link-sharing feature
using FastAPI and Redis or PostgreSQL.

The lines and shapes are (for the most part) splines in Plotly, where the points are calculated using custom-defined functions in mathjs.

The site is hosted on AWS using S3, Cloudfront, and Route 53, and CI/CD is performed with GitHub Actions.
 
 

`

export default function Graphiti(props) {


    return ( 
    <Grid container direction="row-reverse" spacing={5}>
        <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
        /> 
        <Grid item xs={12} md={9}>
            <MarkdownMathCode markdown={title_info} bb={false}  />
            <figure >
                <img src={graphitiScreenshot} alt='Graphiti screenshot' 
                style={{maxWidth: '100%', marginLeft: 'auto', marginRight:'auto'}} />
                <figcaption>Screenshot from <a href='https://app.graphiti.co'>https://app.graphiti.co</a></figcaption>
            </figure>
            <MarkdownMathCode markdown={background_info} bb={false}  />
            <MarkdownMathCode markdown={tech_info} bb={false}  />
            
        </Grid>
    </Grid>
    )
}