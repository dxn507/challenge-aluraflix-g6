const URL = "http://localhost:3000/videos";

export async function getVideos() {
const res = await fetch(URL);
return res.json();
}

export async function createVideo(video) {
const res = await fetch(URL, {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(video)
});
return res.json();
}

export async function updateVideo(id, video) {
const res = await fetch(`${URL}/${id}`, {
method: "PUT",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(video)
});
return res.json();
}

export async function deleteVideo(id) {
await fetch(`${URL}/${id}`, { method: "DELETE" });
}