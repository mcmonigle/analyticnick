import { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

const ProjectsHome = lazy(() => import('./ProjectsHome'))
const ICUSepsis = lazy(() => import('./Projects/ICUSepsis/Post.js'));
const RNN = lazy(() => import('./Projects/RNN-TS/Post.js'));

export default function ProjectRoutes(props) {
    let { path } = useRouteMatch();

    return (
         <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <Route exact path={path} component={ProjectsHome} />             
            <Route path={`${path}/icu-sepsis`} component={ICUSepsis} />
            <Route path={`${path}/rnn-ts`} component={RNN} />
         </Switch>
        </Suspense>         
    )
}

