# getUrlParams Utility Function

## Description

The `getUrlParams` utility function extracts URL parameters, pathname, and host from a given URL string. It provides a convenient way to parse URL components and retrieve specific query parameters.

## Installation

You can install `getUrlParams` via npm:

```bash
npm install get-url-params
```

```javascript
import { getUrlParams } from "get-url-params";

const url = "https://example.com/page?param1=value1&param2=value2";
const searchParams = "param1"; // Specify the parameter you want to retrieve

const { urlParams, pathname, host } = getUrlParams(url, searchParams);

console.log("URL Parameters:", urlParams); // Output: value1
console.log("Pathname:", pathname); // Output: /page
console.log("Host:", host); // Output: example.com
```

## Return Value

An object containing:

- `url`: The original URL string.
- `urlParams`: The value of the specified parameter, or `null` if not found.
- `pathname`: The pathname of the URL.
- `host`: The host of the URL.
