import React from 'react'
import '../css/style.css'
import '../css/footer.css'

function Footer() {
      return (
        <div className="footer">
        <ul className="nav">
            <li className="pt1">
                <h3>Company</h3>

                <a href="#">About Us</a> <br />
                <a href="#">Career</a> <br />
                <a href="#">Editorial Team</a> <br />
                <a href="#">Protection</a>
            </li>
            <li className="pt1">
                <h3>More</h3>

                <a href="#">Terms & Condition</a> <br />
                <a href="#">Privacy</a> <br />
                <a href="#">Advertise</a> <br />
                <a href="#">Join as Doctors</a>
            </li>
            <li className="pt1">
                <h3>Our partner</h3>

                <a href="#">dentist dssda</a> <br />
                <a href="#">dentist ssadsda</a> <br />
                <a href="#">dentist ase</a>
            </li>
            <li className="pt1">
                <h3>Contact</h3>

                <a href="#">351 street Franklin, MA 02038</a> <br />
                
                <a href="tel:+38972232111"><i className="fas fa-phone fa-rotate-90" style={{paddingTop:"5px"}}></i>  072 232 111</a> <br />
                
                <a href="tel:+38946200400"><i className="fas fa-phone fa-rotate-90" style={{paddingTop:"5px"}}></i>  046 200 400</a> <br /> <br />

                <h3>Social Media</h3>

                <div>
                    <a href="https://facebook.com" target="_blank" className="footerIcons"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" className="footerIcons"><i className="fab fa-twitter"></i></a>
                    <a href="https://google.com" target="_blank" className="footerIcons"><i className="fab fa-google-plus-g"></i></a>
                    <a href="https://instagram.com" target="_blank" className="footerIcons"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" className="footerIcons"><i className="fab fa-linkedin"></i></a>
                </div>

            </li>
        </ul>
</div>
      )
  }


export default Footer;