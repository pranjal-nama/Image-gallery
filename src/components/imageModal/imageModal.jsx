import { Dialog, DialogContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ImageModal = ({ open, handleClose, image }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <CardMedia 
            component="img" 
            image={image?.links?.download} 
            alt={image?.alt_description} 
            style={{ maxWidth: '100%', height: 'auto' }} 
        />
          <Box display="flex" alignItems="center" justifyContent="space-between" >
            <Box display="flex" alignItems="center">
              <img
                src={image?.user?.profile_image?.small}
                alt="profile"
                style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '10px' }}
              />
              <Box>
                <Typography variant="subtitle2">{image?.user?.first_name}</Typography>
                  {image?.user?.instagram_username && (
                    <Typography variant="caption" display="flex" alignItems="center">
                      @{image?.user?.instagram_username}
                    </Typography>
                  )}
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton size="small" color="primary" aria-label="like">
                <FavoriteIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{image?.likes}</Typography>
            </Box>
          </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
