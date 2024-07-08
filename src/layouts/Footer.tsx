import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        color: '#000000',
        padding: '20px 0',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            padding: '20px'
          }}
        >
          <Box sx={{ flex: '1', minWidth: '250px', padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                About Us
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                Careers
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                Press
              </Link>
            </Typography>
          </Box>
          <Box sx={{ flex: '1', minWidth: '250px', padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                Help Center
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
          <Box sx={{ flex: '1', minWidth: '250px', padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.facebook.com" color="inherit" underline="none">
                Facebook
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.instagram.com" color="inherit" underline="none">
                Instagram
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.twitter.com" color="inherit" underline="none">
                Twitter
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          textAlign: 'center',
          padding: '10px 0',
          borderTop: '1px solid #e0e0e0'
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Hada Labo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
