import "./contact.css"

function Contact() {


  return (
  <>
  
  <div className="container">
  <div className="contact-container">
       
            <h2 className="contact-title">Get in touch</h2>
            <div className="icon-container">
                <div className="icon"><i class="fa-solid fa-map-pin"></i></div>
                <div className="icon"><i class="fa-solid fa-phone"></i></div>
                <div className="icon"><i class="fa-solid fa-at"></i></div>
                <div className="icon"><i class="fa-brands fa-linkedin-in"></i></div>
            </div>

            <div className="info-container">
                <div className="info-box">
                <p className="info">Adress:</p>
                <p></p></div>
                <div className="info-box">
                <p className="info">Phone:</p>
                <p>123456789</p></div>
                <div className="info-box">
                <p className="info">Email: </p> 
                <p>hej@email.com</p></div>
                <div className="info-box">
                <p className="info">LinkedIn: </p>
                <p></p></div>
            </div>

             <form className="contact-form">
            <input type="text" placeholder="name" className="contact"></input>
            <input type="email" placeholder="email" className="contact"></input>
            <textarea placeholder="enter your message" className="message"></textarea>
            <button type="submit"> Send </button>
        </form>

  </div>
  </div>

    </>
  )
}

export default Contact;