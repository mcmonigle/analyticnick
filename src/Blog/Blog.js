import { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

const BlogHome = lazy(() => import('./BlogHome'))
const BlogPost1 = lazy(() => import('./Blogs/BlogPost1/BlogPost1.js'));


export default function BlogRoutes(props) {
    let { path } = useRouteMatch();

    return (
         <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <Route exact path={path} component={BlogHome} />             
            <Route path={`/blog/blog1`} component={BlogPost1} />
         </Switch>
        </Suspense>         
    )
}

