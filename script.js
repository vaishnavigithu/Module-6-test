let USERS_DB = [];

 function validate(){
    let firstName = document.getElementById('first-name').value;
    let lastName  = document.getElementById('last-name').value;
    let email  = document.getElementById('Email').value;
    let password  = document.getElementById('Password').value;
    let confirmPassword  = document.getElementById('Confirm-password').value;
    // console.log(firstName,lastName,email,password,confirmPassword);

    if(firstName.length>=2){
        document.getElementById('first-name-valid').style.display ='block';
        document.getElementById('first-name-invalid').style.display ='none';
     }else{
         document.getElementById('first-name-invalid').style.display ='block';
         document.getElementById('first-name-valid').style.display ='none';
      }
      if(lastName.length>=2){
        document.getElementById('last-name-valid').style.display ='block';
        document.getElementById('last-name-invalid').style.display ='none';
     }else{
         document.getElementById('last-name-invalid').style.display ='block';
         document.getElementById('last-name-valid').style.display ='none';
      }
    
      if(email.includes('@') && 
         email.includes('.') && 
         email.indexOf("@") > 0 &&
         email.substr(email.lastIndexOf('.')+1).length >=2){
             document.getElementById('email-valid').style.display= 'block';
             document.getElementById('email-invalid').style.display="none";
         }else{
             document.getElementById('email-invalid').style.display= 'block';
             document.getElementById('email-valid').style.display="none";
         }
         if(password.includes("@") || password.includes("#") || password.includes("$") && password.length>=8 && password.includes(0) || password.includes(1) || password.includes(2) || password.includes(3)|| password.includes(4)){
            document.getElementById('password-valid').style.display="block";
            document.getElementById('password-invalid').style.display="none";
         }else{
            document.getElementById('password-invalid').style.display="block";
            document.getElementById('password-valid').style.display="none";
         }
         let error=false
     if(password !== confirmPassword){
         document.getElementById('confirm-password-invalid').style.display='block';
         error=true
     }else{
       document.getElementById('confirm-password-invalid').style.display='none';
     }
     if(!error){
       let userDetails={
          firstName,
          lastName,
          email,
          password
       }
       USERS_DB.push(userDetails)
       alert('Your details have been saved successfully');
       document.getElementById('signup-form-id').reset();
 
       console.log(USERS_DB);
     }

 }
