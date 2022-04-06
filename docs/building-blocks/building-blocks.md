The below are some of terms that defined and used within Restel,

## Test Definition: 

Represents a single APIs that has to be called (and tested).

## Test Scenarios:

Scenarios that are to be tested, typically making use of one or more Test Definitions.

## Test Suite:

Logical collection of Test scenarios.

## Restel Expression:

Anything valid expression that is understandable and executed by Restel framework, will be in the format of `${}`.

## Test Context Map:

Restel tracks the request and responses of the tests that has happened as a Map. This can be referred within tests, when we need to refer to values from other tests that has been executed.

## Variables:

Restel supports variables, which gives certain amount of dynamicity to the test definition in Restel, like referring to the request/response of some other request.

Variables are referred using `${<fully_qualified_variable_name>}`. The variables are supported in almost all the fields of test/scenario definitions. The evaluation of the value happens just before the execution of the respective tests.

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

## Middlewares:

Middlewares are the components that serves the condition of ensuring the pre- and post-conditions when the test happens. For example, the middleware `Oauth2ClientCredentialMiddleware` will take care of authenticating against the configured Oath server when the token has expired.

## Matchers:

Matchers can be considered as predicates that does a check if the API response is matching with expected response based on the matchers chosen. For ex, `PARTIAL_MATCHER` checks if all the key values in the expected response is available in the actual response. Any other attributes in the actual response beyond that will be ignored.