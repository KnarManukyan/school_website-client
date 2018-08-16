import {setStudentsArray} from './studentsAction'

export function unitedFetch (method,url,body, headerInput) {
  let headers = (headerInput ? headerInput
    : {'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.user
      })
  return dispatch =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api${url}`, {
      method: method,
      headers: headers,
      body:  JSON.stringify(body)
    })
    .then(response => {
       return response.json();
    })
    .catch(error => { console.log('request failed', error); });
}
