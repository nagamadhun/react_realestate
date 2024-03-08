import './navbar.scss'

export default function Navbar() {
  return (
    <nav>
        <div className='left'>
          <a href='/' className='logo'>
            <img src='/logo.png'  alt='logo' />
            <span>ReactRealEstate</span>
          </a>
          <a href="/">Home</a><a href="/">About</a><a href="/">Contact</a><a href="/">Agents</a>
        </div>
        <div className='right'>
          <a href='/'>Sign In</a>
          <a href='/' className='register'>Sign Up</a>
        </div>
    </nav>
  )
}
