
import { addAlbum } from "../services/api"; 

export default function AlbumCard({ album, onAdd }) {
    const handleAdd = async () => {
        await addAlbum({
            discogsId: album.discogsId,
            title: album.title,
            artist: album.artist,
            year: album.year,
            thumb: album.thumb,
            genres: album.genres || [],
            styles: album.styles || []
        });
 
        if (onAdd) onAdd();
    };

    return (
        <div className="album-card">
            <img src={album.thumb} alt={album.title} className="album-thumb" />

            <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <p>{album.year}</p>

                {album.genre?.length > 0 && (
                    <p className="genres">
                        {album.genre.join(", ")}
                    </p>
                    )}

                <button className="add-btn" onClick={handleAdd}>
                    Add to Collection
                </button>
            </div>
        </div>
    );
}   

