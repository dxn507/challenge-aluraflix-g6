const URL = "http://localhost:3000/categorias"; // 👈 IMPORTANTE

export async function getCategorias() {
const res = await fetch(URL);
return res.json();
}

export async function createCategoria(cat) {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cat)
  });

  return res.json();
}

export async function deleteCategoria(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE"
  });
}

export async function updateCategoria(id, categoria) {
  const res = await fetch(`URL/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(categoria)
  });

  return res.json();
}