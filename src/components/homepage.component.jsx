import React from "react";
import new1 from '../assets/new1.jpg';
import chairs from  "../assets/chairs.jpg";
import cushions from '../assets/cushions.jpg';
import travel from '../assets/travel.jpg';
import brick from '../assets/brick.jpg';
import mats from '../assets/mats.jpg';
import DirectoryItem from "./directory-item.component";

const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Meditation Chairs',
          imageUrl : chairs
        },
        {
            id: 2,
            title: 'Meditation Cushions',
            imageUrl : cushions
          },
          
          {
            id: 3,
            title: 'Yoga Mats',
            imageUrl : mats
          },
          {
            id: 4,
            title: 'Travel Acessories',
            imageUrl : travel,
            size: "small"
          },
          {
            id: 5,
            title: 'Yoga Brick and Belt',
            imageUrl : brick,
            size:'small,'
          },
          {
            id: 6,
            title: 'Yoga',
            imageUrl : new1,
            size:'small,'
          },
        
      ];
  return (
    <div className="py-40 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-15 sm:px-0">
    {categories.map(({ id, title , imageUrl ,size }) => (
        
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size}/>
    ))}
  </div>

  );
};

export default Home;