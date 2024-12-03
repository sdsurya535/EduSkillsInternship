// src/utils/imageData.js

const imageCount = 124; // Total number of images

const imageArray = Array.from({ length: imageCount }, (v, k) => {
  const index = k + 1; // because k starts at 0
  const extension = index % 4 === 0 ? 'jpg' : 'png'; // Example rule: every 4th image is a jpg
  return `/${index}.${extension}`;
});

export default imageArray;
