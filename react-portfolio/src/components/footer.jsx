import "./footer.css"

function Footer() {

  return (
<>
  <footer>
    <div className="footer-info">
      <p className="footer-text">Icons by <a href="https://www.Icons8.com">Icons8.com</a> and <a href="https://www.fontawesome.com">Font Awesome</a></p>
      <p className="footer-text">Vectors by <a href="https://www.vecteezy.com/">Vecteezy.com</a></p>
    </div>

    <div className="footer-copyright">
      <p className="footer-text"> Created by Sanne Johansson 2025</p>

       <div className="socials">                     
                <a href="#" target="_blank" aria-label="link to instagram">
                <i className="fa fa-instagram"></i></a>
                
                <a href="http://www.linkedin.com/in/sanne-johansson" target="_blank" aria-label="link to linked in">
                <i className="fa fa-linkedin"></i></a>

                <a href="http://github.com/ssannejohansson" target="_blank" aria-label="link to github">
                <i className="fa fa-github"></i></a>
              </div> 
    </div>
  </footer>
</>

  )
}

export default Footer;