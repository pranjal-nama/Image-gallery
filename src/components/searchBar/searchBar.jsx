import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    const clearSearch = () => {
        setSearchTerm("");
        handleSearch("");
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <OutlinedInput
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search high-resolution images"
                style={{ height: "2.5rem", width: "50rem", borderRadius: "100px", background: "#ffffff" }}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton type="submit" size="small">
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton size="small" onClick={clearSearch}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </form>
    );
};

export default SearchBar;
