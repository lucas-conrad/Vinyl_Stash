import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import { searchDiscogs, addAlbum } from "../services/api.js";

export default function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        const data = await searchDiscogs(query);
        setResults(data);
    };

    const handleAdd = async (album) => {
        await addAlbum(album);
        alert("Album added to your collection!");
    };

    return (
        <div>
            <Navbar />
            <div className="home-container">
                <SearchBar onSearch={handleSearch} />
                <SearchResults results={results} onAdd={handleAdd} />
            </div>
        </div>
    );
}