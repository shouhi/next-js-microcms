import React, { useEffect, useState } from 'react'

import { headerId } from '~/src/utils/ids'

import styles from './Header.module.css'

type Props = {
  params: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  toggleOpen: () => void
}

const LinkList = [
  {
    href: 'https://hackbar.jp/#about',
    text: 'About',
  },
  {
    href: 'https://hackbar.jp/#menu',
    text: 'Menu',
  },
  {
    href: 'https://hackbar.jp/#gallery',
    text: 'Garally',
  },
  {
    href: 'https://hackbar.jp/#community',
    text: 'Community',
  },
  {
    href: 'https://hackbar.jp/#sponsored',
    text: 'Sponsored',
  },
  {
    href: 'https://hackbar.jp/#testimonials',
    text: 'Testimonials',
  },
  {
    href: 'https://hackbar.jp/blog',
    text: 'Blog',
  }
]

const Component: React.FC<Props> = ({ isOpen, toggleOpen, setIsOpen }) => (
  <>
    <header id={headerId} className={styles.header}>
      <h1 className={styles.logo}>
        <a href="https://microcms.io">
          <img className={styles.logoImg} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo2.svg`} alt="microCMS" />
        </a>
      </h1>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_menu.svg`} alt="menu" />
      </button>
      {isOpen && <div className={styles.mask} onClick={() => setIsOpen(false)}></div>}
      <div className={styles.menu} data-is-open={isOpen}>
        <ul className={styles.lists}>
          {LinkList.map((link) => (
            <li key={link.text} className={styles.list}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        {/* <ul className={styles.lists}>
          <li className={styles.list}>
            <a className={styles.signin} href="https://app.microcms.io/signin">
              ログイン
            </a>
          </li>
          <li className={styles.list}>
            <a className={styles.signup} href={`https://app.microcms.io${params}`}>
              新規登録
            </a>
          </li>
        </ul> */}
      </div>
    </header>
    <div className={styles.empty}></div>
  </>
)

const Container: React.FC = () => {
  const [params, setParams] = useState('')
  useEffect(() => {
    setParams(window.location.search)
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prevValue) => !prevValue)

  return <Component params={params} isOpen={isOpen} setIsOpen={setIsOpen} toggleOpen={toggleOpen} />
}

export default Container
