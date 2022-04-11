import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'



const Footer = ({background}) => {
  return (
    <article className={styles.banner}>
        <Image width={1440} height={450} src={background} alt="Footer image" layout='responsive' />
        <div className={styles.socialMediaContainer}>
      
        
        
        
        </div>
    </article>
  )
}

export default Footer