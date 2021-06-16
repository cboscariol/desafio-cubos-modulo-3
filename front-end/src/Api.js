
async function post(resource, data, token) {
  const headers = {
    'Content-type': 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const resposta = await fetch('https://desafio-m03.herokuapp.com' + resource, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  });

  return resposta.json();
}

async function get(resource, token) {
  const headers = {}

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const resposta = await fetch('https://desafio-m03.herokuapp.com' + resource, {
    headers
  });

  return resposta.json();
}

async function del(resource, token) {
  const headers = {}

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const resposta = await fetch('https://desafio-m03.herokuapp.com' + resource, {
    method: 'DELETE',
    headers,
  });

  return resposta.json();
}

async function put(resource, data, token) {
  const headers = {
    'Content-type': 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const resposta = await fetch('https://desafio-m03.herokuapp.com' + resource, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers,
  });

  return resposta.json();
}

export { post, get, del, put };