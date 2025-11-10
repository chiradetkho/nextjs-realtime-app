import { Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{width: '100%', maxWidth: {sm: '100%' , md: '1700px'}, p: 3}}>
        <Typography variant="h4" gutterBottom>
            Contact Management
        </Typography>
        <Typography variant="body1">
            This is the contact management page in the admin dashboard.
        </Typography>
    </Box>
  );
}