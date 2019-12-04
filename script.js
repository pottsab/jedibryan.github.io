// set up text to print, each item in array is new line
var aText = new Array(
"Establishing connection...",
"Receiving transmission...",
"Locating origin of data...",
"<br />",
"=======================<br />Region: Outer Rim<br />Sector: Trilon<br />Planetary System: Batuu<br />=======================","",

"Communication link encrypted...<br />Specified IP address unknown.",
"Attempting to locate IP address...", "",
"IP address location corrupt.",
"Recovering IP data...","",
"Location found. Current IP location:<br />B̶l̸a̷c̵k̴ ̵S̶p̵i̴r̸e̷ ̴O̴u̴t̶p̶o̸s̶t̶",

"Log data encrypted, searching for key...",
"Encryption cracked.<br />Decrypting",
".",".",".",
"MESSAGE RECOVERED:<style1><br />congratulations jedi bryan,<br />you have received a powerful ancient device that can re-align the rare kyber crystal to reflect shades of light.",
"in order to shift the crystal's colors, set the device frequency to 125khz and write these codes to the crystal and behold the power of your lightsaber and unlock the vast library of data contained in your holocron.</style1>",
"<br /><br />Translating to: ENGLISH...","",
"<br /><style2>Congratulations Jedi Bryan,<br />You have received a powerful ancient device that can re-align the rare kyber crystal to reflect shades of light.",
"<nobr />In order to shift the crystal's colors, set the device frequency to 125KHz and write these codes to the crystal and behold the power of your lightsaber and unlock the vast library of data contained in your holocron.</style2>","",

"Receiving Data Package...","Parsing...","","",
"INPUT | SHADE &nbsp| DATABANK LIBRARY OWNER","",
"3072 &nbsp| WHITE &nbsp| AHSOKA TANO<br />3073 &nbsp| RED &nbsp&nbsp&nbsp| DARTH VADER<br />3074 &nbsp| ORANGE | NO LIBRARY<br />3075 &nbsp| YELLOW | JEDI TEMPLE GUARD<br />3076 &nbsp| GREEN &nbsp| QUI-GON JINN<br />3077 &nbsp| TEAL &nbsp&nbsp| NO LIBRARY<br />3079 &nbsp| PURPLE | MACE WINDU LIBRARY I<br />3080 &nbsp| WHITE &nbsp| CHIRRUT IMWE<br />3081 &nbsp| RED &nbsp&nbsp&nbsp| EMPEROR PALPATINE<br />3082 &nbsp| RED &nbsp&nbsp&nbsp| COUNT DOOKU<br />3083 &nbsp| YELLOW | MAZ KANATA<br />3084 &nbsp| GREEN &nbsp| MASTER YODA<br />3085 &nbsp| RED &nbsp&nbsp&nbsp| DARTH MAUL<br />3087 &nbsp| PURPLE | MACE WINDU LIBRARY II<br />3121 &nbsp| RED &nbsp&nbsp&nbsp| ASK DARTH VADER<br />3122 &nbsp| GREEN &nbsp| ASK MASTER YODA<br />3123 &nbsp| BLACK &nbsp| SNOKE<br />",
"Ending Comm-link connection.",
"End of Program."

);


var iSpeed = 30; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 10; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row



function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "█";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
