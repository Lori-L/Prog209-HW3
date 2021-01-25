function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("ordertype").value;
    let customerArray = [];

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && city.length > 2) {  //Put in the customer array shenanigans here.
        customerArray.push(name + " " + city + " " + payment);
        displayList(customerArray, "customerList");
    }
    else {
        alert("Please fill in all fields.");
    }
}

//Displays the array contents in an unordered list to the specified html id (wipes the existing list first)
function displayList(array, idName){
    idName.innerHTML = "";
    for(let i=0; i<array.length; i++){
        let li = document.createElement("li");
        document.getElementById(idName).appendChild(li);
        li.innerHTML = array[i];
    }
}