const CLIENTID = "373034390042-s44imljq17ddebblobdcnf3hp7qkjgc6.apps.googleusercontent.com";  //클라이언트 아이디
const REDIRECT = "https://jjongfilm.com/check";  //리다이렉트 비번


const SCOPE = "https://www.googleapis.com/auth/youtube.readonly";


const callBackURI =`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENTID}&redirect_uri=${REDIRECT}&response_type=code&scope=${SCOPE}&access_type=offline`

let auth = function(){
	let win = window.open(callBackURI );
	
}
 

 