// Get spreadsheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");
// Ensure you've updated this file with your client secret
const clientSecret = require("./client_secret.json");

// Add your Google sheet ID here
const googleSheetID = "1jyrvbrGkFP62SwAPy16zhdylgknMOP1nUDlbpkqgArM";

// Instantiates the spreadsheet
const sheet = new GoogleSpreadsheet(googleSheetID);

async function updateData(body) {
  try {
    let data = {
      NAME: body.name,
      "CONTACT NUMBER": body.contactNumber,
      "CONFIRMED SEAT": body.count
    };

    // Authenticate using the JSON file we set up earlier
    await sheet.useServiceAccountAuth(clientSecret);
    await sheet.loadInfo();

    // Get the first tab's data
    const tab = sheet.sheetsByIndex[0];

    // Get row data
    const rows = await tab.getRows();

    var index = 0;
    // If we have data
    if (rows.length > 0) {
      // Iterate through the array of rows
      // and push the clean data from your spreadsheet
      rows.forEach((row, i) => {
        var name = row["NAME"];
        if (name == data["NAME"]) {
          // set values to each cell
          row["CONTACT NUMBER"] = data["CONTACT NUMBER"];
          row["CONFIRMED SEAT"] = data["CONFIRMED SEAT"];
          index = i;
        }
      });
    } else {
      console.log("[WARNING!] Google Spreadsheet is empty.");
    }

    // Save updated row
    await rows[index].save();
  } catch (err) {
    console.log(err);
    return false;
  }
}

exports.handler = async function(event) {
  updateData(JSON.parse(event.body));

  return {
    statusCode: 200,
    body: JSON.stringify(event.body)
  };
};
