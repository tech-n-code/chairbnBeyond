import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  
  stages: [
    { duration: '10s', target: 100 }, // Stage 1: 100 VUs for 10s
    { duration: '30s', target: 500 }, // Stage 2: Ramp-up to 500 VUs over 30s
    { duration: '10s', target: 100 }, // Stage 3: 100 VUs for 10s
    { duration: '10s', target: 0 }, // Stage 4: Ramp-down to 0 VUs over 10s
  ],

  thresholds: {
    http_req_duration: ['p(90) < 500'], // Latency -- Can 90% of requests take less than 500ms?
    'http_reqs{method: "GET"}': ['rate >= 90'], // Throughput -- can it handle 90 RPS or more?
    http_req_failed: ['rate < 0.5'], // Availability (error rate) -- 99.5% of time available (error rate less than 0.5%)
  },

};

export default function () {
  const baseURL = 'http://192.168.1.111';
  // const baseURL = 'http://localhost';
  const listingId = 1;

  const endpoints = [
    `${baseURL}:3050/api/title/${listingId}`, //3050
    `${baseURL}:3010/api/gallery/photo_url/${listingId}`, //3010
    `${baseURL}:3003/api/about/${listingId}`, //3003
    `${baseURL}:3002/api/amenities/${listingId}`, //3002
    `${baseURL}:3002/api/amenities/ten/${listingId}`, //3002
    `${baseURL}:4001/api/users/${listingId}`, //4001
    `${baseURL}:4001/api/hosts/about/${listingId}`, //4001
    `${baseURL}:4001/api/hosts/photo/${listingId}`, //4001
    `${baseURL}:3005/api/reviews/${listingId}`, //3005
    `${baseURL}:4000/api/location/${listingId}`, //4000
    `${baseURL}:4000/api/location/description/${listingId}`, //4000
  ];

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  for (const endpoint of endpoints) {
    const res = http.get(endpoint, { headers });

    check(res, {
      'Status 200': (r) => r.status === 200,
    });

  }

  sleep(1);
};

/**
 * To test against single API server on local network
 * Server-1: 192.168.1.167
 * Server-2: 192.168.1.111
 * 
 * CLI command...
 * k6 run k6_script-local.js
 */