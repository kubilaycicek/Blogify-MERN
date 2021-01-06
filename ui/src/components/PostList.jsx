import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    layoutShifter: {
        float: "right",
        margin: theme.spacing(2),
    },
}));

const PostList = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <>
            
        </>
    )
}

export default PostList;
