import React from "react";
import { Grid, Container } from "@material-ui/core";
import Header from "../components/Header";
import Main from "../components/Main";
import ListBlog from "../containers/ListBlog";
import Sidebar from "../containers/Sidebar";
import { Posts } from "../util/Posts";

const Home = () => {
	return (
		<Container maxWidth="lg">
			<Header />
			<Main>
				<Grid container>
					<Grid item xs={12} md={8}>
						{Posts.map(function(value) {
							return (
								<ListBlog
									title={value.title}
									publish={value.publishDate}
									slug={value.slug}
									key={value.slug}
								/>
							);
						})}
					</Grid>
					<Grid item xs={12} md={4}>
						<Sidebar />
					</Grid>
				</Grid>
			</Main>
		</Container>
	);
};

export default Home;
