import { useState } from "react";
import { GalleryList } from "../data/galeria";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        if (index < GalleryList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handlePrevClick() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(GalleryList.length - 1);
        }
    }

    const galleryItem = GalleryList[index];

    return (
        
        <>
            <h2>Galeria - {index + 1}/{GalleryList.length}. Elem</h2>
            <button onClick={handlePrevClick}>⬅️</button>
            <button onClick={handleNextClick}>➡️</button>

            <h2>
                {galleryItem.name} by {galleryItem.artist}
            </h2>
            <div>
                {galleryItem.description}
                <img 
                    src={galleryItem.url} 
                    alt={galleryItem.alt} 
                    style={{ width: "500px", height: "500px" }}
                />
            </div>
        </>
    );

}
