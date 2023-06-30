const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /\d/;

 export default function validate  (inputs){
    let errors = {};


    if(!inputs.email)
    {
     errors.email = 'This input is required'
    }
   if(!regexEmail.test(inputs.email)){
    errors.email = 'An email is required'
   }
   if(inputs.email.length>35){
     errors.email = 'Cant type more than 35 characters in this blank'
   }

   if(!regexNumber.test(inputs.password))
   {
    errors.password = 'The password must have at least a number';
   }
   if(inputs.password<6 || inputs.password>10 )
   {
     errors.paswword =  'The password has to be up 6 to 10 characters'
   }
   return errors;
}

