import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useMovieStore, { selectFindMovie } from '../store/movie';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBox = (props) => {
    const findMovie = useMovieStore(selectFindMovie);
    const [findText, setFindText] = useState('')
    const navigate = useNavigate();

    return (
        <Search sx={props.search ? { visibility: 'visible' } : { visibility: 'hidden' }}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={props.text}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {
                    setFindText(e.target.value)
                }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        findMovie(findText)
                        navigate('/find')
                    }
                }}
            />
        </Search>
    )
}

export default SearchBox;