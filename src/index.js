import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";
import Post from "./pages/Post";
import { Posts } from "./util/Posts";

//import pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class App extends React.Component {
	render() {
		return (
			<HashRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path={"/"} component={Home} />
					<Route path={"/home"} component={Home} />

					{Posts.map(post => {
						const { content: Content } = post;
						return (
							<Route
								path={post.slug}
								render={() => (
									<Post
										title={post.title}
										publishDate={post.publishDate}
										content={<Content />}
									/>
								)}
								key={post.slug}
							/>
						);
					})}
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
