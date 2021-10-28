// Get spreadsheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");
// Ensure you've updated this file with your client secret
const clientSecret = require("./client_secret.json");

// Google sheet ID here
const googleSheetID = "1jyrvbrGkFP62SwAPy16zhdylgknMOP1nUDlbpkqgArM";

// Constants for Column Names
const NAME = "NAME";
const CONTACT_NUMBER = "CONTACT NUMBER";
const CONFIRMED_SEAT = "CONFIRMED SEAT";

// Instantiates the spreadsheet document
const doc = new GoogleSpreadsheet(googleSheetID);

async function updateData(body) {
  try {
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
    } else {
      console.warn("[WARNING!] Google Spreadsheet is empty.");
    }
  } catch (err) {
    console.error(err);
  }
}

exports.handler = async function(event) {
  updateData(JSON.parse(event.body));

  return {
    statusCode: 200,
    body: JSON.stringify(event.body)
  };
};
