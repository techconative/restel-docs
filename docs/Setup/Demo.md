---
title: Demo
sidebar_position: 2
---

The below steps would help you get a feel of Restel by running a demo server and test it with a pre-written excel file.

## Pre-requisite

- Docker
- [JsonBox](https://github.com/vasanthv/jsonbox)

> Jsonbox, if started with docker compose, will run mongo. If facing issues, run mongo manually and start Jsonbox with `npm start`

## Quickstart

You can edit [the sample sheet](https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx) under *quickstart* directory to play around with the tests being executed.

#### *nix

1. Go to the root folder of the project and run `make setup` to install the dependencies for reporting in your machine.
2. Checkout [Jsonbox](https://github.com/vasanthv/jsonbox) and start the server by running `docker-compose up`.
3. To execute the test, go to the home folder and run, `make demo-run`.

#### Windows 

1. Refer [Setup section](up_and_running#for-windows-and-systems-where-the-given-makefile-doesnt-work) on steps to manually setup dependencies.
2. Checkout [Jsonbox](https://github.com/vasanthv/jsonbox) by running `docker-compose up`
3. To execute the test, go to the home directory and run,
```
.\scripts\run.bat quickstart\jsonbox_test.xlsx
```

> If facing issues with *docker-compose*, start *mongo* server locally and run `npm start` from within *Jsonbox* repository.