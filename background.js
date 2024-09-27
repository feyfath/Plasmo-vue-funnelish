let receivedData = null; // Store the data globally in the background script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CONTENT_TO_BACKGROUND") {
    receivedData = message.payload;  // Store the data sent from content script
    console.log("Received data from content script:", receivedData);
    sendResponse({ status: "Data received by background" });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_DATA_FROM_BACKGROUND") {
    sendResponse({ data: receivedData });  // Send the stored data to the popup
  }
});