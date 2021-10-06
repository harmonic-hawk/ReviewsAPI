import http from 'k6/http';
import { sleep, check, group } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 1 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 500 },
    { duration: '10s', target: 50 },
  ],

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<200'],
  }
};

const SLEEP_DURATION = 1;

export default function() {
  group('app startup', () => {
    const max = 999999;
    const min = 1;
    const product_id = Math.round((Math.random() * (max - min)) + min);

    let getReviews = http.get('http://localhost:5000/reviews');
    check (getReviews, {
      'is status 200' : (r) => r.status === 200,
      'is duration < 250ms': (r) => r.timings.duration < 250,
    })
    sleep (SLEEP_DURATION);
  })
}