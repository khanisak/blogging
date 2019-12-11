import React from "react";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Main from "../components/Main";

const useStyles = makeStyles(theme => ({
	postedDate: {
		marginBottom: 30
	}
}));

const Post = ({ title, content, publishDate, ...props }) => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<Header title={title} />
			<Main>
				<Grid container>
					<Grid item md={12} className={classes.postedDate}>
						<Typography variant="caption">
							Diposting{" "}
							<span style={{ fontWeight: 500 }}>
								{publishDate}
							</span>
						</Typography>
					</Grid>
					<Grid item>{content}</Grid>
				</Grid>
			</Main>
		</Container>
	);
};

export default Post;
