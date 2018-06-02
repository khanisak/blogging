import React from 'react';
import Typography from '@material-ui/core/Typography';

class PostTitle extends React.Component {
    render() {
        return (
            <div style={{marginBottom: '30px'}}>
                <Typography align='center' variant="title">
                    {this.props.title}
                </Typography>
                <Typography align='center' variant="caption">
                    {this.props.publishDate}
                </Typography>
            </div>
        );
    }
}

export default PostTitle;