import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Search({ handleSearch }) {

    const onChange = (event) => {
        handleSearch(event.target.value);
    }

    return (
        <Stack marginY={2} sx={{ width: 300 }}>
            <TextField
                autoFocus
                id="standard-basic"
                color="secondary"
                variant='filled'
                label="Search for a thought ..."
                type="text"
                name="keyword"
                fullWidth
                sx={{ input: { color: "white" }, "label": { color: '#9c27b0' } }}
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Stack>
    );
}
