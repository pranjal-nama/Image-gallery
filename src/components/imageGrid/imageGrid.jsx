import { Card, CardContent, CardMedia, Grid, Typography, Box, IconButton } from "@mui/material";
import { useState } from "react";
import ImageModal from "../imageModal/imageModal";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const ImageGrid = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box m={4}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 350: 2, 768: 3 }}>
            <Masonry gutter="1.8rem">
                {images.map((image, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                image={image.links.download}
                                alt={image.alt_description}
                                style={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between" >
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src={image?.user?.profile_image?.small}
                                            alt="profile"
                                            style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '10px' }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle2">{image?.user?.first_name}</Typography>
                                            <Typography variant="caption" display="flex" alignItems="center">
                                                {image.user?.instagram_username && <span style={{ marginRight: '5px' }}>@</span>}
                                                {image?.user?.instagram_username}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <IconButton size="small" color="primary" aria-label="like">
                                            <FavoriteIcon fontSize="small" />
                                        </IconButton>
                                        <Typography variant="body2">{image?.likes}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Masonry>
            </ResponsiveMasonry>
            <ImageModal open={open} handleClose={handleClose} image={selectedImage} />
        </Box>
    )
}

export default ImageGrid;
