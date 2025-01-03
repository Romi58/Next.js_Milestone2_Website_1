import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; 2023 Delightful Cakes. All rights reserved.</p>
        <div className="social-icons">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
        </div>
      </div>
    </footer>
  )
}

