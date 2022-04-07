
The ultimate goal of automation or any testing is to assert the response of the system on various conditions or parameters. Restel's Assertions are defined to validate if the request or response payload has the fields value that we are expecting. For example, If we are passing the payload of one test API to another Test API and want to check if the payload has the fields that we are expecting, in such case restel assertion can be used.

Restel's Assertion can be defined in the ***assertion*** field of the test suite execution sheet. Assertions are validated before invoking the test API call.

```
{  
   "<Assertion_name>": 
   {
	“condition”:[“assert_type”
	"<actual_value>",
	"<expected_value>"],
        “message”: “”	
   }
}
```
The following are assertion type that are supported at this moment:
- EQUAL, 
- GREATER, 
- LESSER, 
- NULL,
- NOT_NULL, 
- NOT_EQUAL, 
- TRUE, 
- FALSE

| Assert-Type | Example
| :- | :- 
|*EQUAL or NOT\_EQUAL*|{ "Assert1": {"condition": ["equal","${user\_exec.user\_api.response[0].name}","Tom"],"message": "Validation success"}}|
|*NULL or NOT\_NULL*|{ "Assert2": {"condition": ["not\_null","${user\_exec.user\_api.response[0].id}"],"message": "Validation success"}}|
|*GREATER or LESSER*|{ "Assert1": {"condition": ["greater","${user\_exec.user\_api.response[0].id}","20"],"message": "Validation success"}}|
|*TRUE or FALSE*|{ "Assert2": {"condition": ["true","${user\_exec.user\_api.response[0].isAdmin}"],"message": "Validation success"}}|