const firstSuccessfulResponse = require('./parallel_api_fetching');

// Test cases
async function runTests() {
  const urls = [
    "http://api.service1.com/data",
    "http://api.service2.com/data",
    "http://api.service3.com/data"
  ];

  console.log("Running test with timeout 1000ms...");
  const result1 = await firstSuccessfulResponse(urls, 1000);
  console.log("Result:", result1);

  console.log("Running test with timeout 100ms (likely timeout)...");
  const result2 = await firstSuccessfulResponse(urls, 100);
  console.log("Result:", result2);
}

runTests().catch(console.error);
