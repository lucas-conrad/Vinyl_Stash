export const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function searchDiscogs(query) {
    const res = await fetch(`${API_BASE_URL}/api/search?q=${query}`);
    return res.json();
}

export async function addAlbum(album){
    const res = await fetch(`${API_BASE_URL}/api/album`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(album)
    });
    return res.json();
}

export async function getCollection() {
    const res = await fetch(`${API_BASE_URL}/api/album`);
    return res.json();
}
