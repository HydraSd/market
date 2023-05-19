"use client";
import { AppBar, Box, Toolbar, Button, Drawer } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <Box flex={1}>
          <AppBar position="static" sx={{ bgcolor: "white" }}>
            <Toolbar>
              <div className="text-black sm:hidden">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Link
                href="/"
                className="text-black text-xl font-semibold flex-1"
              >
                Home
              </Link>

              <div className="hidden sm:inline">
                <Button color="inherit">
                  <Link href="/sell" className="text-black">
                    Sell a product
                  </Link>
                </Button>
                <Button color="inherit">
                  <div className="text-black">Login</div>
                </Button>
                <Button color="inherit">
                  <div className="text-black">Login</div>
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
     
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold py-2 pl-2 px-auto">Welcome</h1>
            <IconButton
         
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 1 }}
              onClick={handleDrawerClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Link
            href="/sell"
            className="py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-[250px]"
            onClick={handleDrawerClose}
          >
            Sell Product
          </Link>
          <h2 className="py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-[250px]">
            Sell Product
          </h2>
        
      </Drawer>
    </>
  );
}

export default Header;
