/* var elForm, elFname, elOutput;
var elRatingClass, elRating0, elRating1, elRating2, elRating3, elRating4, elRating5;
elRatingClass = document.getElementById('star-cb-group');
elRating0 = document.getElementById('rating-0');
elRating1 = document.getElementById('rating-1');
elRating2 = document.getElementById('rating-2');
elRating3 = document.getElementById('rating-3');
elRating4 = document.getElementById('rating-4');
elRating5 = document.getElementById('rating-5');

elForm = document.getElementById('formContact');
elFname = document.getElementById('fname');
elOutput = document.getElementById('output');

function saveContact(event){
    var fname = elFname.value;

    var varForm = fname + ' text sparad';
    // Sparar fname, lname , country i en variabel som heter varForm
    // Sparar till local storage
    localStorage.setItem("localForm", varForm);
    console.log('Local storage', localStorage.getItem("localForm"));
    // Hämtar från local storage
    localStorage.getItem("localForm");

    // Använd value när man hämtar från input i formuläret

    console.log('I funktionen');

    //elOutput.textContent = 'Hej ' + name;

    // Submittar inte formuläret
    event.preventDefault(); //
}

function showLocalStorage(event){
    localStorage.getItem("localForm");
    document.getElementById();
    event.preventDefault();
}
elForm.addEventListener('submit', saveContact, false);

saveRating();
function saveRating(){
    var rating = elRating1.value;
    var varRating = elRating1 + ' 1 stjärna';
    console.log('Variabel rating', varRating);
    localStorage.setItem('localForm',varRating);
    console.log('Local Storage', localStorage.getItem('localForm'));
    localStorage.getItem('localForm');

    event.preventDefault();



}*/
//elRatingClass.addEventListener('rating-0','rating-1','rating-2','rating-3','rating-4','rating-5',saveRating, false);




