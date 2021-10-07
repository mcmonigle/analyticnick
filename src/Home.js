import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './Components/MainFeaturedPost';
import FeaturedPost from './Components/FeaturedPost';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

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
    },
    card: {
      display: 'flex',
      backgroundColor: '#1e1b27',
      color: '#fff'
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  }));
  
const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
  
const about = {
    title: 'About Me',
    description: `I'm a data scientist who enjoys answering interesting questions in a variety of domains. 
                  This site serves as my portfolio and my playground for exploring those interests.`,
    link: '/about',
    link_description: 'Learn more.'
  }

export default function Home() {
    const classes = useStyles();

    return (
        <main>
            <MainFeaturedPost post={mainFeaturedPost} />
              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
              <Grid container spacing={5}  
                    justify="center"
                    alignItems="center"
                    className={classes.mainGrid}>
              <Grid item xs={9} md={9}>
                <CardActionArea component="a" href="/about">
                    <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                        <Typography component="h2" variant="h5">
                            {about.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        {about.description}
                        <p>
                            <a href={about.link} style={{color: "#88bee9", cursor:'pointer', textDecoration: 'none'}} >
                            {about.link_description}
                            </a>
                        </p>
                        </Typography>
                        </CardContent>
                    </div>
                    </Card>
                </CardActionArea>
              </Grid>
              </Grid>
            </main>
    )
}