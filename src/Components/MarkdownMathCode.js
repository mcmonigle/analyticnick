import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import gfm from 'remark-gfm'

import 'katex/dist/katex.min.css'

SyntaxHighlighter.registerLanguage('python', python);

const useStyles = makeStyles((theme) => ({
    codeBlock: {
        width: 'fit-content',
        minWidth: '50%',
        maxWidth: '100%',
        overflowX: 'scroll',   
        backgroundColor: '#191919',  
      }
    }))

export default function MarkdownMathCode(props) {
const classes = useStyles();
vs2015.hljs.background = "#0e0e0e"
const components = {
  code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter className={classes.codeBlock} remarkPlugins={[gfm]} language="python" style={vs2015} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
        <code className={className} {...props} />
      )
    }
  }
  
  components.a = ({node, ...props}) => {
    console.log(props)
  return <a style={{color: "white"}} {...props} >{props.children[0]} </a> }// make links appear white
 
    return ( 
      <ReactMarkdown children={props.markdown} 
                        components={components}
                        className={null} 
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}  />
    )
}