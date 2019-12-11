import React from "react";

const HREF = ({ url, name }) => (
	<a href={url} target="_blank" rel="noopener noreferrer">
		{name}
	</a>
);
const Subject = {
	GoogleDrive: () => <HREF url="https://www.google.com/intl/in/drive/" name="GoogleDrive" />,
	Dropbox: () => <HREF url="https://www.dropbox.com/" name="Dropbox" />,
	Laravel: () => <HREF url="https://laravel.com/" name="Laravel" />,
	Github: () => <HREF url="https://github.com/" name="Github" />,
	GithubPages: () => <HREF url="https://pages.github.com/" name="Github Pages" />,
	GithubPagesHelp: () => <HREF url="https://help.github.com/articles/what-is-github-pages/" name="sini" />,
	Git: () => <HREF url="https://git-scm.com/" name="Git" />,
	Jekyll: () => <HREF url ="https://jekyllrb.com/" name="Jekyll" />,
	ReactJS: () => <HREF url="https://reactjs.org/" name="React JS" />,
	LetsEncrypt: () => <HREF url="https://letsencrypt.org/" name="Let's Encrypt" />,
};

export default Subject;
