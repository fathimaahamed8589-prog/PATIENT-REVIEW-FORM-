# Send responses to Google Sheets

1. Open the Google Sheet that should hold the responses.
2. Menu: **Extensions > Apps Script**. Delete any code, paste the contents of `Code.gs`, click Save.
3. Click **Deploy > New deployment**, type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click Deploy, approve the permissions, and copy the **Web app URL**.
5. In `index.html`, paste that URL into `const SHEET_URL='';`.
6. Submit a test response; a new row (with headers) appears in the Sheet.
