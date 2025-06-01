import "./contact.css"
import ContactForm from "../components/contactForm"
import Divider from "../components/divider"

function Contact() {


  return (
  <>
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Get in touch</h2>
      <ContactForm/>
      <Divider/>
    </div>
  </>
  )
}

export default Contact;