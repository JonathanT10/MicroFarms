import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm('')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    }



    render() {
        return (
            <div>
                <h1>Contact us here</h1>
                <form onSubmit={this.sendEmail}>
                    <div>
                        <div>
                            <input type="text" placeholder="Name" name="user_name"></input>
                        </div>
                        <div>
                            <input type="email" placeholder="EmailAddress" name="user_email"></input>
                        </div>
                        <div>
                            <textarea placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;
