---
title: Up & Running
sidebar_position: 1
---
## Pre-requisite:

### For Mac/Linux:

- Java-11
- Make file support

### For Windows and systems where the given Makefile doesn't work:

Please install the following dependencies manually

- Java-11
- [Allure](https://docs.qameta.io/allure/#_installing_a_commandline)

Windows users can install allure using scoop:

```
scoop install allure
```

## Configuring excel:

Sample configuration sheet is available [here](https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx).

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

*nix:

`sh scripts/run.sh  <excel file path>.`

Windows:

`.\scripts\run.bat <excel file path>`

This script when given your restel excel file as input will run the tests and use `allure` CLI tool to generate and display the reports in a browser. e.g.,:

*nix: `sh scripts/run.sh  quickstart/jsonbox_test.xlsx`

Windows: `.\scripts\run.bat quickstart\jsonbox_test.xlsx`
