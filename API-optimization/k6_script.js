import http from 'k6/http';

import { check, sleep } from 'k6';

export const options = {
    vus: 3,
    duration: '1m',
};

export default function () {

  const urlRes = http.get('https://demo1.tech-n-code.com/1');

  sleep(1);

}

/**
 * CLI command to run on docker k6:
 * 
 * docker run --rm -i grafana/k6 run k6_script.js
 * 
 */