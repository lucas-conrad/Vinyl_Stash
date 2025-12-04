import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { getCollection } from "../services/api.js";

export default function Collection() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
       async function load() {
        const data = await getCollection();
        setAlbums(data);    
       }
        load();
    }, []);

    return (
        <>
            <Navbar />
            <div className="collection-page">
                <h2>My Vinyl Collection</h2>

                <div className="results-grid">
                    {albums.map((album) => (
                        <div key={album._id} className="album-card">
                            <img src={album.thumb} alt={album.title} />
                            <h3>{album.title}</h3>
                            <p>{album.artist}</p>
                            <p>{album.year}</p>
                            <p>{album.genres.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}