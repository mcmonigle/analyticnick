import { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
    HashRouter as Router
} from "react-router-dom";

const BlogHome = lazy(() => import('./BlogHome'))
const BlogPost1 = lazy(() => import('./BlogPost1/BlogPost1'));
const BlogPost2 = lazy(() => import('./BlogPost2'));

export default function BlogRoutes(props) {
    let { path } = useRouteMatch();

    return (
         <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <Route exact path={path} component={BlogHome} />             
            <Route path={`${path}/blog1`} component={BlogPost1} />
            <Route path={`${path}/blog2`} component={BlogPost2} />                                                        
         </Switch>
        </Suspense>         
    )
}

