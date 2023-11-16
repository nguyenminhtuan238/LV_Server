const path = require('path');
exports.Download=(req,res)=>{
    const filePath = path.join(__dirname, '../public/text.xlsx');
  const fileName = 'text.xlsx';
  res.download(filePath, fileName, function(err) {
    if (err) {
      console.error('Error downloading file:', err.message);
    } else {
      console.log('File downloaded successfully.');
    }
  });
}
exports.DownloadDiem=(req,res)=>{
  const filePath = path.join(__dirname, '../public/postpoint.xlsx');
const fileName = 'postpoint.xlsx';
res.download(filePath, fileName, function(err) {
  if (err) {
    console.error('Error downloading file:', err.message);
  } else {
    console.log('File downloaded successfully.');
  }
});
}