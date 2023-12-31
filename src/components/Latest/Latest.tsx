import { MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import React from 'react'

import { Blog } from '~/src/types/microCMS/Blog'
import { pagesPath } from '~/src/utils/$path'

import styles from './Latest.module.css'

type ContainerProps = {
  contents: MicroCMSListResponse<Blog>['contents']
}
type Props = ContainerProps

const Component: React.FC<Props> = ({ contents }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>最新の記事</h1>
    <ul>
      {contents.map((content) => (
        <li key={content.id} className={styles.list}>
          <Link href={pagesPath._slug(content.id).$url()} legacyBehavior>
            <a className={styles.link}>{content.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
