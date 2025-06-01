import "./contactForm.css"
import Paperplane from "../assets/paperplane.svg"


function contactForm() {


  return (
  <>
    <div className="container">
      <div className="contactForm-container">
            <form className="contact-form">

              <div className="form-group">
                <input type="text" placeholder="full name" required></input>
                <label className="form-label">Full name</label>
              </div>

              <div className="form-group">
                <input type="email" placeholder="email" required></input>
                <label className="form-label">E-mail</label>
              </div>

              <div className="form-group">
                <input type="text" placeholder="subject"  required></input>
                <label className="form-label">Subject</label>
              </div>

              <div className="message">
                <textarea type="text" placeholder="enter your message"  required></textarea>
                <label className="form-label">Enter your message</label>
              </div>

              <button type="submit"> Send </button>
            </form>
      </div>
    </div>
  </>

  )
}

export default contactForm;
  