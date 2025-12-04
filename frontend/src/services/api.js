const API_BASE_URL = "http://localhost:5000/api";

export async function searchDiscogs(query) {
    const res = await fetch(`${API_BASE_URL}/search?q=${query}`);
    return res.json();
}

export async function addAlbum(albunm){
    const res = await fetch(`${API_BASE_URL}/albums`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
    });
    return res.json();
}

export async function getCollection() {
    const res = await fetch(`${API_BASE_URL}/albums`);
    return res.json();
}