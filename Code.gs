// Google Apps Script: receives form submissions and appends them to the Sheet.
const HEADERS = ['submitted','name','phone','reception','receptionist','infrastructure',
  'staff','doctor','explained','painless','tolerable','postcare','advice','overall','comments'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const d = JSON.parse(e.postData.contents);
  sheet.appendRow(HEADERS.map(h => d[h] || ''));
  return ContentService.createTextOutput('ok');
}
