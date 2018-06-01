import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";


//import pages
import Home from './pages/Home';
import {Posts} from './util/Posts';

class App extends React.Component {
    render() {
        const listPost = Posts.map(function(value) {
            return <Route path={value.slug} component={value.component} key={value.slug} />
        });
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />

                    {listPost}
                </div>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
