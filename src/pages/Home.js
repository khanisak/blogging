import React from 'react';
import LayoutB from '../containers/LayoutB';
import ListBlog from '../containers/ListBlog';
import RightSide from '../containers/RightSide';
import { Posts } from '../util/Posts';
import Grid from '@material-ui/core/Grid';


class Home extends React.Component {
    render() {
        var postList = Posts.map(function (value) {
            return <ListBlog title={value.title} publish={value.publishDate} slug={value.slug} key={value.slug} />
        });
        return (
            <LayoutB>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={8} >
                        {postList}
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <RightSide />
                    </Grid>
                </Grid>
            </LayoutB>
        );
    }
}

export default Home;