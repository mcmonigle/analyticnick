import Grid from '@material-ui/core/Grid';
import aboutPhoto from './images/nickandmeg.JPEG'
import dogPhoto from './images/ryderandchalupa.png'

export default function About() {
    function AboutText() { 
        return <div>
        <h1>Hi! I'm Nick.</h1>
        <p>I'm a Data Scientist and Machine Learning Engineer with a variety of interests.</p>
        <p>I have a B.S. with majors in Statistics and Mathematics from the University of Minnesota, 
            and I have a professional background in data science consulting, web application development,
            economic research, military operations, and intelligence.</p>
        <p>I'm from Minnesota and live in Charlottesville, VA, with my wife, Megan, and our two dogs.</p>
        <p>I built this site using React and a 
            <a style={{color: 'rgb(136, 190, 233)', textDecoration: 'none'}} href='https://mui.com/getting-started/templates/'> modified MaterialUI template</a>. 
            This site's static files are served with AWS (S3, Cloudfront). The favicon is derived from a 
        <a href='https://xkcd.com/979' style={{color: 'rgb(136, 190, 233)', textDecoration: 'none'}}> timeless XKCD comic</a>.</p>
        <p>Please add/message me <a href='https://www.linkedin.com/in/nicholasmcmonigle' style={{color: 'rgb(136, 190, 233)', textDecoration: 'none'}}>on LinkedIn</a> if you'd like to contact me.</p>
        <p>Thanks for visiting!</p>
    </div>
    }


    return <Grid container justify="center" direction="row" 
                    alignItems="flex-start">
              <Grid item xs={12} md={8}>
                    <AboutText />
              </Grid>
              <Grid item centered xs={9} md={4}>
                <figure >
                        <img src={aboutPhoto} alt='Nick and Megan!' 
                        style={{maxWidth: '100%',maxHeight: '100%'}} />
                        <figcaption>Megan and I on the Charlottesville mall</figcaption>
                    </figure>
                    <figure >
                        <img src={dogPhoto} alt='Ryder and Chalupa' 
                        style={{maxWidth: '60%',maxHeight: '100%', marginLeft: 'auto', marginRight:'auto'}} />
                        <figcaption>Our two dogs, Ryder and Chalupa</figcaption>
                    </figure>
              </Grid>            
          </Grid>

}