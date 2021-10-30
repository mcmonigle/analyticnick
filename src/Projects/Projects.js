import { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

const ProjectsHome = lazy(() => import('./ProjectsHome'))
const Graphiti = lazy(() => import('./Projects/Graphiti/Post.js'));

export default function ProjectRoutes(props) {
    let { path } = useRouteMatch();

    return (
         <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <Route exact path={path} component={ProjectsHome} />             
            <Route path={`${path}/graphiti`} component={Graphiti} />
         </Switch>
        </Suspense>         
    )
}

