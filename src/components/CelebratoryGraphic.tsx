// Graphic that appears at the end of the test if user answers all questions correctly

import React from 'react';
import Confetti from 'react-confetti';

const CelebratoryGraphic: React.FC = () => {
    // Get the width and height of the window
    const { innerWidth: width, innerHeight: height } = window;
    
    return (
        <div>
            <h1>Congratulations! You answered all questions correctly!</h1>
            <Confetti width={width} height={height}  />
        </div>
    );
};

export default CelebratoryGraphic;