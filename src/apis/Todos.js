import Base from './Base';

export default class Todos extends Base {
  static get path() {
    return 'todos';
  }

  static GET(id) {
    const base = `${Todos.apiBase}/${Todos.path}`;
    const requestURL = id ? `${base}/${id}` : base;
    return fetch(requestURL).then(res => res.json());
  }

  static POST(payload) {
    const requestURL = `${Todos.apiBase}/${Todos.path}`;
    return fetch(requestURL, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  // 本来はPATCH
  static PUT(id, payload) {
    return fetch(`${Todos.apiBase}/${Todos.path}/${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  static PATCH(id, payload) {
    return fetch(`${Todos.apiBase}/${Todos.path}/${id}`, {
      method: 'patch',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  static DELETE(id) {
    return fetch(`${Todos.apiBase}/${Todos.path}/${id}`, { method: 'delete' });
  }
}
