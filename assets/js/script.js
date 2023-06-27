// Replace 'SHEET_ID' with your Google Sheet ID
const sheetId = '1B9fSq_IKIfa5-ABKtGunFh6tiqpTbGVYiWtX1pimafc';

// Replace 'API_KEY' with your Google Sheets API key
const apiKey = 'AIzaSyD2l5o2OuI7dV7SON80HaFYgpElVRYyDzo';

// Replace 'SHEET_NAME' with the name of the sheet containing the cell you want to fetch
const sheetName = 'Blad1';

function writeToGoogleSheets() {
    gapi.load('client', initClient);
  }
  
  function initClient() {
    gapi.client.init({
      apiKey: apiKey,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        writeDataToSheet();
      });
    });
  }
  
  function writeDataToSheet() {
    const number = document.getElementById('numberInput').value;
    
    gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: sheetName,
      valueInputOption: 'RAW',
      resource: {
        values: [[number]]
      }
    }).then(response => {
      console.log('Number written successfully: ', number);
    }, error => {
      console.error('Error writing number to Google Sheets: ', error.result.error.message);
    });
  }
  