import Image from 'next/image'
import Logo from '../static/logo.png'

const styles = {
  wrapper: 'flex justify-center', 
  logoContainer: 'flex items-center flex-start'
}

const Header = () => {
  return(
  <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
          />
        </div>

        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div>Get Started</div>
        </div>
      </div>
    </div>
  )
}
export default Header