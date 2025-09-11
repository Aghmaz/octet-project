// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function TempCard() {
//   return (
//     <Card sx={{ maxWidth:400 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }


import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


// 🔹 Child Component
export default function TempCard({ image, title, tag, description, buttonText }) {
  return (
    <Card sx={{ maxWidth: 390, borderRadius: 3,border:"1px solid black", p: 3, "&:hover" :{
transform:"scale(1.06)",transition:"all 0.2s ease"
    }}}>
      {/* Image */}
      <CardMedia
        component="img"
        // height="500"
        image={image}
        alt={title}
        sx={{ borderRadius: 2 ,height:"200px",backgroundSize:"center" }}
      />

      {/* Content */}
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="medium"
          >
            {tag}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>

      {/* Button */}
      <Box textAlign="center" pb={2}>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 4,
            border:"1px solid black",color:"black"
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  );
}