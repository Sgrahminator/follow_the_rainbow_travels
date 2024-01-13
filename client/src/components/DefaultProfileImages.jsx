import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DefaultProfileImages = ({ handleImageSelection }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = [
        'butterfly.jpg', 'DeLand_tree.jpg', 'dew_drops.jpg', 'Dirty.jpg', 'feathers.jpg', 
        'Flamingos.jpg', 'flowers.jpg', 'HI_Flower.jpg', 'mountains3.jpg', 'New_Symrna_1.jpg', 
        'New_Symrna_2.jpg', 'peacock.jpg', 'sand_ripples.jpg', 'spider.jpg', 'sunset.jpg', 'sunset2.jpg'
    ];

    const selectImage = (imageName) => {
        handleImageSelection(imageName);
        setIsModalOpen(false); // Close the modal after selection
    };

    return (
        <React.Fragment>
            <button onClick={() => setIsModalOpen(true)}>Select Default Image</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        {images.map(image => (
                            <img 
                                key={image} 
                                src={`images/${image}`}
                                alt={image} 
                                onClick={() => selectImage(image)}
                                className="thumbnail"
                            />
                        ))}
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

// Define prop types
DefaultProfileImages.propTypes = {
    handleImageSelection: PropTypes.func.isRequired, 
};

export default DefaultProfileImages;
