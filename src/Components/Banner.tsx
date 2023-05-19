"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import Image from "next/image";

function Banner() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://th.bing.com/th/id/R.b700f0d6c5caf4ed904333d9a07120de?rik=4nVd%2b6v7RR8eWA&pid=ImgRaw&r=0",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://th.bing.com/th/id/R.54a08f440ac87229c787c4a7d4d7c2e1?rik=ojvNPtXt1kFaeQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-HD-Nature-Backgrounds.jpg&ehk=8CS7wIfwrmHKIoJvi2wEW6cn0UCtTSgbouYjpo01bz8%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div className="">
      <Carousel className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px">
        {items.map((item, i) => (
          <div key={i} className="">
            <Image 
            src={item.image}
            layout="fill"
            objectFit="cover"
            alt=""
            />
            {/* <img src={item.image} alt="" /> */}
            <div className="absolute top-1/2 w-full text-center text-white font-semibold">
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <Button>Check it Out</Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
