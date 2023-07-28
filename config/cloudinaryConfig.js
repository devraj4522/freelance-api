const cloudinary = require('cloudinary').v2;
const axios = require('axios');

// Configuration 
// cloudinary.config({
//   cloud_name: process.env.cloudinary_cloud_name,
//   api_key: process.env.cloudinary_api_key,
//   api_secret: process.env.cloudinary_api_secret,
// }); 


const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);

  data.append("upload_preset", "doal1hg4");
  data.append("cloud_name", "diutgjcc8");
  data.append("public_id", "sample_image");

  data.append("api_key",'654831925494494');

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/diutgjcc8/auto/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
module.exports = upload;