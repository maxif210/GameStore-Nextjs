import Image from 'next/image'
import React from 'react'
import styles from '../styles/Banner.module.css'


const Banner = ({background}) => {
  return (
    <article className={styles.banner}>
        <Image width={1440} height={450} src={background} alt="PsNow" layout='responsive' />
    </article>
  )
}

export default Banner