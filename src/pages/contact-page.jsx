import React from 'react';
import {useState} from 'react';
import axios from 'axios';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import Snackbar from '@material-ui/core/Snackbar';
// import SendIcon from '@material-ui/icons/Send';

  export default function ContactPage() {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message,setMessage] = useState('');

    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] =  React.useState({message: '', backgroundColor: ''});
    const [alertMessage, setAlertMesssage] = useState("");

    const onChange = event => {
        let valid;
    
        switch (event.target.id) {
          case "email":
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
              event.target.value
            );
    
            if (!valid) {
              setEmailHelper("Invalid email");
            } else {
              setEmailHelper("");
            }
            break;
          case "phone":
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
    
            if (!valid) {
              setPhoneHelper("Invalid phone");
            } else {
              setPhoneHelper("");
            }
            break;
          default:
            break;
        }
      };

  const onConfirm = () =>{
    setLoading(true);
    axios.get('https://us-central1-material-ui-5daa2.cloudfunctions.net/sendMail', 
    {params: {
      name: name,
      email: email,
      phone: phone,
      message: message
    }}
    )
    .then(res =>{
      setLoading(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage("");
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");

    })
    .catch(err =>{setLoading(false); 
      setAlert({message: "sonting wrong", backgroundColor:'#FF3232' })
      setAlertMesssage("Something went wrong! Please try again.");
      console.error(err); })
  };

  const buttonContent = (
    <React.Fragment>
      {/* <SendIcon fontSize="small" style={{marginRight:'0.5em'}}/>Send Message  */}
    </React.Fragment>
  )

    return (
      <React.Fragment>
  <div className="contact-page">
  <div className="row-full">
    <div className="col-1-of-3">
    </div>
    <div className="col-2-of-3">
    <div className='title u-margin-bottom-small'>
    <h2 className='heading-secondary'>MY CONTACT</h2>
  </div>
      <div className="form-container">
        <div className="form__group">
          <input type="text" 
          className="form__input" 
          placeholder="Name" 
          label='Name'
          id='name' 
          value={name} 
          onChange={(event)=> setName(event.target.value)} required />
          <label htmlFor="name" className="form__label" >Full name</label>
        </div>  
        <div className="form__group">
          <input type="email" 
          className="form__input" 
          placeholder="Email address" 
          label='Email' 
          id='email' 
          error={emailHelper.length !==0} 
          helperText={emailHelper} 
          value={email} 
          onChange={onChange}
          required />
          <label htmlFor="email" className="form__label">Email address</label>
        </div>
        <div className="form__group">
          <input 
          type="text" 
          className="form__input" 
          placeholder="Phone"
          label='Phone' 
          id='phone' 
          error={phoneHelper.length !==0} 
          helperText={phoneHelper} 
          value={phone} 
          onChange={onChange}  required />
          <label htmlFor="phone" className="form__label">Phone</label>
        </div>  
        <div className="form__group">
        <textarea id="textarea" 
        className='text_area'
        name="textarea" 
        placeholder="Enter Message" 
        rows="6" 
        id='message' 
        value={message} 
        onChange={(event)=> setMessage(event.target.value)} />
        </div>  
        <div className="form__group">
          {/* <button className="button"  
           onClick={onConfirm}>{loading ? <CircularProgress size={20}/> : buttonContent}
          </button> */}
        </div>
      </div>
    </div>
  </div>
                    {/* <Snackbar
                      open={alert.open}
                      ContentProps={{
                        style: {
                          backgroundColor: alert.color,
                          marginTop:'7rem'
                        }
                      }}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      message={alertMessage}
                      autoHideDuration={4000}
                      onClose={() => setAlert(false)}
                    /> */}
</div>
      </React.Fragment>   
    );
  }
