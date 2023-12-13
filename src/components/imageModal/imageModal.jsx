import { Dialog, DialogTitle, DialogContent, Typography, CardMedia } from "@mui/material";

const ImageModal = ({ open, handleClose, image }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{image?.alt}</DialogTitle>
      <DialogContent>
        <CardMedia component="img" image={image?.url} alt={image?.alt} style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography>Display image details here...</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
