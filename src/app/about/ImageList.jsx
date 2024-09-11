import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Image} from "@nextui-org/react";

export default function StandardImageList() {
  return (
      <ImageList sx={{ width: 900, height: 550 }} cols={3} rowHeight={'auto'}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}`}
            alt={item.title}
            width={300}
            height={400}
            className='rounded-md'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/about_images/2.jpeg",
    title: 'Breakfast',
  },
  {
    img: "/about_images/13.jpeg",
    title: 'Bike',
  },{
    img: "/about_images/6.jpeg",
    title: 'Hats',
  },
  {
    img: "/about_images/3.jpeg",
    title: 'Burger',
  },
  {
    img: "/about_images/4.jpeg",
    title: 'Camera',
  },{
    img: "/about_images/10.jpeg",
    title: 'Mushrooms',
  },
  {
    img: "/about_images/5.jpeg",
    title: 'Coffee',
  },
  
  {
    img: "/about_images/7.JPG",
    title: 'Honey',
  },
  {
    img: "/about_images/8.jpeg",
    title: 'Basketball',
  },
  {
    img: "/about_images/9.jpeg",
    title: 'Fern',
  },
  ,{
    img: "/about_images/15.jpeg",
    title: 'SS',
  },
  {
    img: "/about_images/11.jpeg",
    title: 'Tomato basil',
  },
  {
    img: "/about_images/12.jpeg",
    title: 'Sea star',
  },
  {
    img: "/about_images/18.jpeg",
    title: 'c',
  },
  {
    img: "/about_images/17.jpeg",
    title: 'd',
  },
 
];