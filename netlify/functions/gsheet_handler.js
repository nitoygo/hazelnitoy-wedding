// required env vars
if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error("no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set");
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error("no GOOGLE_PRIVATE_KEY env var set");
if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
  // spreadsheet key is the long id in the sheets URL
  throw new Error("no GOOGLE_SPREADSHEET_ID_FROM_URL env var set");

// Get spreadsheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");

// Add your Google sheet ID here
const googleSheetID = process.env.GOOGLE_SPREADSHEET_ID_FROM_URL;

// Constants for Column Names
const NAME = "NAME";
const CONTACT_NUMBER = "CONTACT NUMBER";
const CONFIRMED_SEAT = "CONFIRMED SEAT";

// Instantiates the spreadsheet document
const doc = new GoogleSpreadsheet(googleSheetID);

async function updateData(body) {
  let data = {
    [NAME]: body.name,
    [CONTACT_NUMBER]: body.contactNumber,
    [CONFIRMED_SEAT]: body.count
  };

  // Authenticate using the JSON file we set up earlier
  await doc.useServiceAccountAuth(clientSecret);
  await doc.loadInfo();

  // Get the first sheet
  const sheet = doc.sheetsByIndex[0];
  console.info(sheet.title);
  console.info(sheet.rowCount);

  // Get row data
  const rows = await sheet.getRows();

  // If we have data
  if (rows.length > 0) {
    var matchedRow = rows.find(row => {
      return row[NAME] == data[NAME];
    });

    if (matchedRow) {
      // if found match, update existing row
      matchedRow[CONTACT_NUMBER] = data[CONTACT_NUMBER];
      matchedRow[CONFIRMED_SEAT] = data[CONFIRMED_SEAT];

      await matchedRow.save();
    } else {
      // if none match, add new row
      var addedRow = await sheet.addRow({
        [NAME]: data[NAME],
        [CONTACT_NUMBER]: data[CONTACT_NUMBER],
        [CONFIRMED_SEAT]: data[CONFIRMED_SEAT]
      });

      await addedRow.save();
    }
  }
}

exports.handler = async function(event) {
  var statusCode;

  try {
    updateData(JSON.parse(event.body));
    statusCode = 200;
  } catch (e) {
    console.error(e);
    statusCode = 500;
  }

  return {
    statusCode: statusCode,
    body: JSON.stringify(event.body)
  };
};
