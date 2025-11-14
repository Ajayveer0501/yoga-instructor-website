const { google } = require('googleapis');

function createOAuthClient() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON || '{}');
  const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web || {};
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris && redirect_uris[0]);
  if (process.env.GOOGLE_TOKEN_JSON) oAuth2Client.setCredentials(JSON.parse(process.env.GOOGLE_TOKEN_JSON));
  return oAuth2Client;
}

async function addEvent({ summary, description, startDateTime, endDateTime, attendees = [] }) {
  const auth = createOAuthClient();
  const calendar = google.calendar({ version: 'v3', auth });
  const event = { summary, description, start: { dateTime: startDateTime }, end: { dateTime: endDateTime }, attendees: attendees.map(e => ({ email: e })) };
  const res = await calendar.events.insert({ calendarId: 'primary', resource: event });
  return res.data;
}

module.exports = { addEvent };
