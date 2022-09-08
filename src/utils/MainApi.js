const baseUrl = 'https://api.felipsewindchaser.nomoredomains.sbs';

async function _checkResponse(response) {
  let data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw data;
  } 
}

export async function fetchPost(data, targetUrl = '') {
  let response = await fetch(`${baseUrl}/${targetUrl}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  })
  return _checkResponse(response);
}

export async function fetchPatch(data, targetUrl = '') {
    let response = await fetch(`${baseUrl}/${targetUrl}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(data)
      
  })
  return _checkResponse(response);
}

export async function fetchGet(targetUrl) {
  let response = await fetch(`${baseUrl}/${targetUrl}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  })
  return _checkResponse(response);
}

export async function checkToken() {
  let response = await fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return _checkResponse(response);
}

export async function fetchDelete(targetUrl = '') {
  let response = await fetch(`${baseUrl}/${targetUrl}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    credentials: 'include',
  })
  return _checkResponse(response);
}
