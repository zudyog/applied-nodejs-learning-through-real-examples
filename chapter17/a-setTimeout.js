function sendNotification(update) {
    console.log("Stock Update: ", update);
}

setTimeout(() => sendNotification('AAPL stock price went up by 2%'), 2000);