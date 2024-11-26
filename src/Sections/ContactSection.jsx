import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
    return (
        <footer className="contact-footer">
            <div className="contact-container">
                <div className="contact-info">
                    <a href="mailto:hackonauts@example.com" className="contact-item">
                        📧 hackonauts@example.com
                    </a>
                    <a href="tel:+1234567890" className="contact-item">
                        📱 +1234567890
                    </a>
                    <a href="https://maps.google.com" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="contact-item">
                        📍 Sir M Visvesvaraya Institute of Technology, Bangalore
                    </a>
                </div>

                <div className="social-handles">
                    <button className="social-btn">
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className="social-btn">
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button className="social-btn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button className="social-btn">
                        <FontAwesomeIcon icon={faGithub} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export { ContactSection };