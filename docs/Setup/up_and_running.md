---
title: Up & Running
sidebar_position: 1
---
## Pre-requisite:

### For Mac/Linux:

- Java-11
- Make file support

### For systems where the given Makefile doesn't work:

Please install the following dependencies manually

- Java-11
- [Allure](https://docs.qameta.io/allure/#_installing_a_commandline)

## Configuring excel:

Sample configuration sheet is available [here](quickstart/jsonbox_test.xlsx).

## Setup :

```
make setup
```

If the above command doesn't work, you will have to install the aforementioned pre-requisites manually.

## Run:

### To Run from an IDE :

Define an environmental variable *RESTEL_APP_FILE* to the spreadsheet file path.
Once the spreadsheet file path is configured, run the main class `RestelApplication` to run the tests from excel.

### To Run from scripts :

*Inputs* : Restel excel file

*Command to run* :

`sh scripts/run.sh  <excel file path>.`

This script will install allure-commandline to view the reports in browser and give your restel excel file as input

eg:  `sh scripts/run.sh  quickstart/jsonbox_test.xlsx`