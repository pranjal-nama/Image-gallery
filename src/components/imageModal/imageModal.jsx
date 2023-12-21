import { Dialog, DialogContent, CardMedia, Typography, Box, IconButton, Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

const ImageModal = ({ open, handleClose, image }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
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

        <CardMedia 
          component="img" 
          image={image?.links?.download} 
          alt={image?.alt_description} 
          style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} 
        />

        {image?.sponsorship?.sponsor?.location && (
          <Box mt={2} display="flex" alignItems="center">
            <LocationOnIcon style={{ marginRight: '8px', color: '#2196f3' }} />
            <Typography variant="body2">
              {`${image?.sponsorship?.sponsor?.location}`}
            </Typography>
          </Box>
        )}
        {image?.created_at && (
          <Box mt={1} display="flex" alignItems="center">
            <DateRangeIcon style={{ marginRight: '8px', color: '#4caf50' }} />
            <Typography variant="body2">
              {`Published on ${formatDate(image?.created_at)}`}
            </Typography>
          </Box>
        )}

        <Box mt={2}>
          <Typography variant="subtitle2">Tags:</Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            {image?.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag.title}
                variant="outlined"
                style={{ margin: '4px' }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
