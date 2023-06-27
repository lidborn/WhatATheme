// Replace 'SHEET_ID' with your Google Sheet ID
const sheetId = '1B9fSq_IKIfa5-ABKtGunFh6tiqpTbGVYiWtX1pimafc';

// Replace 'API_KEY' with your Google Sheets API key
const apiKey = 'AIzaSyD2l5o2OuI7dV7SON80HaFYgpElVRYyDzo';

// Replace 'SHEET_NAME' with the name of the sheet containing the cell you want to fetch
const sheetName = 'Blad1';

// Replace 'CELL_RANGE' with the cell range you want to fetch (e.g., 'D2:D2')


// Function to write cell value to a Google Sheet
function writeCellValue(sheetId, sheetName, cell, value) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${cell}?valueInputOption=USER_ENTERED&key=${apiKey}`;

  const payload = {
    values: [value],
  };

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

// Function to fetch cell value from a Google Sheet
async function fetchCellValue(sheetId, sheetName, cell) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${cell}?key=${apiKey}`;

  const response = await fetch(url);
    const data = await response.json();
    const cellValue = data.values[0][0]; // Assuming the range contains only one cell
    return cellValue;
}

// Function to handle the button click and write the value to the sheet
function writeToSheet() {
    inputValue = document.getElementById('inputValue').value;

  // Write the user input value to cell C2
  writeCellValue(sheetId, sheetName, 'C2', inputValue)
    .then(() => {
      console.log('Value written successfully.');

      // Fetch the value from cell D2
      fetchCellValue(sheetId, sheetName, 'D2')
        .then(cellValue => {
          console.log('Fetched value:', cellValue);
        })
        .catch(error => {
          console.error('Error fetching cell value:', error);
        });
    })
    .catch(error => {
      console.error('Error writing value:', error);
    });
}
