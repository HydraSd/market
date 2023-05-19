"use client";
import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";

function ProductCard() {
  return (
    <Card className="m-2 hover:scale-105 transition duration 100">
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/R.d331e72bba1c35ade48ac5b2fef3b48d?rik=pYpgKKdrCeUkXw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jLItxCxFTTo%2fUIDuNUPZHAI%2fAAAAAAAALqU%2fhh6-Fgcj1cA%2fs1600%2fClassic%2bCars%2bWallpapers%2b5.jpg&ehk=KD1BM6l24Wl2vLZAYKJmhXPzp9BQX%2f3d6zv4%2fe%2fgY4A%3d&risl=&pid=ImgRaw&r=0"
      />
      <CardContent>
        <h3 className="text-xl font-semibold">ProductName</h3>
        <div>Test product description</div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
