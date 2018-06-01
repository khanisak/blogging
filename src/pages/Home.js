import React from 'react';
import LayoutB from '../containers/LayoutB';
import ListBlog from '../containers/ListBlog';
import { Posts } from '../util/Posts';


class Home extends React.Component {
    render() {
        var postList = Posts.map(function(value) {
            return <ListBlog title={value.title} publish={value.publishDate} />
        });
        return (
            <LayoutB>
                {postList}
            </LayoutB>
        );
    }
}

export default Home;