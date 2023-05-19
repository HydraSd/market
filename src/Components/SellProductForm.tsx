"use client";
import React from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

function SellProductForm() {
  return (
    <div className="">
      <Box component="form" noValidate>
        <TextField
        placeholder="Enter the name of the product"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Product Name"
          name="name"
          autoComplete="name"
          autoFocus
        ></TextField>

        <TextField
          type="number"
          margin="normal"
          required
          fullWidth
          id="value"
          label="Value"
          name="value"
          autoComplete="number"
          placeholder="Enter the product value here"
          autoFocus
        ></TextField>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remeber me"
        />
        <Button>Test</Button>
      </Box>
    </div>
  );
}

export default SellProductForm;
