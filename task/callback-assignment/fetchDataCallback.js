function fetchDataWithCallback(callback) {
  setTimeout(function() {
    try {
      // Simulate error (change to true/false)
      let error = false;  // set true to test error, false to test success

      if (error) {
        throw new Error("Fetch failed");
      }

      // Success case
      callback("Data fetched");

    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

// Example usage
fetchDataWithCallback(function(result) {
  console.log(result);
});
