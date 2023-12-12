import React from 'react'

import styles from './Conversion.module.css'

type ContainerProps = {
  id: string
}
type Props = ContainerProps

const list = ['エンジニアが集まるバー', '神戸三宮', 'スタッフがエンジニア']

const Component: React.FC<Props> = () => (
  <div>
    <h2 className={styles.pageTitle}>HACK.BARとは</h2>
    <ol className={styles.lists}>
      {list.map((item) => (
        <li key={item} className={styles.list}>
          <p>
            <strong>{item}</strong>
          </p>
        </li>
      ))}
    </ol>
    <div className={styles.actions}>
      <a className={styles.link} target="site" href="https://hackbar.jp">
        ⇒神戸三宮のエンジニアバー【HACK.BAR】の詳細を見る
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_link.svg`} alt="" />
      </a>
      <a
        target="site"
        href="https://www.google.com/maps/place/HACK.BAR/@34.6962096,135.1876281,17z/data=!3m1!4b1!4m6!3m5!1s0x60008fc239bb975b:0xbb67907eb12baaf3!8m2!3d34.6962052!4d135.1902084!16s%2Fg%2F11t298l8qf?entry=ttu"
      >
        <button className={styles.button}>Google MAPで場所を見る</button>
      </a>
    </div>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
