import { BASE_URL } from '../api/config'

export function fetchClient(url, params) {
    return fetch(`${BASE_URL}${url}`, {
        method: params?.method || 'GET',
        body: params?.body ? JSON.stringify(params.body) : null,
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()
        .then(data => ({
            status: response.status,
            headers: response.headers,
            ok: response.ok,
            data,
        })))
        .catch(reason => console.log(reason))
}

export function formQuery(data) {
    let query = ''
    Object.keys(data).forEach(key => {
        query += `${key}=${data[key]}&`
    })
    return query.length ? `?${query}`.substring(0, query.length) : ''
}
