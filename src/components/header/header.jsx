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
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Image Gallery
				</Typography>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleInputChange}
                    sx={{ maxWidth: '300px' }}
                />
			</Toolbar>
		</AppBar>
	);
}

export default Header;
