function setObject(key,value){
  return localStorage.setItem(key,JSON.stringify(value));
}
 function getObject(key){
   return JSON.parse(localStorage.getItem(key));
 }

 // form-validation
 document.getElementById('bmi-form').addEventListener('submit',function(evt){
  evt.preventDefault();
  const height = document.getElementById('height')
 })