function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    length = Math.floor(Math.random() * 6 );
    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
bigcount = 0;
setInterval(function(){
while (bigcount < 100){
var imgurer = document.createElement('img');
imgurer.setAttribute('src', 'http://imgur.com/'+makeid()+'.jpg');
document.body.appendChild(imgurer);
bigcount++;
}
}, 100);
