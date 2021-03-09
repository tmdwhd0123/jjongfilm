const express = require('express');
const app = express();
const axios = require('axios');
const DATA = (require("./download/data.js")).data;
 //public 파일 안에 있는걸 정적으로 사용 ./index.html 등 접근 가능
const fs = require("fs");
const path = require("path");


app.use(express.static(__dirname+'/public'));


app.get('/download', function(req, res) {
    let id = req.query.id || ""
    id = DATA[id] ;
    const file = path.resolve(__dirname, `./download/${id}`);

    if (!fs.existsSync(file)) {
      res.send("No such files")
      res.end()
    } 
    console.log(file);
      res.download(file); 
});




app.get('/check', (req, res) => {
  let code = req.query.code;
  const AUTHURI = "https://oauth2.googleapis.com/token"
   
  //변경 해야될 것 
  const CLIENTID = "373034390042-s44imljq17ddebblobdcnf3hp7qkjgc6.apps.googleusercontent.com";
  const CLIENTPASS = "LYh-FeMYsJWW8wYr47jPaOf8";
  const thisURI = "https://jjongfilm.com/check";
  const CHANNELID = "UCAfrrRcX63xf7uaM6A7dU3A";
  //변경 해야될 것

  const FINALURI = "https://content-youtube.googleapis.com/youtube/v3/subscriptions";
  (async () => {
    try {
      let data = {
        "client_id": CLIENTID,
        "client_secret": CLIENTPASS,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": thisURI
      }
      let header = { "Content-Type": "application/x-www-form-urlencoded" }
      let result = await axios({
        method: 'post',
        url: AUTHURI,
        params: data,
        headers: header
      });

      let token = result.data.token_type + " " + result.data.access_token

      let finalResult = await axios({
        method: 'get',
        url: "https://content-youtube.googleapis.com/youtube/v3/subscriptions",
        params: {
          "part": "id",
          "mine": true,
          "forChannelId": CHANNELID
        },
        headers: { "Authorization": token }
      });
      let checkSub = finalResult.data.items.length
      if (!checkSub) {
        res.redirect(`/nosub.html`)
      }
      else {
        res.redirect("zz")
      }
    }
    catch (e) {
      res.redirect(301, "/error.html");
    }
  })();
  return;
});
app.listen(process.env.PORT || 3000, function () {
  console.log(__dirname);
});