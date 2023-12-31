import React, { useMemo } from 'react'

import styles from './Share.module.css'

type ContainerProps = {
  id: string
  title: string
}

type Props = {
  shareList: {
    href: string
    src: string
    alt: string
  }[]
}

const Component: React.FC<Props> = ({ shareList }) => (
  <div className={styles.share}>
    <ul className={styles.shareLists}>
      {shareList.map((shareItem) => (
        <li key={shareItem.href} className={styles.shareList}>
          <a href={shareItem.href} target="_blank" rel="noopener noreferrer">
            <img src={shareItem.src} alt={shareItem.alt} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = ({ id, title }) => {
  const shareList: Props['shareList'] = useMemo(
    () => [
      {
        href: `https://twitter.com/intent/tweet?text=${title}&url=${process.env.NEXT_PUBLIC_SITE_URL}/${id}/&hashtags=ハックバー`,
        src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_twitter.svg`,
        alt: 'Twitter',
      },
      {
        href: `https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/${id}/`,
        src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_facebook.svg`,
        alt: 'Facebook',
      },
      {
        href: `https://b.hatena.ne.jp/entry/${process.env.NEXT_PUBLIC_SITE_URL}/${id}/`,
        src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_hatena.svg`,
        alt: 'はてなブックマーク',
      },
      {
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_feed.svg`,
        alt: 'フィード',
      },
    ],
    [id, title]
  )

  return <Component shareList={shareList} />
}

export default Container
