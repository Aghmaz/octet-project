// src/components/Template_card.jsx
import * as React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TempCard({ image, title, tag, description, onSelect }) {
  const selectedTemplate = useSelector((state) => state.resume.selectedTemplate);

  const isSelected = selectedTemplate === title;

  return (
    <Card
      sx={{
        maxWidth: 380,
        borderRadius: 3,
        border: isSelected ? "2px solid black" : "1px solid #ddd",
        p: 2,
        boxShadow: isSelected ? "0 8px 18px rgba(0,0,0,0.2)" : "none",
        "&:hover": {
          transform: "scale(1.04)",
          transition: "all 0.25s ease",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          borderRadius: 2,
          height: "200px",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" fontWeight="bold">
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
          onClick={onSelect}
          variant={isSelected ? "contained" : "outlined"}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 4,
            color: isSelected ? "white" : "black",
            backgroundColor: isSelected ? "black" : "transparent",
            border: "1px solid black",
          }}
        >
          {isSelected ? "Selected" : "Use Template"}
        </Button>
      </Box>
    </Card>
  );
}
