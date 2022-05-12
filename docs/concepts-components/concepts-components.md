---
title: Concepts & Components
sidebar_position: 1
---

The below are the building blocks of Restel.

## Test APIs/Cases: 

Represents a single APIs that has to be called (and tested).

## Test Wrapper:

Represents a wrapper for a Test API. Intended to pass API specific **Restel Variables** to customise the API's expected response, status code, etc.

In the context of *Test Scenario*, wrappers can be used interchangeably with Test APIs. We go with wrappers when we have to pass different set of parameters for the same Test APIs hence performing different set of tests using the same API.

## Test Scenarios:

Scenarios that are to be tested, typically making use of one or more Test APIs or Test wrappers.

## Test Suite:

Logical collection of related Test scenarios.

## Restel Variables:

Any valid expression that is understandable and executed by Restel framework, will be in the format of `${}`.
This will be resolved by Restel before the execution of the respective API.

> More details available [here](variables_and_context#variables).

## Restel Context Map:

In simple terms, this is a map containing the request, responses and other details that Restel keeps tracks of and stores as the API tests are getting executed.

> More details can be found [here](variables_and_context#context).

## Middlewares:

Middlewares are the components that serves the condition of ensuring the pre- and post-conditions when the test happens. For example, the middleware `Oauth2ClientCredentialMiddleware` will take care of authenticating against the configured Oath server when the token has expired.

## Matchers:

Matchers can be considered as predicates that does a check if the API response is matching with expected response based on the matchers chosen. For ex, `PARTIAL_MATCHER` checks if all the key values in the expected response is available in the actual response. Any other attributes in the actual response beyond that will be ignored.