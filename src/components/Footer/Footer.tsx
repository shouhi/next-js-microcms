import React from 'react'

import styles from './Footer.module.css'

const list = [
  {
    href: '',
    text: '運営会社',
  },
  {
    href: '',
    text: '特定商取引法に基づく表記',
  },
  {
    href: '',
    text: '利用規約',
  },
  {
    href: '',
    text: 'プライバシーポリシー',
  },
  {
    href: '',
    text: 'お問い合わせ',
  },
]

const Component: React.FC = () => (
  <footer className={styles.footer}>
    <ul className={styles.lists}>
      {list.map((item) => (
        <li key={item.text} className={styles.list}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
    <p className={styles.cr}>© Inc.</p>
  </footer>
)

const Container: React.FC = () => {
  return <Component />
}

export default Container
