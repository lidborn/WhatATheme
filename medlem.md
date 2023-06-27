<html>
  <head>
    <title>People API Quickstart</title>
    <meta charset="utf-8" />
  </head>
  <body>
      <p>People API Quickstart</p>   
      <script async defer src="assets\js\script.js"></script>
     <button id="authorize_button" onclick="handleAuthClick()">Authorize</button>
     <button id="signout_button" onclick="handleSignoutClick()">Sign Out</button>
    <script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
    <script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
    <pre id="content" style="white-space: pre-wrap;"></pre> 
  </body>
</html>