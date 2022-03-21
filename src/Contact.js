import React from 'react';
import { Col } from 'react-bootstrap';

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        subject: '',
        email: '',
        message: ''
    }
  }

  handleSubmit(e,subject,message){
    if (!message) return
    if (!subject) subject = 'Hello!'
    window.location.href = `mailto:joeybergermusic@gmail.com?subject=${subject}&body=${this.state.message}`;
  }
  
  render() {
    return(
      <Col md={{span:8,offset:2}}>
          <div className="contact-container">
              <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" id="subject" value={this.state.subject} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button className="btn btn-primary submit-button" onClick={(e) => {this.handleSubmit(e,this.state.subject,this.state.message)}}>Submit</button>
          </div>
      </Col>
    );
  }

  onNameChange(event) {
	  this.setState({subject: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;