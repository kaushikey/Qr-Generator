const QR = require("qrcode");
const genQR = async text => {
    try{
        console.log(await QR.toString(text,{tpye:'terminal'}));
       
    }
    catch (err)
    {
console.log(err);
    }
}
  
 console.log(genQR("Hi I am the QR"));