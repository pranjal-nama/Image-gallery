import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import './header.css';
import { useState } from "react";

const Header = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const handleSearchOnKeyPress = () => {
        if (event.key === 'Enter') {
            handleSearch(searchTerm);
        }
    };

	return (
		<AppBar position="static" sx={{ backgroundColor: '#ffffff' }}> 
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1 }}
					color="common.black"
                >
                    Image Gallery
                </Typography>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleInputChange}
                    onKeyPress={handleSearchOnKeyPress}
					className="textFieldCustomStyles" 
                />
            </Toolbar>
        </AppBar>
	);
}

export default Header;
