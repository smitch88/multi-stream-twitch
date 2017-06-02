import fetch from 'isomorphic-fetch';
import {
  GOOGLE_URL_SHORTENER_API_KEY,
  TWITCH_API_KEY
} from './secrets';

export const REQUEST_TIMEOUT_MS = 30000;

export function timedRequest(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request Timeout'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
   );
  });
}

const _checkStatus = (response) => {
  const status = response.status;
  if(status >= 200 && status < 300) {
    return response[status == 204 ? "text" : "json"](); // eslint-disable-line eqeqeq
  } else if(status === 401){
    throw new Error('Unauthorized');
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error
  }
}

export function request(url, options) {
  return new Promise((resolve, reject) => {
    if (!url) reject(new Error('Request url is a required field'));
    if (!options) reject(new Error('Request options is a required field'));
    const reqOptions = {
      mode: 'cors',
      ...options
    };
    timedRequest(REQUEST_TIMEOUT_MS, fetch(url, reqOptions))
      .then(_checkStatus)
      .then(resolve)
      .catch((error) => {
        console.warn(error);
        reject(error);
      })
  });
}

export function* twitchRequest(url, requestParams) {
  let requestHeaders = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': TWITCH_API_KEY
    }
  };
  if(requestParams){
    requestHeaders.body = JSON.stringify(requestParams);
    requestHeaders.headers['Content-Type'] = 'application/json';
  }
  return yield request(url, requestHeaders);
}

export function* googleShortenerRequest(url, data) {
  const requestHeaders = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return yield request(`${url}?key=${GOOGLE_URL_SHORTENER_API_KEY}`, requestHeaders);
}
