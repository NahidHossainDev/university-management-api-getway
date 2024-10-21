import { createClient } from 'redis';
import config from '../config';

let redisClient = createClient({
  url: config.redisURL
});

redisClient.on('connect', (err) => console.log('Redis Error', err));
redisClient.on('connect', () => console.log('Redis connected'));

const connect = async () => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
