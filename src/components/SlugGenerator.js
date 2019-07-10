import React from 'react';
import slug from 'slug';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button } from '@material-ui/core';

class SlugGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: '',
            slug: ''
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleGenerateSlug = this.handleGenerateSlug.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleGenerateSlug = () => {
        this.setState({
            slug: slug(this.state.sentence, { lower: true })
        });
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            if (event.target.id === "sentence")
                this.handleGenerateSlug();
        }
    }

    render() {
        const { classes } = this.props,
            npmSlug = <a href="https://www.npmjs.com/package/slug" target="_blank" rel="noopener noreferrer">Slug</a>;
        return (
            <Paper elevation={1} className={classes.root}>
                <Typography variant="h6">
                    Slug Generator
                </Typography>
                <Typography variant="caption">
                    Powered by {npmSlug}
                </Typography>
                <div>
                    <TextField
                        id="sentence"
                        name="sentence"
                        label="Sentence"
                        className={classes.textField}
                        value={this.state.sentence}
                        margin="normal"
                        onChange={this.handleChangeInput}
                        onKeyDown={this.handleKeyPress}
                    />
                    <Button variant="contained" size="small" color="primary" className={classes.button} onClick={this.handleGenerateSlug} style={{marginTop: 30}}>
                        Generate
                </Button>
                    <Typography variant="subtitle1">
                        {this.state.slug}
                    </Typography>
                </div>
            </Paper>
        );
    }
}

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing(3),
    }),
    button: {
        margin: theme.spacing(1),
    },
});

export default withStyles(styles)(SlugGenerator);