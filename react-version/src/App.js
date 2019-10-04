import React, {useState} from 'react';
import './App.css';

const imageNames = ['galaxies.png', 'bridge.jpg', 'stars.jpg', 'sombrero.jpg'];

function App() {
    const [numberOfTimesLoaded, setNumberOfTimesLoaded] = useState(0);
    const [imageIndex, setImageIndex] = useState(undefined);

    const imageName = imageNames[imageIndex];

    function loadImage() {
        setNumberOfTimesLoaded(numberOfTimesLoaded + 1);
        setImageIndex(numberOfTimesLoaded % imageNames.length);
    }

    return (
        <div>
            <div className="container button-container">
                <button
                    className="load-button"
                    onClick={loadImage}
                >
                    Load Image
                </button>
            </div>

            <div className="container image-container-with-loader">
                {
                    imageName &&
                    <img src={`img/${imageName}`} alt="image placeholder"/>
                }
            </div>
        </div>
    );
}

export default App;
