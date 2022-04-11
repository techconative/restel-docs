---
title: Matchers
sidebar_position: 2
---

Matchers are for evaluating the response body/headers with the expected body/headers.

The below are the matchers available now and their purpose,

| Matcher Type | When to use
| :- | :- 
| NOOP_MATCHER | When you don't have to do any match.
| EXACT_MATCHER | When we have to ensure that the expected response is exactly same as the actual response. Though the order of values in JSON doesn't matter.
| PARTIAL_MATCHER | Checks if all the values in the expected responses is available in the actual response. Any other extra fields in the actual response will be ignored.
| SCHEMA_MATCHER | It evaluates if the actual api response matches with the Expected Json-Schema. Will match only for Json results with Response Content-Type : application/json. The Schema_matcher only supports schemas of Json-schema.org with specification of [Draft 2019-09](https://json-schema.org/specification-links.html#2019-09-formerly-known-as-draft-8) other lower version drafts(draft-07,draft-06, so ..) are not supported