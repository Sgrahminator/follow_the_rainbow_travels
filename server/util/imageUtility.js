const fs = require('fs');
const path = require('path');

const getRandomProfileImage = () => {
    const imagesDir = path.join(__dirname, '../public/images'); 
    const images = fs.readdirSync(imagesDir);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return randomImage; // Returns just the filename
};

module.exports = { getRandomProfileImage };
