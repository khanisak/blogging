import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

class AppBarB extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: '#4886ff' }}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" component={Link} to="/home" >
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.title}>
                            {this.props.title}
                        </Typography>
                        <IconButton color="inherit" aria-label="Menu">
                            <MailIcon />
                        </IconButton>
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
    title: 'Corat Coret'
}

export default withStyles(styles)(AppBarB);