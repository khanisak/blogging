import React from 'react';
import Timestamp from '../components/Timestamp';
import SlugGenerator from '../components/SlugGenerator';

class RightSide extends React.Component {
    render() {
        return (
            <div>
                <Timestamp />
                <SlugGenerator />
            </div>
        );
    }
}

export default RightSide;