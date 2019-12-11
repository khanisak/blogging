import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

class ListBlog extends React.Component {
    render() {
        return (
            <List>
                <ListItem>
                    <ListItemText
                        style={{ marginLeft: 15 }}
                        primary=
                        {<Link to={this.props.slug}> {this.props.title} </Link>}
                        secondary={this.props.publish} />
                </ListItem>
            </List>
        );
    }
}

export default ListBlog;