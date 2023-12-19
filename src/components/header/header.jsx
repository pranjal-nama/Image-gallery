import { AppBar, Toolbar, Typography, CardMedia, CardContent, Box, Switch, Grid} from "@mui/material";
import { useState } from "react";
import SearchBar from "../searchBar/searchBar";
import './header.css';

const Header = ({ handleSearch }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Example: document.body.classList.toggle('dark-mode');
    };

	return (
        <>
		<AppBar position="static" sx={{ backgroundColor: '#ffffff' }}> 
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flex: 1, whiteSpace: 'nowrap' }}
                    color="textPrimary"
                >
                    Image Gallery
                </Typography>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <SearchBar handleSearch={handleSearch} />
                    </Grid>            
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography 
                        sx={{ flex: 1, whiteSpace: 'nowrap' }}
                        color="textSecondary"
                    >
                        Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={toggleDarkMode} />
                </Grid>
            </Toolbar>
        </AppBar>
        <Box position="relative">
            <CardMedia
                component="img"
                image="src\assets\mountain.jpg"
                alt="header_cover"
                style={{ objectFit: 'cover', height: "15rem" }}
            />
            <CardContent className="cover-text">
                <Typography variant="h6">Download high-quality images by creators</Typography>
                <Typography variant="body1">Over 2.4 million+ stock images by our talented community</Typography>
                <SearchBar handleSearch={handleSearch}/>
            </CardContent>
        </Box>
        </>
	);
}

export default Header;
