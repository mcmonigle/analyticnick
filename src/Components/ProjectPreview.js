import React from 'react';
import Tag from './Tags'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
      paddingTop: '16px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingBottom: 0,
      '&:last-child': {paddingBottom: '8px'}
  },
  card: {
    display: 'flex',
    backgroundColor: '#28272b',
    color: '#fff',
    minHeight: '155px',
    paddingBottom: 0,
    marginBottom: '12px'
  },
  cardDetails: {
    flex: 1,
    paddingBottom: 0
  },
  cardMedia: {
    maxWidth: '30%',
    maxHeight: '155px',
    marginBottom: 'auto',
    marginTop: 'auto'
  },
});

export default function ProjectPreview(props) {
  const classes = useStyles();
  const { post, img } = props;

  const history = useHistory();

  function routeChange(newpath) {  // Using div+onClick instead of an a+href because you can't stop a from propagating (see tags.js)
    let path = newpath; 
    history.push(path);
  }
  return (
      <CardActionArea component="div" onClick={()=>routeChange(post.link)} >
        <Card className={classes.card} href={post.link}>
          <div className={classes.cardDetails}>
            <CardContent classes={{root: classes.root}}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" style={{color: "#ffffffb3"}}>
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Grid container direction="col">
              {post.tags.map((tag) => {
                  return <Grid item> <Tag label={tag.label} description={tag.description} /> </Grid>
              })}
              </Grid>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} src={img} component="img" title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
  );
}
