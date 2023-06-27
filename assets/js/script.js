// Replace 'SHEET_ID' with your Google Sheet ID
const sheetId = '1B9fSq_IKIfa5-ABKtGunFh6tiqpTbGVYiWtX1pimafc';

// Replace 'API_KEY' with your Google Sheets API key
const apiKey = 'AIzaSyD2l5o2OuI7dV7SON80HaFYgpElVRYyDzo';

// Replace 'SHEET_NAME' with the name of the sheet containing the cell you want to fetch
const sheetName = 'Blad1';

// Replace 'CELL_RANGE' with the cell range you want to fetch (e.g., 'D2:D2')
const cellRange = 'D2:D2';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${cellRange}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const cellValue = data.values[0][0]; // Assuming the range contains only one cell

    // Display the cell value on the HTML page
    const cellElement = document.getElementById('cellValue');
    cellElement.textContent = cellValue;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });