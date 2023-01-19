import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

const Paginate = ({
    postsPerPage,
    totalPosts,
    paginate
}) => {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        paginate(value);
    };

    return (
        <Pagination count={Math.ceil(totalPosts / postsPerPage)} page={page} onChange={handleChange} color={'secondary'} />
    );
};

export default Paginate;