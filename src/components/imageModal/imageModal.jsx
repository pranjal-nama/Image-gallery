import { Dialog, DialogTitle, DialogContent, CardMedia } from "@mui/material";

const ImageModal = ({ open, handleClose, image }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{image?.alt_description}</DialogTitle>
      <DialogContent>
        <CardMedia 
            component="img" 
            image={image?.links.download} 
            alt={image?.alt_description} 
            style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
