import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import './header.css';

const Header = ({ handleSearch }) => {
    
    const handleInputChange = (event) => {
        handleSearch(event.target.value);
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
					className="textFieldCustomStyles" 
                />
            </Toolbar>
        </AppBar>
	);
}

export default Header;
