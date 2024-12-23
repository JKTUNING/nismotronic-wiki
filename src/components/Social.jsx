import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Social() {
  return (
    <div className='flex items-center justify-center gap-4'>
      <a href='https://www.facebook.com/nismotronic' target='_blank' rel='noopener noreferrer'>
        <FaFacebook />
      </a>
      <a href='https://www.instagram.com/jktuned' target='_blank' rel='noopener noreferrer'>
        <FaInstagram />
      </a>
      <a href='https://twitter.com/jktuning' target='_blank' rel='noopener noreferrer'>
        <FaTwitter />
      </a>
      <a href='https://www.youtube.com/@jktuned' target='_blank' rel='noopener noreferrer'>
        <FaYoutube />
      </a>
    </div>
  )
}
