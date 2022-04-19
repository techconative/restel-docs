---
title: Demo
sidebar_position: 2
---

The below steps would help you run a demo server and executed tests against it with a pre-written test spreadsheet.

## Pre-requisite:

- Docker
- [JsonBox](https://github.com/vasanthv/jsonbox)

> Jsonbox, if started with docker compose, will run mongo. If facing issues, run mongo manually and start Jsonbox with `npm start`

## Quickstart:

### *nix users:

1. Go to the root folder of the project and run `make setup` to install the dependencies for reporting in your machine.
2. Checkout [Jsonbox](https://github.com/vasanthv/jsonbox) and start the server by running `docker-compose up`.
3. To execute the test, go to the home folder and run, `make demo-run`. You can edit [the sample sheet](https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx) to play around with the tests.

> Windows users can refer [Setup section](up_and_running#for-windows-and-systems-where-the-given-makefile-doesnt-work) on how to manually setup dependencies and run tests using the batch script under `scripts` directory.