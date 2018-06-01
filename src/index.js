import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Posts} from './util/Posts';

//import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound'

class App extends React.Component {
    render() {
        const listPost = Posts.map(function(value) {
            return <Route path={value.slug} component={value.component} key={value.slug} />
        });
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/home'} component={Home} />

                    {listPost}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
