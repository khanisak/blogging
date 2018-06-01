import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//import pages
import Home from './pages/Home';

class App extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
