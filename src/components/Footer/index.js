/* eslint-disable jsx-a11y/anchor-is-valid */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row } from 'react-bootstrap'
import './index.scss'

function FooterPart() {
  return (
  <div className="footer">
    <Container>
      <footer className="py-5">
        <Row>
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img className="bi me-2" src={require('../../assets/logo.png')} alt="Logo"/>
            </a>
            <p className="text-muted">&copy; 2022</p>
          </div>

          <div className="col mb-3">

          </div>

          {/* <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div> */}

          <div className="col mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-row gap-3">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faTwitter} size='3x' color='white'/></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faTwitter} size='3x' color='white' /></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faTwitter} size='3x' color='white' /></a></li>
            </ul>
          </div>
        </Row>
      </footer>
    </Container>
  </div>
  )
}

export default FooterPart