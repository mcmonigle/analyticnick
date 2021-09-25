import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import gfm from 'remark-gfm'

SyntaxHighlighter.registerLanguage('python', python);

const useStyles = makeStyles((theme) => ({
    codeBlock: {
        width: 'fit-content',
        minWidth: '50%',
        maxWidth: '100%',
        overflowX: 'scroll',   
        backgroundColor: '#191919'   
      }
    }))

export default function MarkdownCode(props) {
const classes = useStyles();
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

    return ( 
      <ReactMarkdown children={props.markdown} components={components}  />
    )
}