import Sidebar from '../../../Components/Sidebar';
import MarkdownMathCode from '../../../Components/MarkdownMathCode.js';

import PlotlyScatter from '../../../Components/Plots/PlotlyScatter.js';
import PlotlyROC from '../../../Components/Plots/PlotlyROC.js';
import References from '../../../Components/References.js'
import Grid from '@material-ui/core/Grid';

const sidebar = {
    title: 'Disclaimer',
    description:
        'I am not affiliated with any research institution, nor am I a clinician in any capacity. This analysis is solely recreational.',
    social: [
        { type: 'Paper', name: 'See the original paper', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5851825/' },
        { type: 'GitHub', name: 'See the notebook', url: 'https://github.com/mcmonigle' },
        { type: 'LinkedIn', name: 'Connect with me', url: 'https://linkedin.com/in/nicholasmcmonigle' }
    ],
};

const url='/projects/icu-sepsis'
const title_info = `# An Abbreviated Reproduction of "An Interpretable Machine Learning Model for Accurate Prediction of Sepsis in the ICU"    

Original work by Shamim Nemati, PhD, Andre Holder, MD, MSc, Fereshteh Razmi, Matthew D. Stanley, MD, Gari D. Clifford, PhD, and Timothy G. Buchman, PhD, MD.  
`
const exec_summary = `
### Executive Summary  
This analysis focuses on reproducing a few key results from the linked paper using the MIMIC-III dataset. In particular, .  

A paragraph with *emphasis* and **strong importance**.[$^\\text{{[1]}}$](${url}#nemati1)

> *A block quote with ~strikethrough~ and a URL: https://reactjs.org.*

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
~~~`
const methods = `
### Methods
This analysis focuses on reproducing a few key results from the linked paper using the MIMIC-III dataset. In particular, .[$^\\text{{[2]}}$](${url}#react-md)  

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a [URL](https://reactjs.org).  
`
const obj = `
### Objective
Reproduce the following table from the original paper:
$$
\\begin{array}{c:cccc}
\\text{Metric} & \\text{4 hours} & \\text{6 hours} & \\text{8 hours} & \\text{12 hours} \\\\ \\hline \\hline
&  t_{sepsis} & \\text{Prediction Testing set} & \\text{(Training set)} & \\\\ \\hline
\\text{AUROC} & 0.84 \\ (0.84) & 0.82 \\ (0.82) & 0.82 \\ (0.81) & 0.79 \\ (0.80) \\\\
\\text{Specificity*} & 0.64 \\ (0.66) & 0.62 \\ (0.63) & 0.62 \\ (0.60) & 0.57 \\ (0.58) \\\\
\\text{Accuracy} & 0.64 \\ (0.66) & 0.62 \\ (0.64) & 0.62 \\ (0.61) & 0.58 \\ (0.59) \\\\ \\hline
& t_{sofa} & \\text{Prediction Testing set} & \\text{(Training set)} &  \\\\ \\hline
\\text{AUROC} & 0.85 \\ (0.86) & 0.83 \\ (0.84) & 0.82 \\ (0.83) & 0.80 \\ (0.82) \\\\
\\text{Specificity*} & 0.66 \\ (0.69) & 0.61 \\ (0.65) & 0.60 \\ (0.62) & 0.56 \\ (0.59) \\\\ 
\\text{Accuracy} & 0.67 \\ (0.69) & 0.62 \\ (0.65) & 0.60 \\ (0.63) & 0.57 \\ (0.60) \\\\ \\hline
& t_{onset} & \\text{Prediction Testing set} & \\text{(Training set)}  & \\\\ \\hline
\\text{AUROC} & 0.80 \\ (0.81) & 0.78 \\ (0.80) & 0.77 \\ (0.79) & 0.76 \\ (0.78) \\\\
\\text{Specificity*} & 0.57 \\ (0.61) & 0.54 \\ (0.58) & 0.52 \\ (0.55) & 0.51 \\ (0.54) \\\\
\\text{Accuracy} & 0.57 \\ (0.61) & 0.55 \\ (0.58) & 0.53 \\ (0.56) & 0.52 \\ (0.55) \\\\ \\hline
\\end {array} 
$$
And this is the text that goes underneath the table. And this is the text that goes underneath the table. And this is the text that goes underneath the table. And this is the text that goes underneath the table.
`
// plot 1 


export default function BlogPost1(props) {

const plotdat = {x : [0, 1, 2, 6, 4, 5, 6, 7, 8],
              y:  [0, 1, 2, 3, 4, 5, 6, 7, 8],
              groups: ['Moe','Larry','Curly','Moe','Larry','Curly','Moe','Larry','Curly'],
              type: 'scatter',
              mode: 'markers'}
const rocdat = {fpr: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1],
                tpr: [0.447, 0.454, 0.461, 0.468, 0.475, 0.482, 0.489, 0.496, 0.502, 0.509, 0.516, 0.522, 0.529, 0.535, 0.542, 0.548, 0.555, 0.561, 0.567, 0.574, 0.58, 0.586, 0.592, 0.598, 0.604, 0.61, 0.616, 0.622, 0.628, 0.634, 0.64, 0.646, 0.652, 0.657, 0.663, 0.669, 0.675, 0.68, 0.686, 0.691, 0.697, 0.702, 0.708, 0.713, 0.719, 0.724, 0.729, 0.735, 0.74, 0.745, 0.751, 0.756, 0.761, 0.766, 0.771, 0.776, 0.782, 0.787, 0.792, 0.797, 0.802, 0.807, 0.812, 0.816, 0.821, 0.826, 0.831, 0.836, 0.841, 0.845, 0.85, 0.855, 0.86, 0.864, 0.869, 0.874, 0.878, 0.883, 0.887, 0.892, 0.897, 0.901, 0.906, 0.91, 0.914, 0.919, 0.923, 0.928, 0.932, 0.936, 0.941, 0.945, 0.949, 0.954, 0.958, 0.962, 0.966, 0.971, 0.975, 0.979]}
const ref1 = {
    source: 'paper',
    citation: 'Nemati, S., Holder, A., Razmi, F., Stanley, M. D., Clifford, G. D., & Buchman, T. G. (2018). An Interpretable Machine Learning Model for Accurate Prediction of Sepsis in the ICU. Critical care medicine, 46(4), 547–553. https://doi.org/10.1097/CCM.0000000000002936',
    authors: "Nemati, Holder",
    title: 'ICU Sepsis',
    href: 'nemati1' 
}
const ref2 = {
    citation: 'React-Markdown, github link: github.com/remarkjs/react-markdown',
    href: 'react-md'
}

    return ( 
    <Grid container direction="row-reverse" spacing={5}>
        <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
        /> 
        <Grid item xs={12} md={9}>
            <MarkdownMathCode markdown={title_info} bb={false}  />
            <MarkdownMathCode markdown={exec_summary} bb={false}  />
            <MarkdownMathCode markdown={methods} bb={false}  />
            <MarkdownMathCode markdown={obj} bb={false}  />
            
            <PlotlyScatter plotData={plotdat} />
                <p>More text </p>
            <PlotlyROC rocData={rocdat} />
            <References refs={[ref1,ref2]} />
        </Grid>
    </Grid>
    )
}