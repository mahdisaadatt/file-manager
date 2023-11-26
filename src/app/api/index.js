const ENDPOINT = 'https://realestate-manager.iran.liara.run';

// Get property
export const getProperties = async () => {
  const res = await fetch(`${ENDPOINT}/property/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};

export const getSelectedPropertyType = async type => {
  const res = await fetch(`${ENDPOINT}/property/item/${type}/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};

export const getPropertyDetail = async (type, id) => {
  const res = await fetch(`${ENDPOINT}/property/${type}/${id}/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};

export const getUserProperties = async () => {
  const res = await fetch(`${ENDPOINT}/property/thisuser/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};

// Create property
export const createProperty = async (type, data) => {
  const res = await fetch(`${ENDPOINT}/property/${type}/`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};

// Delete property
export const deleteProperty = async (type, id) => {
  const res = await fetch(`${ENDPOINT}/property/delete/${type}/${id}/`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
    },
  });
  return res;
};
