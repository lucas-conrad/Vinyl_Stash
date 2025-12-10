import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { getCollection, removeAlbum } from "../services/api.js";

export default function Collection() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
       async function load() {
            const data = await getCollection();
            setAlbums(Array.isArray(data) ? data : []);
            console.log(data);    
    }
        load();
    }, []);
    const handleRemove = async (id) => {
        await removeAlbum(id);
        setAlbums(albums.filter(a => a._id !== id));
    };

    return (
        <>
            <Navbar />
            <div className="collection-page">
                <h2>My Vinyl Collection</h2>

                <div className="results-grid">
                    {albums.length === 0 && <p>Your collection is empty.</p>}
                    {albums.map((album) => (
                        <div key={album._id} className="album-card">
                            <img src={album.thumb} alt={album.title} />
                            <h3>{album.title}</h3>
                            <p>{album.artist}</p>
                            <p>{album.year}</p>
                            <p>{album.genres || [].join(", ")}</p>
                            <button onClick={() => handleRemove(album._id)}> 
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}