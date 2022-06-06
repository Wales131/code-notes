let countryIndx=2;
setInterval(() => {
document.getElementsByClassName('cross_button')[1].click();
document.getElementsByClassName('locations-box')[0].className = "locations-box locations-box--show";
let changeCountry = setInterval(function(){
 
document.getElementsByClassName('location')[countryIndx].click();
clearInterval(changeCountry);
}, 100);
 
if(countryIndx===document.getElementsByClassName('location').length){
countryIndx=2;
}
 
countryIndx++;
 
}, 11500);
