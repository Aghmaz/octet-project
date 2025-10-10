// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";


// export default function TempCard({
//   image,
//   title,
//   tag,
//   description,
//   buttonText,
//   onSelect,
// }) {
  
//   console.log("✅ Props received in TempCard:", {
//     image,
//     title,
//     tag,
//     description,
//     buttonText,
//     onSelect,
//   });




//   return (
//     <Card
//       sx={{
//         width: "100%",
//         borderRadius: 3,
//         border: "1px solid #ccc",
//         boxShadow: 2,
//         "&:hover": {
//           transform: "scale(1.03)",
//           transition: "all 0.3s ease",
//         },
//       }}
//     >
//       {/* Image */}
//       <CardMedia
//         component="img"
//         image={image}
//         alt={title}
//         sx={{
//           borderRadius: "12px 12px 0 0",
//           height: "200px",
//           objectFit: "cover",
//         }}
//       />

//       {/* Content */}
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             fontWeight="bold"
//             color="text.primary"
//           >
//             {title}
//           </Typography>
//           <Typography variant="body2" color="primary" fontWeight="medium">
//             {tag}
//           </Typography>
//         </Box>

//         <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
//           {description}
//         </Typography>
//       </CardContent>

//       {/* Button */}
//       <Box textAlign="center" pb={2}>
//         <Button
//           onClick={onSelect}
//           variant="contained"
//           sx={{
//             textTransform: "none",
//             borderRadius: 2,
//             px: 4,
//             backgroundColor: "black",
//             "&:hover": {
//               backgroundColor: "#333",
//             },
//           }}
//         >
//           {buttonText}
//         </Button>
//       </Box>
//     </Card>
//   );
// }










// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";


// // 🔹 Child Component
// export default function TempCard({ image, title, tag, description, buttonText }) {
//   return (
//     <Card sx={{ maxWidth: 390, borderRadius: 3,border:"1px solid black", p: 3, "&:hover" :{
// transform:"scale(1.06)",transition:"all 0.2s ease"
//     }}}>
//       {/* Image */}
//       <CardMedia
//         component="img"
//         // height="500"
//         image={image}
//         alt={title}
//         sx={{ borderRadius: 2 ,height:"200px",backgroundSize:"cover" }}
//       />

//       {/* Content */}
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             fontWeight="bold"
//           >
//             {title}
//           </Typography>
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             fontWeight="medium"
//           >
//             {tag}
//           </Typography>
//         </Box>

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//           {description}
//         </Typography>
//       </CardContent>

//       {/* Button */}
//       <Box textAlign="center" pb={2}>
//         <Button
//           variant="outlined"
//           sx={{
//             textTransform: "none",
//             borderRadius: 2,
//             px: 4,
//             border:"1px solid black",color:"black"
//           }}
//         >
//           {buttonText}
//         </Button>
//       </Box>
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
import { useNavigate } from "react-router-dom";   // ✅ navigation hook import

// 🔹 Child Component
export default function TempCard({ image, title, tag, description, buttonText }) {
  const navigate = useNavigate(); // ✅ hook

  const handleClick = () => {
    // Direct navigate to editor with template info
    navigate("/editor", { state: { template: title } });
  };

  return (
    <Card
      sx={{
        maxWidth: 390,
        borderRadius: 3,
        border: "1px solid black",
        p: 3,
        "&:hover": {
          transform: "scale(1.06)",
          transition: "all 0.2s ease",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ borderRadius: 2, height: "200px", backgroundSize: "cover" }}
      />

      {/* Content */}
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="medium">
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
          onClick={handleClick} // ✅ navigate call
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 4,
            border: "1px solid black",
            color: "black",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  );
}
