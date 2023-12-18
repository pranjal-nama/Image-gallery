import { AppBar, Toolbar, Typography, CardMedia, CardContent, Box} from "@mui/material";
import SearchBar from "../searchBar/searchBar";
import './header.css';

const Header = ({ handleSearch }) => {

	return (
        <>
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
                <SearchBar handleSearch={handleSearch}/>
            </Toolbar>
        </AppBar>
        <Box position="relative">
            <CardMedia
                component="img"
                image="src\assets\mountain.jpg"
                alt="header_cover"
                style={{ objectFit: 'cover', height: "22rem" }}
            />
            <CardContent className="cover-text">
                <Typography variant="h6">Download high-quality images by creators</Typography>
                <Typography variant="body1">Over 2.4 million+ stock images by our talented community</Typography>
            </CardContent>
        </Box>
        </>
	);
}

export default Header;
