---
title: Variables & Context
sidebar_position: 3
---

## Variables:

Restel supports variables, which gives certain amount of dynamicity to the test definition in Restel, like referring to the request/response of some other request.

Variables are referred using `${<fully_qualified_variable_name>}`. The variables are supported in almost all the fields of test/scenario definitions. The evaluation of the value happens just before the execution of the respective tests.

Variables can be used to refer to the values from `Restel context map`.

## Params:

Params are nested maps of arbitrary keys-values that are passed form `suite_params` and `scenario_params`.

This can be used to parameterize values for the API tests and have it passed at the scenario/suite level.

### Overriding & Merging of params:

When a test api is getting executed, it'll have all the  params that are defined from its parent entities(Suite and Scenario).

As the params are getting merged, the keys defined in the parent params will be overridden by the child keys defined.
i.e., if the suite params and the scenario params both has the same key defined, the value in the scenario will be overridden by the value defined in the suite.

## Context:

To put simply context is a map of values maintained by Restel while the test is being executed.

During the execution of Test APIs, at a given moment, the context will contain the below values,

- The requests & responses of all the APIs of the scenarios that has been executed the framework so far, which can be accessed by variable 
`${<scenario_unique_name>.<test_api_name>.<request/response>}`
- The params passed from the scenario and the suite level, which can be accessed by variable `${<param_key>}` 
- The requests & responses of the APIs that has been executed in the current scenario, which can be accessed by variable 
`${<test_api_name>.<request/response>}` (note that the scenario name is optional in this case).

For example, say we have an `Test Definition` `some_API` under the `Test Scenario` `some_scenario` and if the response of the API call is,

```
{
    "name" : "name of the user",
    "groups" : ["g1", "g2" ,"g3"]
}
```
- If we want to refer a field 'name' from the response of the api in some other test, we can refer it as `${some_scenario.some_API.response.name}`.

- If we want to refer to the first groups in the response, we can do it as `${some_scenario.some_API.response.groups[0]}`.