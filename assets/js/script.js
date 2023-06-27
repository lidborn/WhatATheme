

// Replace 'SHEET_ID' with your Google Sheet ID
const sheetId = '1B9fSq_IKIfa5-ABKtGunFh6tiqpTbGVYiWtX1pimafc';

// Replace 'API_KEY' with your Google Sheets API key
const apiKey = 'AIzaSyD2l5o2OuI7dV7SON80HaFYgpElVRYyDzo';

// Replace 'SHEET_NAME' with the name of the sheet containing the cell you want to fetch
const sheetName = 'Blad1';


/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '1058063014429-pbua0n1osqlu3sg66nlk0b0e55bojabt.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD2l5o2OuI7dV7SON80HaFYgpElVRYyDzo';


// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/contacts.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;

document.getElementById('authorize_button').style.visibility = 'hidden';
document.getElementById('signout_button').style.visibility = 'hidden';

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    document.getElementById('signout_button').style.visibility = 'visible';
    document.getElementById('authorize_button').innerText = 'Refresh';
    await listConnectionNames();
    await getMember();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({prompt: 'consent'});
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({prompt: ''});
  }
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
    document.getElementById('content').innerText = '';
    document.getElementById('authorize_button').innerText = 'Authorize';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }
}

/**
 * Print the display name if available for 10 connections.
 */
async function listConnectionNames() {
  let response;
  try {
    // Fetch first 10 files
    response = await gapi.client.people.people.connections.list({
      'resourceName': 'people/me',
      'pageSize': 10,
      'personFields': 'names,emailAddresses',
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
  const connections = response.result.connections;
  if (!connections || connections.length == 0) {
    document.getElementById('content').innerText = 'No connections found.';
    return;
  }
  // Flatten to string to display
  const output = connections.reduce(
      (str, person) => {
        if (!person.names || person.names.length === 0) {
          return `${str}Missing display name\n`;
        }
        return `${str}${person.names[0].displayName}\n`;
      },
      'Connections:\n');
  document.getElementById('content').innerText = output;
}
function fetchRowValues() {
    // Spreadsheet ID and range

    var params = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId: '1B9fSq_IKIfa5-ABKtGunFh6tiqpTbGVYiWtX1pimafc',  // TODO: Update placeholder value.

        // The A1 notation of the values to retrieve.
        range: 'D2:D2',  // TODO: Update placeholder value.

        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'ValueRenderOption.FORMATTED_VALUE',  // TODO: Update placeholder value.

        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        dateTimeRenderOption: '[DateTimeRenderOption.SERIAL_NUMBER]',  // TODO: Update placeholder value.
      };
    // Request parameters
    const request = {
      spreadsheetId: spreadsheetId,
      range: `${sheetName}!${rowNumber}:${rowNumber}`,
    };
  
    // Make the API request

    gapi.client.sheets.spreadsheets.values.get(params).then(function(response) {
      const values = response.result.values;
      if (values && values.length > 0) {
        console.log('Values in the row:');
        values[0].forEach(function(value) {
        document.getElementById('content').innerText = values;
          console.log(value);
        });
      } else {
        console.log('No values found in the row.');
      }
    }, function(error) {
      console.log('Error fetching values from the row:', error);
    });
  }

async function getMember() 
{
    
    fetchRowValues();
}