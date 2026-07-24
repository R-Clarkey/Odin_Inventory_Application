#! /usr/bin/env node
const { loadEnvFile } = require('node:process');
loadEnvFile('.env');
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS test (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  testing VARCHAR ( 255 )
);

INSERT INTO test (testing) 
VALUES
  ('one'),
  ('two'),
  ('three');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
