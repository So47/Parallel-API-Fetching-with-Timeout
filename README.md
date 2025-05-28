# Problem Description
You need to fetch data from multiple URLs concurrently and return the first successful response (i.e., status 200). If none succeed within a timeout period, return "timeout".

Assume a mock version of **fetch(url)** is provided — it returns a Promise that resolves or rejects randomly.


## Task
Implement this function:

```js
/**
 * @param {string[]} urls - Array of URLs to fetch from
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {Promise<string>} - First successful response body or "timeout"
 */
async function firstSuccessfulResponse(urls, timeoutMs) {
  // implement this
}
```

### Requirements:
- Fire all requests in parallel

- Return the first one that succeeds (status === 200)

- If none succeed before the timeout, return "timeout"

- If a request fails (non-200), skip it

- Use only standard Node.js (no axios, no external libraries)