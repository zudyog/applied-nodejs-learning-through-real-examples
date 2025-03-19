function fetchData(callback) {
    // Simulate a delay like fetching data over the network
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}
function processData(data) {
    console.log(data);
}
fetchData(processData);