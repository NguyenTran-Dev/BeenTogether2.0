import React from 'react';
import Post from '../components/Post';
import data from '../data/data.js';
const NewFeed = () => {
  return data.map((item, index) => {
    return <Post item={item} key={index} />;
  });
};

export default NewFeed;
