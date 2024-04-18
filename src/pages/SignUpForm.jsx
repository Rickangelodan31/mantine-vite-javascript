import { useState } from "react";
import "./SignUp.css";


 
function SignUpForm({handleNewPerson}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [] = useState(1);
 
  const handleSubmit = event => {
    event.preventDefault()
    const newRecipe = {
        firstname,
        lastname,
        email,
        phone
    }
    handleNewPerson(newPerson)
  }
      return (
    <div className="signup">
      <h2>Sign Up Form</h2>
  
      <form onSubmit={handleSubmit}>
                
        
            <ul>
        <label>First Name: </label>
        <input 
            type="text" 
            name="name" 
            value={firstname} onChange={event => setFirstname(event.target.value)}
        /></ul>
        

        
            <ul>
        <label>Last Name: </label>
        <input 
            type='text' 
            name="name" 
            value={lastname} onChange={event => setLastname(event.target.value)}
        />
        </ul>
        

        
            <ul>
        <label>Email Id:   </label>
        <input 
            type="text" 
            name="mailid" 
            value={email} onChange={event => setEmail(event.target.value)}
        />
        </ul>
        
        
            <ul>
        <label>Phone : </label>
        <input 
            type="number" 
            name="phone" 
            value={phone} onChange={event => setPhone(event.target.value)}
        /></ul>
        
        
        <button >
            <span>Sign Up</span>
      </button>
      </form>
    </div>
  );
 
    
  
}
 
export default SignUpForm;