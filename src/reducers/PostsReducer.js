import {
    POSTS_FETCH_SUCCESS,
    POST_FETCH_SUCCESS,
    POST_CREATE_SUCCESS,
    POST_DELETE_SUCCESS,
    POST_ERROR,
    POST_UPDATE_SUCCESS,
    POSTS_FETCH_REQUEST,
    POST_FETCH_REQUEST
} from '../actions/types';

const INITIAL_STATE = {
    post: {
        id: 0,
        title: '',
        address: '',
        date: '',
        latitude: 0,
        longitude: 0,
        region: '',
        friends: []
    },
    posts: [],
    error: "",
    isLoadingPosts: false,
    isLoadingPost: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case POSTS_FETCH_REQUEST:
            return {
                ...state,
                isLoadingPosts: true,
            };
        case POST_FETCH_REQUEST:
            return {
                ...state,
                isLoadingProduct: true
            };
        case POSTS_FETCH_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isLoadingPosts: false
            };
        case POST_FETCH_SUCCESS:
            return {
                ...state,
                post: action.payload,
                isLoadingProduct: false
            };
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                posts: [{
                    ...state.posts,
                    ...action.payload
                }],
                error: "",
                status: "",
            };
        case POST_DELETE_SUCCESS:
            console.log('sasa', action.payload)
            return {
                ...state,
                posts: state.posts.filter(
                    post => post.id !== action.payload
                )
            };
        case POST_UPDATE_SUCCESS:
            return {
                ...state,
                post: action.payload,
                error: "",
                status: "",
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                )
            };
        case POST_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}