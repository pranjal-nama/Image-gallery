import { Card, CardMedia, Grid } from "@mui/material";
import './imageGrid.css';
import { useState } from "react";
import ImageModal from "../imageModal/imageModal";

const ImageGrid = ({images}) => {
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

    return(
        <>
        <Grid container spacing={3} className="image-grid">
            {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card onClick={() => handleImageClick(image)}>
                    <CardMedia
                        component="img"
                        image={image.links.download}
                        alt={image.alt_description}
                        className="image-item"
                        style={{ objectFit: 'contain', height: '100%' }}
                    />
                </Card>
            </Grid>
            ))}
        </Grid>

        <ImageModal open={open} handleClose={handleClose} image={selectedImage} />
        </>
    )
}

export default ImageGrid;