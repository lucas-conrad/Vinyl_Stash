import AlbumCard from "./AlbumCard";

export default function SearchResults({ results, onAdd }) {
    return (
        <div className="results-grid">
            {results.map((album) => (
                <AlbumCard 
                key={album.id} 
                album={{
                    discogsId: album.id,
                    title: album.title,
                    artist: album.title.split(" - ")[0],
                    year: album.year,
                    thumb: album.thumb,
                    genres: album.genres || [],
                    styles: album.styles || []
                }}
                
                onAdd={onAdd} />
            ))}
        </div>
    );
}   