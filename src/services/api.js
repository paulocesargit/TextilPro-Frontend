const API_URL = import.meta.env.VITE_API_URL;

export async function apiGet(endpoint) {
  const resposta = await fetch(`${API_URL}${endpoint}`);

  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`);
  }

  return resposta.json();
}

export async function apiPost(endpoint, dados) {
  const resposta = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`);
  }

  return resposta.status === 204 ? null : resposta.json();
}

export async function apiPut(endpoint, dados) {
  const resposta = await fetch(`${API_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`);
  }

  return resposta.status === 204 ? null : resposta.json();
}

export async function apiDelete(endpoint) {
  const resposta = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`);
  }
}
