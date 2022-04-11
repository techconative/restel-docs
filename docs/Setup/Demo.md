---
title: Demo
sidebar_position: 2
---

The below steps would help you run a demo server and executed tests against it with a pre-written test spreadsheet.

## Pre-requisite:

- Unix/linux/Mac environment (Sorry at the moment, you will have to install the dependencies manually in windows).
- Docker.

## Quickstart:

- Go to the root folder of the project and run `make setup` to install the dependencies for reporting in your machine.
- Checkout [Jsonbox](https://github.com/vasanthv/jsonbox) and start the server by running `docker-compose up`.
- To execute the test, go to the home folder and run, `make demo-run`. You can edit [the sample sheet](https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx) to play around with the tests.