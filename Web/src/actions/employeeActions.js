import fetch from 'isomorphic-fetch';

export function fetchEmployees() {
    return fetch('http://localhost:54598/api/employees/', {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchEmployee(id) {
    return fetch('http://localhost:54598/api/employees/' + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function createEmployee(data) {
    return fetch('http://localhost:54598/api/employees/', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateEmployee(id, data) {
    return fetch('http://localhost:54598/api/employees/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteEmployee(id) {
    return fetch('http://localhost:54598/api/employees/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}