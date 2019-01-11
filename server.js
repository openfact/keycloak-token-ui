//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/keycloak-token-ui'));

app.get('*', function (req, res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/keycloak-token-ui/index.html'));
});

app.get('/config', (req, res) => {
  res.json({
    SSO_REALM: process.env.SSO_REALM,
    SSO_API_URL: process.env.SSO_API_URL,
    SSO_CLIENT_ID: process.env.SSO_CLIENT_ID
  });
  console.log(res);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);