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
exports.DownloadClass=(req,res)=>{
  const filePath = path.join(__dirname, '../public/Class.xlsx');
const fileName = 'Class.xlsx';
res.download(filePath, fileName, function(err) {
  if (err) {
    console.error('Error downloading file:', err.message);
  } else {
    console.log('File downloaded successfully.');
  }
});
}
exports.DownloadDeleteuser=(req,res)=>{
  const filePath = path.join(__dirname, '../public/Deleteuser.xlsx');
const fileName = 'Deleteuser.xlsx';
res.download(filePath, fileName, function(err) {
  if (err) {
    console.error('Error downloading file:', err.message);
  } else {
    console.log('File downloaded successfully.');
  }
});
}
exports.DownloadDeleteTe=(req,res)=>{
  const filePath = path.join(__dirname, '../public/DeleteTe.xlsx');
const fileName = 'DeleteTe.xlsx';
res.download(filePath, fileName, function(err) {
  if (err) {
    console.error('Error downloading file:', err.message);
  } else {
    console.log('File downloaded successfully.');
  }
});
}