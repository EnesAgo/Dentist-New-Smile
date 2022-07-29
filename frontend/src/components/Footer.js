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

                <a href="#">One-Fitness</a> <br />
                <a href="#">One-Drugs</a> <br />
                <a href="#">One-Live</a>
            </li>
            <li className="pt1">
                <h3>Contact</h3>

                <a href="#">351 street Franklin, MA 02038</a> <br />
                <a href="tel:701-573-7582">701-573-7582 email@domain.com</a> <br /> <br />

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