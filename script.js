
function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

function sendFun(){
const sentence = document.getElementById("input1").value;
if(getWordCount(sentence)<4)
{
if(confirm("This looks like an unnecessary email!\nDo you know?\nEach UK adult sending one less email a day, would save over 16,433 tonnes of carbon a year\n\nDo you want to send the mail?")==true)
{ 
alert("Message sent successfully");
document.getElementById("inputRec").value='';
document.getElementById("inputSub").value='';
document.getElementById("input1").value='';
}
else{
alert("Thanks! Message NOT sent");
document.getElementById("inputRec").value='';
document.getElementById("inputSub").value='';
document.getElementById("input1").value='';
}
}
else{
alert("Message sent successfully")
document.getElementById("inputRec").value='';
document.getElementById("inputSub").value='';
document.getElementById("input1").value='';
}
}

document.getElementById("dmbutton").addEventListener('click',function(){
    const css = document.getElementById('cssfile');
    const dmb = document.getElementById('dmbutton');

 if(dmb.innerHTML=='Dark Mode'){
 css.setAttribute('href','styles/darkmode.css');
 dmb.innerHTML ='Light Mode';
 }
 else{
    css.setAttribute('href','styles/lightmode.css');
    dmb.innerHTML ='Dark Mode';
 }

})


