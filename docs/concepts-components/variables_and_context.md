---
title: Variables & Context
sidebar_position: 3
---

## Variables:

Restel supports variables, which gives certain amount of dynamicity to the test definition in Restel, like referring to the request/response of some other request.

Variables are referred using `${&ltfully_qualified_variable_name&gt}`. The variables are supported in almost all the fields of test/scenario definitions. The evaluation of the value happens just before the execution of the respective tests.

## Context:

Context is a map of values maintained by Restel while the test is being executed,

Restel tracks all the requests and responses within the context.

The contexts can be referred using variables by giving the fully qualified name of what we are referring to.

For example, say we have an `Test Definition` `some_API` under the `Test Scenario` `some_scenario` and if the response of the API call is,

```
{
    "name" : "name of the user",
    "groups" : ["g1", "g2" ,"g3"]
}
```
- If we want to refer a field 'name' from the response of the api in some other test, we can refer it as `${some_scenario.some_API.response.name}`.

- If we want to refer to the first groups in the response, we can do it as `${some_scenario.some_API.response.groups[0]}`.