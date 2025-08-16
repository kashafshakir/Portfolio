import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const MessageInbox = () => {
const [message, setMessage] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const handleOnclick = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/insertmessage', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: message.name,
        email: message.email,
        message: message.message
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#fafafa' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden" style={{ 
            backgroundColor: 'white',
            border: '1px solid #f0e6eb'
          }}>
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#bc7c9c" viewBox="0 0 24 24" className="mb-3">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
                <h2 className="fw-light mb-1" style={{ color: '#333' }}>Send us a message</h2>
                <p className="small text-muted" style={{ color: '#bc7c9c' }}>We'll get back to you soon!</p>
              </div>
              
              <form className="needs-validation" noValidate>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="nameInput" className="form-label fw-medium small" style={{ color: '#bc7c9c' }}>Your Name</label>
                  <input 
                    type="text" 
                    className="form-control border-0 rounded-3" 
                    style={{ 
                      backgroundColor: '#f9f3f6',
                      padding: '12px 15px',
                      borderBottom: '2px solid #e8d0da'
                    }}
                    id="nameInput" 
                    name="name"
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide your name.
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="emailInput" className="form-label fw-medium small" style={{ color: '#bc7c9c' }}>Email Address</label>
                  <input 
                    type="email" 
                    className="form-control border-0 rounded-3" 
                    style={{ 
                      backgroundColor: '#f9f3f6',
                      padding: '12px 15px',
                      borderBottom: '2px solid #e8d0da'
                    }}
                    id="emailInput" 
                    name="email"
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="messageTextarea" className="form-label fw-medium small" style={{ color: '#bc7c9c' }}>Your Message</label>
                  <textarea 
                    className="form-control border-0 rounded-3" 
                    style={{ 
                      backgroundColor: '#f9f3f6',
                      padding: '12px 15px',
                      borderBottom: '2px solid #e8d0da',
                      minHeight: '120px'
                    }}
                    id="messageTextarea" 
                    name='message'
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Hello, I'd like to talk about..."
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter your message.
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="d-grid mt-4">
                  <button 
                    className="btn rounded-pill py-3 fw-medium border-0" 
                    type="submit"
                    onClick={handleOnclick}
                    style={{ 
                      backgroundColor: '#bc7c9c',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(188, 124, 156, 0.3)',
                      transition: 'all 0.3s ease',
                      backgroundImage: 'linear-gradient(to right, #bc7c9c, #d8a5b9)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundImage = 'linear-gradient(to right, #d8a5b9, #bc7c9c)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundImage = 'linear-gradient(to right, #bc7c9c, #d8a5b9)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="ms-2 mb-1">
                      <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.5.5 0 0 1-.928.086L7.5 12.5l-4.795 2.38a.5.5 0 0 1-.68-.664L6.919 8 1.717 2.77a.5.5 0 0 1 .112-.86l14.025-3.764a.5.5 0 0 1 .54.11z"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            zIndex: -1,
            background: 'radial-gradient(circle at 20% 50%, rgba(188, 124, 156, 0.1) 0%, transparent 30%)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default MessageInbox;
