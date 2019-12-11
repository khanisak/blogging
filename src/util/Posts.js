import React from "react";
import Post1 from "../content/Post1";
import Post2 from "../content/Post2";
import Post3 from "../content/Post3";
import Post4 from "../content/Post4";

export const Posts = [
	{
		title: "Ubuntu 16.04 install pgAdmin4",
		publishDate: "March 11, 2019",
		slug: "/ubuntu-1604-install-pgadmin4",
		content: () => <Post4 />
	},
	{
		title: "Hosting Image menggunakan Dropbox",
		publishDate: "June 9, 2018",
		slug: "/hosting-image-menggunakan-dropbox",
		content: () => <Post3 />
	},
	{
		title: "Github Pages, hosting static website tanpa biaya tanpa ribet",
		publishDate: "June 9, 2018",
		slug: "/github-pages-hosting-static-website-tanpa-biaya-tanpa-ribet",
		content: () => <Post2 />
	},
	{
		title: "Git Clone Laravel Project",
		publishDate: "June 1, 2018",
		slug: "/git-clone-laravel-project",
		content: () => <Post1 />
	}
];
