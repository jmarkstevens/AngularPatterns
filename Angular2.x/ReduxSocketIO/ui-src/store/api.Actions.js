
const jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};
const uriFetchSet = 'http://localhost:3500/routes/setFetchData';
const uriFetchGet = 'http://localhost:3500/routes/getFetchData';
const uriFetchThunkSet = 'http://localhost:3500/routes/setFetchThunkData';
const uriFetchThunkGet = 'http://localhost:3500/routes/getFetchThunkData';
const uriXMLHttpSet = 'http://localhost:3500/routes/setXMLHttpData';
const uriXMLHttpGet = 'http://localhost:3500/routes/getXMLHttpData';

export function apiGetFetchData(uri = uriFetchGet) {
  return fetch(uri);
}

export function apiSetFetchData(data) {
  return fetch(uriFetchSet, {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}

export function apiGetFetchThunkData() {
  return (dispatch) => fetch(uriFetchThunkGet)
    .then((response) => response.json())
    .then((json) => dispatch({type: 'GetFetchThunkDataDone', payload: json}));
}

export function apiSetFetchThunkData(data) {
  return fetch(uriFetchThunkSet, {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)});
}

export function apiSetXMLHttpData(data, callback) {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState !== 4) { return; }

    if (xmlhttp.status === 200) {
      callback();
    } else { console.warn('error'); }
  };

  xmlhttp.open('POST', uriXMLHttpSet, true);
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xmlhttp.send(JSON.stringify(data));
  
}

export function apiGetXMLHttpData(callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState !== 4) { return; }

    if (request.status === 200) {
      callback(JSON.parse(request.responseText));
    } else { console.warn('error'); }
  };

  request.open('GET', uriXMLHttpGet);
  request.send();
}
