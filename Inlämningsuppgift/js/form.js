var elForm, elFname, elLname, elCountry, elOutput;

var elRating1, elRating2, elRating3, elRating4, elRating5;
//elRating0 = document.getElementById('rating-0');
elRating1 = document.getElementById('rating-1');
elRating2 = document.getElementById('rating-2');
elRating3 = document.getElementById('rating-3');
elRating4 = document.getElementById('rating-4');
elRating5 = document.getElementById('rating-5');


elForm = document.getElementById('formContact');
elFname = document.getElementById('fname');
elLname = document.getElementById('lname');
elCountry = document.getElementById('country');

elOutput = document.getElementById('output');

function saveContact(event){
    // Submittar inte formuläret
    event.preventDefault();
    var fname = elFname.value;
    var lname = elLname.value;
    var country = elCountry.value;
    console.log('Förnamn: ', fname);
    console.log('Efternamn: ', lname);
    console.log('Land: ', country);

    var varForm = fname + '' + lname + '' + country;

    // Sparar fname, lname , country i en variabel som heter varForm
    // Sparar till local storage
    localStorage.setItem("localForm", varForm);
    console.log('Local storage', localStorage.getItem("localForm"));
    // Hämtar från local storage
    localStorage.getItem("localForm");
    console.log('Local storage', localStorage.getItem('localRating'));
    localStorage.getItem(saveRating());


    // Använd value när man hämtar från input i formuläret

    console.log('I funktionen');

    //elOutput.textContent = 'Hej ' + name;


}
function showLocalStorage(event){
    localStorage.getItem("localForm");
    document.getElementById();
    event.preventDefault();
}
function saveRating(){
    console.log("save Rating funktion");
    var varRating = '';

    if(elRating1.checked){
        varRating = 'Rating: ett';
        console.log(" Röstade ett");
    }
    else if(elRating2.checked) {
        varRating = 'Rating: Två';
        console.log("Röstade två");
    }
    else if(elRating3.checked) {
        varRating = 'Rating: Tre';
        console.log("Röstade tre");
    }
    else if(elRating4.checked) {
        varRating = 'Rating: Fyra';
        console.log("Röstade fyra");
    }
    else if(elRating5.checked) {
        varRating = 'Rating: Fem';
        console.log("Röstade fem");
    }
    console.log('Variabel rating', varRating);
    localStorage.setItem('localRating',varRating);
    console.log('Local Storage', localStorage.getItem('localRating'));
    //localStorage.getItem('localForm');

    event.preventDefault();



}

elForm.addEventListener('submit', saveContact, false);


