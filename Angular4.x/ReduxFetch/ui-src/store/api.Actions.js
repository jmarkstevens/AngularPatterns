import 'whatwg-fetch';

let jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export function apiSetData1(data) {
  return (dispatch) => {
    fetch('/routes/setData1', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)})
      .then(() => {
        fetch('/routes/getData1')
          .then((response) => response.json())
          .then((json) => dispatch({type: 'GetData1Done', payload: json}));
      });
  };
}

export function apiSetData2(data) {
  return (dispatch) => {
    fetch('/routes/setData2', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)})
      .then(() => {
        fetch('/routes/getData2')
          .then((response) => response.json())
          .then((json) => dispatch({type: 'GetData2Done', payload: json}));
      });
  };
}
