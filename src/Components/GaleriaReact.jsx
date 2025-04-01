import { useState } from "react";
import { GalleryList } from "../data/galeria";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="container my-5">
            <h2 className="text-center mb-4">Galéria - {index + 1}/{GalleryList.length} Elem</h2>
            <div className="d-flex justify-content-center mb-3">
                <button 
                    className="btn btn-outline-primary mx-2" 
                    onClick={handlePrevClick}>
                    ⬅️ Előző
                </button>
                <button 
                    className="btn btn-outline-primary mx-2" 
                    onClick={handleNextClick}>
                    Következő ➡️
                </button>
            </div>

            <div className="text-center">
                <h4>{galleryItem.name} by {galleryItem.artist}</h4>
                <p>{galleryItem.description}</p>
                <img 
                    src={galleryItem.url} 
                    alt={galleryItem.alt} 
                    className="img-fluid rounded shadow"
                    style={{ maxWidth: "100%", maxHeight: "500px" }} 
                />
            </div>
        </div>
    );
}
