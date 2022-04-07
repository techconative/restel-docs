Matchers are for evaluating the response body/headers with the expected body/headers.

Different Types of Matcher:

- NOOP_MATCHER
- EXACT_MATCHER
- PARTIAL_MATCHER
- SCHEMA_MATCHER


| Matcher Type | When to use
| :- | :- 
| NOOP_MATCHER | It does not evaluate anything and allows the Service API Test to pass.
| EXACT_MATCHER | It evaluates that the expected and actual result values are exact or not.
| PARTIAL_MATCHER | It evaluates if the expected results partial matches with the actual result. Will match only for Json results with Response Content-Type : application/json.
| SCHEMA_MATCHER | It evaluates if the actual api response matches with the Expected Json-Schema. Will match only for Json results with Response Content-Type : application/json. The Schema_matcher only supports schemas of Json-schema.org with specification of https://json-schema.org/specification-links.html#2019-09-formerly-known-as-draft-8[Draft 2019-09] other lower version drafts(draft-07,draft-06, so ..) are not supported