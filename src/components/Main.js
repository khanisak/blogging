import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	content: {
		flexGrow: 1,
		// backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
}));

const Main = ({ children, ...props }) => {
	const classes = useStyles();
	return <main className={classes.content}>{children}</main>;
};

export default Main;
