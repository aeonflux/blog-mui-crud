import axios from "axios";
import {
    POSTS_FETCH_SUCCESS,
    POST_FETCH_SUCCESS,
    POST_CREATE_SUCCESS,
    POST_DELETE_SUCCESS,
    POST_UPDATE_SUCCESS,
    POST_FETCH_REQUEST,
    POSTS_FETCH_REQUEST,
    POST_ERROR
} from "./types";

import { config } from '../config';

const { API_URL } = config;


export const fetchPosts = () => async dispatch => {
    dispatch({
        type: POSTS_FETCH_REQUEST,
        payload: true
    });
    try {
        const response = await axios.get(`${API_URL}/posts`);
        if (response.status === 200) {
            dispatch({
                type: POSTS_FETCH_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {
                error: "Error occured"
            }
        });
    }
};

export const fetchPost = (id) => async dispatch => {
    try {
        dispatch({
            type: POST_FETCH_REQUEST,
            payload: true
        });
        const response = await axios.get(`${API_URL}/posts/${id}`);
        if (response.status === 200) {
            dispatch({
                type: POST_FETCH_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {
                error: "Error occured"
            }
        });
    }
};


export const createPost = payload => async dispatch => {
    try {
        const response = await axios.post(`${API_URL}/posts`, payload);
        if (response.status === 200) {
            dispatch({
                type: POST_CREATE_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {
                error: "Error occured"
            }
        });
    }
};

export const updatePost = (id, payload) => async dispatch => {
    try {
        const response = await axios.put(`${API_URL}/posts/${id}`, payload);
        if (response.status === 200) {
            dispatch({
                type: POST_UPDATE_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {
                error: "Error occured"
            }
        });
    }
};


export const deletePost = id => async dispatch => {
    try {
        const response = await axios.delete(`${API_URL}/posts/${id}`, {});
        if (response.status === 200) {
            dispatch({
                type: POST_DELETE_SUCCESS,
                payload: id
            });
        }
    } catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {
                error: "Error occured"
            }
        });
    }
};
