import express from "express";
import * as redis from "redis";
const PORT = process.env.PORT || 4052;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT); // create the master client connection to Redis

await client.connect(); // connect to Redis

const app = express(); // create the server instance

async function setSomething (req, res, next) {
    await client.set('Redis_test_key', 'Redis_test_value');
    res.send('Redis_test_key set to Redis_test_value');
}

app.get('/calendars/addRedis', setSomething); // create a route for the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});