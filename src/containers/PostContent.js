import React from 'react';
import Typography from '@material-ui/core/Typography';

class PostContent extends React.Component {
    render() {
        return (
            <Typography align='left' paragraph variant="body3">
                {this.props.children}
            </Typography>
        );
    }
}

export default PostContent;