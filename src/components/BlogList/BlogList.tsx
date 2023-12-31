import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import React from 'react'

import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'
import { pagesPath } from '~/src/utils/$path'

import { Meta } from '../Meta'

import styles from './BlogList.module.css'

type ContainerProps =
  | {
      contents: MicroCMSListResponse<Blog>['contents']
      currentPage: number
      pager: number[]
      selectedCategory?: (Category & MicroCMSListContent) | null
    }
  | {
      contents: MicroCMSListResponse<Blog>['contents']
      currentPage?: number | null
      pager?: number[] | null
      selectedCategory?: (Category & MicroCMSListContent) | null
    }

export type { ContainerProps as BlogListProps }

type Props = ContainerProps

const Component: React.FC<Props> = ({ contents, currentPage, pager, selectedCategory }) => (
  <>
    <ul>
      {contents.map((content) => (
        <li key={content.id} className={styles.list}>
          <Link href={pagesPath._slug(content.id).$url()} legacyBehavior>
            <a className={styles.link}>
              <picture>
                <source type="image/webp" data-srcset={content.ogimage.url + '?w=670&fm=webp'} />
                <img
                  data-src={content.ogimage.url + '?w=670'}
                  className={'lazyload ' + styles.ogimage}
                  alt="アイキャッチ画像"
                />
              </picture>
              <dl className={styles.content}>
                <dt className={styles.title}>{content.title}</dt>
                <dd>
                  <Meta
                    createdAt={content.publishedAt ?? content.createdAt}
                    author={content.writer?.name}
                    category={content.category}
                  />
                </dd>
              </dl>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    {pager && (
      <ul className={styles.pager}>
        {pager.map((page) => (
          <li key={page} className={styles.page} data-is-active={currentPage === page + 1}>
            <Link
              href={
                selectedCategory !== null && selectedCategory !== undefined
                  ? pagesPath.category
                      ._categoryId(selectedCategory.id)
                      .page._pageNumber(page + 1)
                      .$url()
                  : pagesPath.page._pageNumber(page + 1).$url()
              }
              legacyBehavior
            >
              <a>{page + 1}</a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
