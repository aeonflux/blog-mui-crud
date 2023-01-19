import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import MapIcon from '@mui/icons-material/Map';
import QuiltedImages from '../QuiltedImages';

export default function PostDetails({ post }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>See More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography component="h2" variant="h5" paddingTop={2}>
                            Geolocation
                        </Typography>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                < MapIcon />
                            </Grid>
                            <Grid item spacing={2} padding={1}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {post.longitude}, {post.latitude}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {post.address}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" /> */}
                    <Typography paddingY={2}>
                        {post.body}
                    </Typography>
                    {/* <Divider variant="middle" />
                        <Typography component="h2" variant="h5" paddingTop={2}>
                            Travel Buddies
                        </Typography>
                        <Stack direction="row" spacing={1} paddingY={2}>
                            {
                                post.friends.map((friend) => {
                                    return <Chip label={friend.name + ""} />
                                })
                            }
                        </Stack>
                        <Divider variant="middle" />
                        <Typography component="h2" variant="h5" paddingTop={2}>
                            Snapshots
                        </Typography>
                        <QuiltedImages /> */}
                </AccordionDetails>
            </Accordion>

        </div>
    );
}