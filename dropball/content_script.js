asteroid="http://i.imgur.com/TWNzkYP.png"
apic = document.createElement("img");
apic.setAttribute("src", asteroid);
floater = 0;
currentX = 0;
currentY = 0;
Xdir = 0;
Ydir = 0;
function onMouseClick(e) {
      var x = e.clientX;
      var y = e.clientY;
}

function dropball(x, y){
   apic.style.position = 'absolute' ;
   apic.style.top = y-75+'px' ;
   apic.style.left= x-150+'px'; 
   document.body.appendChild(apic);
   currentX = x-150 ; 
   currentY = y-75; 
   goerX = Math.random();
   goerY = Math.random();
   if (goerX > .5)
   {
     Xdir = 1;
   }
   else
   {
     Xdir = -1;
   }
   if (goerY > .5)
   {
     Ydir = 1;
   }
   else
   {
     Ydir = -1;
   }
};

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    dropball(xPosition, yPosition);
};
document.addEventListener("click", getClickPosition, false);

setInterval(function(){
if (Xdir == 1)
{
  apic.style.left = currentX+1+'px';
  currentX++;
}
if (Ydir == 1)
{
  apic.style.top= currentY+1+'px';
  currentY++;
}

if (Ydir == -1)
{
  apic.style.top= currentY-1+'px';
  currentY--;
}
if (Xdir == -1)
{
  apic.style.left= currentX-1+'px';
  currentX--;
}
},100);

