---
title: Test modeling sheet structure
---

The input excel should be structured as following worksheets,

- *Base_Config:*  Contains global configs that are required for the test. 
- *Test_Suites:*  Logical grouping of similar test scenarios.
- *Test_Scenarios:* Contains the actual scenarios to be tested. This could make use of one or more APIs defined in the Test_Api_Definitions_.
- *Test_Api_Wrappers:* Contains the list of test wrappers for available API definitions. This allows customizing an API definition by passing **Restel Variables**.
- *Test_Api_Definitions:* Contains the list of Services API definitions for the Rest Application which needs to test.

## Base_Config:

Base_config sheet, should contain the basic necessary information on the Rest Application which needs to be tested . 
In the sheets the headers are sectioned in Rows . Each Row first Cell will be a header.

Below Table shows the list of headers, description, format and examples for better understanding.

| **Header Name**      | **Description**                                                                                                                      | **Format** | **Mandatory** | **Examples**                                                    |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :--------- | :------------ | :-------------------------------------------------------------- |
| **app\_name**        | Name to the Rest Application which needs to be Tested.                                                                               | String     | Optional      | PetStore Test Application                                       |
| **base\_url**        | The URL of the Rest Application which needs to test, should be in the format &ltprotocol&gt://&lthost&gt:&ltport&gt/&ltbase\_path&gt | String     | Mandatory     | &lthttps://petstore.swagger.io/v2&gt                            |
| **default\_headers** | Default headers which will be added to each of the RestAPI request headers which need to be tested. Should be Json format .          | Json       | Optional      | {"Content-Type":"application/json","Accept":"application/json"} |

---

## Test_Suite:

Represents the list of suites that are part of the test.

| **Header Name**         | **Description**                                                                                                                                         | **Format**             | **Mandatory** | **Examples**                                        |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------- | :------------ | :-------------------------------------------------- |
| **suite\_unique\_name** | Name of the Test Suite should be unique. Duplicate names should not exist.                                                                              | String                 | Mandatory     | user\_service\_suite                                |
| **suite\_description**  | Description about the Test suite                                                                                                                        | String                 | Optional      | Suite to evaluate a positive flow of user\_service. |
| **depends\_on**         | Sometimes other Test Suite needs to execute first before the current Test Suite. Name of the Test Suite from *suite\_unique\_name* which it depends on. | Comma Separated String | Optional      | user\_registration\_suite,user\_validation\_suite   |
| **suite\_params**       | Parameters thats need to be passed into the Test Suite APIs                                                                                             | Json                   | Optional      | {"user":"John"}                                     |
| **suite\_enable**       | To enable or disable invocations of APIs for the current suite. Default : TRUE.                                                                         | Boolean                | Optional      | TRUE                                                |

---

## Test_Scenarios:
This represents the logical grouping of similar scenarios.

| **Header Name**             | **Description**                                                                                                                                                                                                                                                                     | **Format**             | **Mandatory** | **Examples**                                             |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------ | :------------------------------------------------------- |
| **scenario\_unique\_name**  | Name of the Test Suite Execution. Should be unique. Duplicate names should not exist.                                                                                                                                                                                               | String                 | Mandatory     | get\_user\_exec                                          |
| **scenario_description**    | The **"description"** of the test scenario to communicate the details to the users and to be logged in the report.                                                                                                                                                                  | String                 | Optional      | Scenario to test if the user fetch fails after deletion. |
| **test\_suite**             | The **"suite\_unique\_name"** field value read from the Test\_Suite sheets. Need to define that the test execution belongs to which test suite. Eg: *user\_service\_suite.*   This test suite execution belongs to a test suite with suite\_unique\_name as ‘user\_service\_suite’. | String                 | Mandatory     | user\_service\_suite                                     |
| **test\_apis**              | Comma seperated values of the wrapper/APIs to be executed, in order. **"case\_unique\_name"** field value from *test\_definition* sheet or **"test_api_wrapper_name"** field from *Test_Api_Wrappers* sheet.                                                                            | String                 | Mandatory     | get\_user                                                |
| **depends\_on**             | Sometimes other Test Scenario Execution should be invoked before current Test Suite Execution. Name of the *case\_unique\_name* which should execute first before executing the current Test Suite Execution.                                                                       | Comma separated String | Optional      | create\_user\_exec                                       |
| **test\_execution\_params** | Parameters to be included to the current Test suite execution                                                                                                                                                                                                                       | Json                   | Optional      | {"user\_name" : "vivek"}                                 |
| **test\_execution\_enable** | To enable or disable invocations of test suite execution . Default : TRUE.                                                                                                                                                                                                          | Boolean                | Optional      | TRUE                                                     |

---

## Test_Api_Wrappers :

**Optional sheet**.
This represents test wrappers for APIs that can utilise *Restel variables* when being called and tested. Intended to pass API specific parameters and avoid duplicating APIs. The columns and the meaning of the columns in the sheet is as below,


| **Header Name**                  | **Description**                                                                                                                 | **format** | **Mandatory** | **Example**                                                                                                                   |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **test_api_wrapper_name**        | Name of the Test Wrapper. Should be unique, duplicates should not exist.                                                        | String     | Mandatory     | read_entry_500                                                                                                                |
| **test_api_wrapper_description** | Description about the test wrapper.                                                                                             | String     | Optional      | User retrieval failed                                                                                                         |
| **test_api_wrapper_parameters**  | Test specific parameters that can be used within the wrapped test.                                                              | String     | Optional      | { "expected_read_status_code": "500", "read_expected_response":{"message":"Cannot read properties of null (reading '_id')"} } |
| **test_api_name**                | Name of the test being wrapped. Must match exactly one test name (*api\_unique\_name*) defined in *Test_Api_Definitions* sheet. | String     | Mandatory     | read_entry                                                                                                                    |

---

## Test_Api_Definitions :

This represents rudimentary APIs that will be called and tested. The columns and the meaning of the columns in the sheet is as below,


| **Header Name**                 | **Description**                                                                                                                                                                                                                  | **format**                                              | **Mandatory** | **Example**                                                     |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :------------ | :-------------------------------------------------------------- |
| **api\_unique\_name**           | Name of the Test Case Definition. Should be unique, duplicate names should not exist.                                                                                                                                            | String                                                  | Mandatory     | create\_user                                                    |
| **depends\_on**                 | Sometimes other Test\_definitions need to be executed before executing the current Test\_definition. Includes another case\_unique\_name which needs to be executed first.                                                       | Comma separated strings                                 | optional      | get\_user,login\_user                                           |
| **api\_description**            | Description about the Test\_definition                                                                                                                                                                                           | String                                                  | optional      | API for fetching the information of all users.                  |
| **request\_url**                | Endpoint of the Rest API. Supports Restel variables.                                                                                                                                                                             | String                                                  | Mandatory     | /user                                                           |
| **request\_method**             | Endpoint Http Method. Should be one of HTTP Methods                                                                                                                                                                              | String                                                  | Mandatory     | POST                                                            |
| **request\_headers**            | Endpoint Http Request Headers                                                                                                                                                                                                    | Json                                                    | Optional      | {"Content-Type":"application/json","Accept":"application/json"} |
| **request\_query\_params**      | Query parameters for this endpoint                                                                                                                                                                                               | Json                                                    | Optional      | {"user:"Tom","index":2}                                         |
| **request\_body\_params**       | Endpoint Body parameters. Format can be json or String. Provide the appropriate Content-Type in the request\_headers. Supports Restel variables.                                                                                 | Json / String                                           | Optional      | {"id": 1,"email": "noreply@gmail.com","phone": "99999999999"}   |
| **request\_pre\_call\_hook**    | Middlewares on request before api call like authentications, etc.                                                                                                                                                                | Json                                                    | optional      | {}                                                              |
| **request\_post\_call\_hook**   | Middlewares on request after api call like writing response to file,etc                                                                                                                                                          | Json                                                    | optional      | {}                                                              |
| **expected\_response**          | The API call response body to be expected, Will evaluate expected response body with the actual api call response body. Should provide the appropriate response content-type in the response headers. Supports Restel variables. | Json/String                                             | Optional      | { "id": 1,"email": "noreply@gmail.com","phone": "99999999999"}  |
| **expected\_response\_matcher** | Evaluation technique names. Will evaluate the api response body with expected\_response body. Should be one of the enums [NOOP\_MATCHER,EXACT\_MATCHER,PARTIAL\_MATCHER]                                                         | Enum of [NOOP\_MATCHER,EXACT\_MATCHER,PARTIAL\_MATCHER] | Mandatory     | EXACT\_MATCHER                                                  |
| **expected\_header**            | The API call response headers to be expected.Will evaluate expected response header with the actual api call response header.                                                                                                    | Json                                                    | Optional      | {"Content-Type":"application/json","Server":"Jetty"}            |
| **expected\_header\_matcher**   | Evaluation technique names.  Will evaluate the api response header with expected\_response header. should be one of the enums [NOOP\_MATCHER,EXACT\_MATCHER,PARTIAL\_MATCHER]                                                    | Enum of [NOOP\_MATCHER,EXACT\_MATCHER,PARTIAL\_MATCHER] | Mandatory     | NOOP\_MATCHER                                                   |
| **accepted\_status\_code**      | To validate/check if the api call status code is within the one of the accepted\_status\_code. Should be one or list of status codes. Supports Restel variables.                                                                 | Comma separated values                                  | Mandatory     | 201                                                             |
| **Tags**                        | Can give tags to Test\_Definition.                                                                                                                                                                                               | Comma separated String                                  | Optional      | UserService                                                     |

---