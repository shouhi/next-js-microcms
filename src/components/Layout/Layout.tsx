import { MicroCMSListResponse } from 'microcms-js-sdk'
import React, { PropsWithChildren } from 'react'

import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'

import { Categories } from '../Categories'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Latest } from '../Latest'
import { Search } from '../Search'

import styles from './Layout.module.css'

type ContainerProps = {
  categories: MicroCMSListResponse<Category>['contents']
  latestArticles?: MicroCMSListResponse<Blog>['contents']
}

export type { ContainerProps as LayoutProps }

type Props = ContainerProps

const Component: React.FC<PropsWithChildren<Props>> = ({
  categories,
  children,
  latestArticles,
}) => (
  <>
    <Header />
    <main className={styles.divider}>
      <div className={styles.container}>{children}</div>
      <aside className={styles.aside}>
        <Search />
        <Categories categories={categories} />
        {latestArticles && <Latest contents={latestArticles} />}
      </aside>
    </main>
    <Footer />
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
