import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Divider, Button, Chip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { fetchSinglePost, deletePost } from "../actions/post";
import noImage from "../images/noimage.svg";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(8),
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
    },
    content: {
        marginTop: theme.spacing(3),
    },
    image: {
        width: "100%",
        borderRadius: 5,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(4),
    },
    chip: {
        marginTop: theme.spacing(1),
    },
}));

const PostDetails = ({ match, history, location }) => {
    const dispatch = useDispatch();
    const { id } = match.params;
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(fetchSinglePost(id));
      }, [dispatch, id]);
    return (
        <div>
            post details
        </div>
    )
}

export default PostDetails;
