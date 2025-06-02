import "./contactForm.css"
import Paperplane from "../assets/paperplane.svg"


function contactForm() {


  return (
  <>
    <div className="container">
      <div className="contactForm-container">
            <form className="contact-form" action="https://formsubmit.co/843f2cd35d767780469564ec7604709e" method="POST">

              <div className="form-group">
                <input type="text" name="name" placeholder="full name" required></input>
                <label className="form-label">Full name</label>
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder="email" required></input>
                <label className="form-label">E-mail</label>
              </div>

              <div className="form-group">
                <input type="text" name="subject" placeholder="subject"  required></input>
                <label className="form-label">Subject</label>
              </div>

              <div className="message">
                <textarea type="text" name="message" placeholder="enter your message"  required></textarea>
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
  