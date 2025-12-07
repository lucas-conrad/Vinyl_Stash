import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkSession } from "../services/api.js";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import { searchDiscogs, addAlbum } from "../services/api.js";
import {API_BASE_URL} from "../services/api.js";

export default function Home() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function verify() {
            const session = await checkSession();
            if (!session.loggedIn) {
                navigate("/login");
            }
        }
        verify();
    }, [navigate]);

    const handleSearch = async (query) => {
        const res = await fetch (`${API_BASE_URL}/search?q=${query}`);
        const data = await searchDiscogs(query);
        setResults(data);
    };

    const handleAdd = async (album) => {
        await addAlbum(album);
        alert("Album added to your collection!");
    };

    return (
        <>
            <Navbar />
            <div className="page-container">
                <SearchBar onSearch={handleSearch} />
                <SearchResults results={results} onAdd={handleAdd} />
            </div>
        </>
    );
}