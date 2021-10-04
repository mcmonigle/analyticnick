import React from 'react';
import Tag from './Tags'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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
    maxHeight: '155px',
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
 
  return (
      <CardActionArea component="a" href={post.link}>
        <Card className={classes.card}>
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
              {post.tags.map((tag) => {
                  return <Tag label={tag.label} description={tag.description} />
              })}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} src={img} component="img" title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
  );
}
