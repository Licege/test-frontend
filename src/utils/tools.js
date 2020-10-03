import { BASE_URL } from '../api/config'

export function fetchClient(url, params) {
    return fetch(`${BASE_URL}${url}`, {
        method: params?.method || 'GET',
        body: params?.body ? JSON.stringify(params.body) : null
    })
        .then(response => response.json())
        .then(data => data)
        .catch(reason => console.log(reason))
}
