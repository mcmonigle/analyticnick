import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../../Components/Sidebar';
import MarkdownMathCode from '../../../Components/MarkdownMathCode.js';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    }))

const sidebar = {
    title: 'Disclaimer',
    description:
        'I am not affiliated with any research institution. This analysis is solely recreational.',
    social: [
        { type: 'Paper', name: 'See the original paper', url: 'https://www.nature.com/articles/s41598-018-24271-9' },
        { type: 'GitHub', name: 'See the notebook', url: 'https://github.com/mcmonigle' },
        { type: 'LinkedIn', name: 'Connect with me', url: 'https://linkedin.com/in/nicholasmcmonigle' }
    ],
};



const exec_summary = `# An Abbreviated Reproduction of "Recurrent Neural Networks for Multivariate Time Series with Missing Values"    

Original work by Zhengping Che, Sanjay Purushotham, Kyunghyun Cho, David Sontag & Yan Liu.  

### Executive Summary
This analysis focuses on reproducing a few key results from the linked paper using the MIMIC-III dataset. In particular, .  

A paragraph with *emphasis* and **strong importance**.

>  A block quote with ~strikethrough~ and a [URL](https://reactjs.org).
#### Another subheading  
But this time with different information.  

~~~python
import pandas as pd
def my_function(xin_): 
    def __init__:
        x = x+1
        x.read(./data/x.csv)
    return: out

#scatter plot grlivarea/saleprice
var = 'GrLivArea'
data = pd.concat([df_train['SalePrice'], df_train[var]], axis=1)
data.plot.scatter(x=var, y='SalePrice', ylim=(0,800000));    
~~~
`
// plot 1 


export default function BlogPost1(props) {
const classes = useStyles();

    return ( 
    <Grid container spacing={5} direction="row-reverse"  className={classes.mainGrid}>
        <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
        /> 
        <Grid item xs={12} md={9}>
            <MarkdownMathCode markdown={exec_summary} />
        </Grid>
    </Grid>
    )
}