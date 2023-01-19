import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderBackground from '../../components/HeaderBackground';
import FeaturedPost from '../../components/FeaturedPost';
import Button from '@mui/material/Button';
import Paginate from '../../components/Paginate';
import Footer from '../../components/Footer';
import post1 from '../../mockData/blog-post.1.md';
import post2 from '../../mockData/blog-post.2.md';
import Form from '../../components/Form';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import {
    fetchPosts,
    createPost,
    deletePost,
    updatePost
} from '../../actions/PostsActions';


const header = {
    title: 'Sonder wonder',
    description:
        "Marvelous thoughts, one post at a time. Discovering sonder through words and experiences.",
    image: 'https://images.unsplash.com/photo-1515052945961-bbb80118b74b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    imageText: 'The Traveler',
    linkText: 'See Photo Inspirations',
};

const posts = [post1, post2, post2];

const theme = createTheme();

export default function Blog() {

    const dispatch = useDispatch();
    const { post } = useSelector(state => state);
    //  Create
    const [open, setOpen] = React.useState(false);
    //  Edit
    const [edit, setEdit] = React.useState(false);
    const [blogPosts, setBlogPosts] = React.useState([]);
    const [postCount, setPostCount] = React.useState(0);
    const [keyword, setKeyword] = React.useState('');
    const [currentEdit, setCurrentEdit] = React.useState({});
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(6);

    useEffect(() => {
        dispatch(fetchPosts());
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (post.isLoadingPosts) {
            setBlogPosts(post.posts)
        }
    }, [post.isLoadingPosts, post.posts]);

    useEffect(() => {
        setPostCount(postCount)
        // eslint-disable-next-line
    }, [blogPosts]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditOpen = () => {
        setEdit(true);
    };

    const handleEditClose = () => {
        setEdit(false);
    };

    const handleSearch = (value) => {
        setKeyword(value)
        filterSearch(value);
    };

    const filterSearch = (search) => {
        const data = post?.posts?.filter(post => {
            if (search === '') {
                return post;

            } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
                return post;
            }
        });

        setBlogPosts(data);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleDelete = (id) => {
        console.log(id + 'delete')
        dispatch(deletePost(id))
    };

    const handleEdit = (post) => {
        setCurrentEdit(post);
    };



    const handleSubmit = (payload) => {
        if (open) {
            dispatch(createPost(payload))
            handleClose();
        } else {
            dispatch(updatePost(payload.id, payload))
            handleEditClose();
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xl" disableGutters={true} >
                <main>
                    <HeaderBackground post={header} handleSearch={handleSearch} />
                    {/* Search and Create Functionality */}
                    <Grid container
                        justifyContent="center">
                        <Button variant="contained" color="secondary" endIcon={<HistoryEduIcon />} onClick={handleClickOpen}>
                            Post a Thought
                        </Button>
                    </Grid>
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        margin={2} >
                        {post?.posts?.slice((currentPage * postsPerPage) - postsPerPage, currentPage * postsPerPage).map((post) => (
                            <FeaturedPost
                                key={post.title}
                                post={post}
                                handleEdit={handleEdit}
                                handleEditOpen={handleEditOpen}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </Grid>
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        margin={2} >
                        <Paginate
                            postsPerPage={postsPerPage}
                            totalPosts={keyword === '' ? post?.posts?.length : blogPosts.length}
                            currentPage={currentPage}
                            paginate={paginate}
                        />
                    </Grid>
                </main>
            </Container>
            {/* Modal */}
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Form handleClose={handleClose} mode={'create'} onSubmit={handleSubmit} />
                </DialogContent>
            </Dialog>
            <Dialog open={edit} onClose={handleEditClose}>
                <DialogContent>
                    <Form handleClose={handleEditClose} mode={'edit'} values={currentEdit} onSubmit={handleSubmit} />
                </DialogContent>
            </Dialog>
            <Footer
                title="Carpe diem"
                description="Leaving nothing but footprints."
            />
        </ThemeProvider >
    );
}