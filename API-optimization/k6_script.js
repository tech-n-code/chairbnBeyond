import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    // duration: '10s',
    iterations: 1,
};

export default function () {
  // const baseURL = 'https://192.168.1.167/api'; //will need the port for each route coded-in
  // const baseURL = 'https://demo1.tech-n-code.com/api';

  // const baseURL = 'http://192.168.1.111/api'; //will need the port for each route coded-in
  // const baseURL = 'https://demo2.tech-n-code.com/api';

  // const baseURL = 'http://192.168.1.238/api'; //will need to change upstream server on nginx.conf 
  const baseURL = 'https://demo3.tech-n-code.com/api';
  
  const listingId = 1;

  const endpoints = [
    `/title/${listingId}`, //3050
    `/gallery/photo_url/${listingId}`, //3010
    `/about/${listingId}`, //3003
    `/amenities/${listingId}`, //3002
    `/amenities/ten/${listingId}`, //3002
    `/users/${listingId}`, //4001
    `/hosts/about/${listingId}`, //4001
    `/hosts/photo/${listingId}`, //4001
    `/reviews/${listingId}`, //3005
    `/location/${listingId}`, //4000
    `/location/description/${listingId}`, //4000
  ];

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  for (const endpoint of endpoints) {
    const url = `${baseURL}${endpoint}`;
    const res = http.get(url, { headers });

    // console.log('Status code:', res.status);
    // console.log('Response body:', res.body);
  
    sleep(1);
  }
}

/**
 * CLI command...
 * 
 * k6 run k6_script.js
 * 
 */