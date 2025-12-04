export default function AlbumCard({ album, onAdd }) {
    return (
        <div className="album-card">
            <img src={album.cover_image} alt={album.title} />

            <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <p>{album.year}</p>

                {album.genress && (
                    <p className="genres">
                        {album.genress.join(", ")}
                    </p>
                    )}

                <button onClick={() => onAdd(album)}>
                    Add to Collection
                </button>
            </div>
        </div>
    );
}   

