import React from 'react';
import { relativeTimeRounding } from 'moment';

class NotFound extends React.Component {
    render() {
        return (
            <div style={{marginLeft: 20}}>
                <p>404 not found</p>
            </div>
        )
    }
}

export default NotFound;