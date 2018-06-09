import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

class Timestamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format(this.props.timeFormat)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: moment().format(this.props.timeFormat) }))
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper elevation={1} className={classes.root}>
                <Typography>
                    Selamat Datang,
                </Typography>
                <Typography variant="headline">
                    {this.state.time}
                </Typography>
                {/* <Typography variant="caption">
                    Waktu cepat berlalu, lakukan sekarang atau tidak sama sekali.
                </Typography> */}
            </Paper>
        );
    }
}

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

Timestamp.defaultProps = {
    timeFormat: 'D MMMM YYYY, H:mm:ss a'
};

export default withStyles(styles)(Timestamp);
