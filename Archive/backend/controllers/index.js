const fs = require('fs');
const { join } = require('path');
const archiver = require('archiver');

const generateZip = () =>
  new Promise((resolve, reject) => {
    const archive = archiver('zip', { zlib: { level: 9 } });

    const stream = fs.createWriteStream(join('exports', 'output.zip'));
    stream.on('close', () => resolve('ready')); // we resolve the stream, because the finalize method is not the last operation.

    const dataFilePath = join(__dirname, '..', 'data');
    archive
      .directory(dataFilePath, false) // the content we will archive
      .on('error', (err) => reject(err))
      .pipe(stream);
    archive.finalize();
  });

module.exports.downloadFile = async (req, res) => {
  try {
    const exportsDir = join(__dirname, '..', 'exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir);
    }

    await generateZip();

    const zipFilePath = join(__dirname, '..', 'exports', 'output.zip');
    res.download(zipFilePath, (err) => {
      if (err) {
        res.status(500).json({ err });
      }
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
