import React from "react";
import { useHistory } from "react-router-dom";
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import {
	GitHub as GithubIcon,
	LinkedIn as LinkedInIcon,
	Mail as MailIcon
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbarTitle: {
		flex: 1
	},
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto"
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0
	},
	mailIcon: {
		color: "#7f7f7f"
	},
	githubIcon: {
		color: "black"
	},
	linkedInIcon: {
		color: "#207bb4"
	}
}));

const Header = ({ title = "Personal Blog", ...props }) => {
	const classes = useStyles();
	const history = useHistory();
	const BackToHome = () => history.push("/home");

	return (
		<>
			<Toolbar className={classes.toolbar}>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					noWrap
					className={classes.toolbarTitle}>
					{title}
				</Typography>
				<div style={{ marginRight: 20 }}>
					<a href="mailto:khanis.anthony@gmail.com" target="_blank" rel="noopener noreferrer" >
						<IconButton>
							<MailIcon className={classes.mailIcon} />
						</IconButton>
					</a>
					<a
						href="https://id.linkedin.com/in/khanis-anthony-kurniawan-736014160"
						target="_blank" rel="noopener noreferrer" >
						<IconButton>
							<LinkedInIcon className={classes.linkedInIcon} />
						</IconButton>
					</a>
					<a href="https://github.com/khanisak" target="_blank" rel="noopener noreferrer" >
						<IconButton>
							<GithubIcon className={classes.githubIcon} />
						</IconButton>
					</a>
				</div>
				<Button variant="outlined" size="small" onClick={BackToHome}>
					Back to Home
				</Button>
			</Toolbar>
		</>
	);
};

export default Header;
