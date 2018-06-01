import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class AppBarB extends React.Component {
    render() {
        const { classes } = this.props; 
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AppBarB.propTypes = {
    classes: PropTypes.object.isRequired,
};

AppBarB.defaultProps = {
    title: 'Khanis Anthony Kurniawan'
}

export default withStyles(styles)(AppBarB);