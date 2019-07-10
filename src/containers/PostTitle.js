import React from 'react';
import Typography from '@material-ui/core/Typography';

class PostTitle extends React.Component {
    render() {
        return (
            <div style={{marginBottom: '30px'}}>
                <Typography variant="h5" align="center">
                    {this.props.title}
                </Typography>
                <Typography align='center' variant="subtitle2">
                    {this.props.publishDate}
                </Typography>
            </div>
        );
    }
}

export default PostTitle;