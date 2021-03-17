const fs = require('fs');
const { join } = require('path');
const xlsx = require('xlsx');
const { v4: uuidv4 } = require('uuid');

const HEADERS = ['Name', 'City', 'Address'];
const ROWS = [
  ['Mira', 'Sofia', 'Ulica 21'],
  ['Ivo', 'Plovdiv', 'Ulica 23'],
  ['Poli', 'Varna', 'Ulica 24'],
];

const data = [HEADERS, ...ROWS];

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.aoa_to_sheet(data);

xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

const fileDir = join(__dirname, 'files');
if (!fs.existsSync(fileDir)) {
  fs.mkdirSync(fileDir);
}

const filePath = join(fileDir, `${uuidv4()}.csv`);

xlsx.writeFile(workbook, filePath, {
  type: 'file',
  bookType: 'csv',
});
