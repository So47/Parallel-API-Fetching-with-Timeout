
// Mocked fetch function (simulate random success/failure)
function fetch(url) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.3; // 70% chance success
    const delay = Math.floor(Math.random() * 500);

    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          text: () => Promise.resolve(`Response from ${url}`)
        });
      } else {
        reject(new Error('Fetch failed'));
      }
    }, delay);
  });
}

/**
 * @param {string[]} urls - Array of URLs to fetch from
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {Promise<string>} - First successful response body or "timeout"
 */
async function firstSuccessfulResponse(urls, timeoutMs) {
  // Create a promise that rejects after timeoutMs
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => resolve("timeout"), timeoutMs);
  });

  // Wrap fetch calls: resolve with text if 200, else reject
  const fetchPromises = urls.map(url =>
    fetch(url)
      .then(res => {
        if (res.status === 200) return res.text();
        else return Promise.reject('Non-200 status');
      }).catch((err) => Promise.reject(err)) // Propagate fetch errors as rejections

  );

  // wait for the first fulfilled promise or reject if all fail
  const firstSuccess = Promise.any(fetchPromises);
  return Promise.race([firstSuccess, timeoutPromise])
}

// Export for testing
module.exports = firstSuccessfulResponse;