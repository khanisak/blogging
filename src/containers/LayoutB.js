import React from 'react';
import AppBarB from '../components/AppBarB';
import { withStyles } from '@material-ui/core/styles';

class LayoutB extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBarB />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const themes = theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    }
});

export default withStyles(themes, { withTheme: true })(LayoutB);