// let arrData = [];
// if (localStorage.arrData != null) {
//     arrData = JSON.parse(localStorage.arrData);
// }
// // Give variables
// let userName;
// let Password;
// let Email;
// let PhoneNumber;
//  // Bring the form
// let Registration = document.getElementById('registration');

// Registration.addEventListener("submit", function (event) {
//     event.preventDefault();
// // Bring the form data
//     userName = event.target.username.value;
//     Password = event.target.password.value;
//     Email = event.target.email.value;
//     PhoneNumber = event.target.phonenumber.value;

//     function validateName() {  // validateName is a function
//         let Name = userName.toLowerCase();
//         if (Name == "") {       // This means the user didn't enter his name so he will be alerted like in line 35  or we can use this way const usernameRegex = /\s/;
//             alert("Name must be filled out");
//             return false;
    
//         } else if (Name.includes(" ")) {   // This means the user entered his name with spaces in between so he will be alerted like in line 38
//             alert("Name must be filled with no spaces");
//             return false;
//         } else if (arrData.includes(userName)) {  // This means if the user entered an existing name it wll not be taken and will be alerted like in line 42
    
//             alert("Username already exists. welcome " + userName);
//             return false;
//         }
    
//         return true;  // Anything else rather than the above conditions will be accepted
    
//     }
    
//     function validatePassword() {
//         const passwordRegex = /^(?=.\d)(?=.[A-Z])(?=.*\W).{8,}$/;
//         if (!passwordRegex.test(Password)) {
//             alert(`Password must be at least 8 characters long and contain at least 1 number, 1 uppercase letter, and 1 special character`);
//             return false;
//         }
//         return true;
//     }
    
//     function validateEmail() {
//         const emailRegex = /^\S+@\S+.\S+$/;
//         if (!emailRegex.test(Email)) {
//             alert(`Invalid email format`);
//             return false;
//         }
//         return true;
//     }
    
//     function validateNumber() {
//         const phoneRegex = /^07\d{8}$/;
//         if (!phoneRegex.test(PhoneNumber)) {
//             alert(`Phone number must start with 07 and contain 10 digits`);
//             return false;
//         }
//         return true;
//     }

//     if (validateName() && validatePassword() && validateEmail() && validateNumber()) {
//         let student = new ConstructorData (userName, Password, Email, PhoneNumber); // This is a constructor function to convert the data into an object --- The (New) word is constant that we use it always to make a new constructor every time
//         arrData.push(student);
//         localStorage.setItem('arrData', JSON.stringify(arrData));
//         Registration.reset();
//     }

// });







// function ConstructorData (userName, Password, Email, PhoneNumber) {   // This related to the constructor on top 
//     this.userName = userName;
//     this.Password = Password;
//     this.Email = Email;
//     this.PhoneNumber = PhoneNumber;
// }






let arrData = [];
// if (localStorage.arrData != null) {
//     arrData = JSON.parse(localStorage.arrData);
//     render();
// }


let userName;
let userPassword;
let userEmail;
let userNumber;



let DataCollected = document.getElementById("registration-form");
DataCollected.addEventListener("submit", function (event) {
    event.preventDefault();
    userName = event.target.username.value;
    userPassword = event.target.password.value;
    userEmail = event.target.email.value;
    userNumber = event.target.phonenumber.value;

    // validate username
    function validateName() {
        const usernameRegex = /\s/;
        if (usernameRegex.test(userName)) {
            alert(`Username cannot contain spaces`);
            return false;
        }
        if (arrData.includes(userName)) {
            alert("Username already exists. welcome " + userName);
            return false;
        }
        return true;
    }


    // validate password
    function validatePassword() {
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(userPassword)) {
            alert(`Password must be at least 8 characters long and contain at least 1 number, 1 uppercase letter, and 1 special character`);
            return false;
        }
        return true;
    }

    // validate email
    function validateEmail() {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(userEmail)) {
            alert(`Invalid email format`);
            return false;
        }
        return true;
    }

    // validate phone
    function validateNumber() {
        const phoneRegex = /^07\d{8}$/;
        if (!phoneRegex.test(userNumber)) {
            alert(`Phone number must start with 07 and contain 10 digits`);
            return false;
        }
        return true;
    }

    console.log(userName, userPassword, userEmail, userNumber);
    if (validateName() && validatePassword() && validateEmail() && validateNumber()) {
        let student = new Person(userName, userPassword, userEmail, userNumber);
        arrData.push(student);
        console.log(student);
        localStorage.setItem('arrData', JSON.stringify(arrData));
    }
    DataCollected.reset();
});


function Person(userName, userPassword, userEmail, userNumber) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userNumber = userNumber;
}