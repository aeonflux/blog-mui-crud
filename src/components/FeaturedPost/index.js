import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import randomSentence from 'random-sentence';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function FeaturedPost({ post, handleEditOpen, handleEdit, handleDelete }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#9c27b0' }} aria-label="recipe">
                        T
                    </Avatar>
                }
                title={(post?.title).substring(0, 20) + ' ...'}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="60"
                image={'https://images.unsplash.com/photo-1522330351968-f52c97705db7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRoaW5rJTIwd29tYW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {(post?.body).substring(0, 100) + ' ...'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="h6">Thought of the Day</Typography>
                    <Box sx={{ fontStyle: 'oblique', m: 1 }}>
                        <Typography paragraph>
                            {randomSentence({ min: 4, max: 9 })}
                        </Typography>
                        <Typography paragraph>
                            {randomSentence({ min: 4, max: 20 })}
                        </Typography>
                        <Typography paragraph>
                            {randomSentence({ min: 4, max: 30 })}
                        </Typography>
                        <Typography>
                            {randomSentence({ min: 4, max: 9 })}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">

                        <IconButton aria-label="settings" onClick={() => {
                            handleEditOpen();
                            handleEdit(post)
                        }}>
                            <EditIcon />
                        </IconButton>

                        <IconButton color="secondary" aria-label="close-icon" onClick={() => {
                            handleDelete(post.id);
                            setExpanded(!expanded)
                        }} component="label">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}