import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };
    return (
        <form onSubmit={submit} className="search-bar">
            <input
                type="text"
                placeholder="Search for albums or artists..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
}