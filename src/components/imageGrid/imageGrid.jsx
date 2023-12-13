import { Card, CardMedia, Grid } from "@mui/material";
import './imageGrid.css';

const ImageGrid = ({ images }) => {
    return(
        <Grid container spacing={3} className="image-grid">
            {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <CardMedia
                        component="img"
                        image={image.url}
                        alt={image.alt}
                        className="image-item"
                    />
                </Card>
            </Grid>
            ))}
        </Grid>
    )
}

export default ImageGrid;