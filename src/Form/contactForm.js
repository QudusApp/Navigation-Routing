
import { object } from "prop-types";
import React, {useState} from "react";

function ContactForm(){
    
    const [formData, setFormData] = useState({
        Name: '',
        Tel: '',
        Email: '',
        Message: ''
    });

    const [error, setError] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        });
    }

    const handleSubmission = (event) => {
        event.preventDefault();

        const errorValidation = {};

        if(!formData.Name) errorValidation.name = 'Name is required';
        if(!formData.Tel) errorValidation.Tel = 'Phone Number is Required';
        if(!formData.Email || !formData.Email.includes('@', '.' ) ) errorValidation.Email = 'Enter a correct email';

        if(object.key(errorValidation).length > 0) {
            setError(errorValidation)
        } else {
            alert('You form has been submited successfully');
            setFormData({
                Name: '',
                Tel: '',
                Email: '',
                Message: ''
            });
            setError({})
        }
    }

    return(
        <form onChange={handleSubmission}>
            <div>
                <label >Name: </label>
                <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Enter your name"/>
                {error.Name && <span>{error.Name}</span>}
            </div>
            <div>
                <label >Tel: </label>
                <input type="text" name="Tel" value={formData.Tel} onChange={handleChange}  placeholder="Enter your phone number"/>
                {error.Tel && <span>{error.Tel}</span>}
            </div>
            <div>
                <label >Email: </label>
                <input type="text" name="Email" value={formData.Email} onChange={handleChange}  placeholder="Enter your email"/>
                {error.Email && <span>{error.Email}</span>}
            </div>
            <div>
                <label >Message: </label>
                <input type="text" name="Message" value={formData.Message} onChange={handleChange}  placeholder="Enter your message"/>
                {error.Message && <span>{error.Message}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;