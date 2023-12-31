import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'
import React from 'react'

import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'

import { Breadcrumb } from '../Breadcrumb'
import { Conversion } from '../Conversion'
import { Layout } from '../Layout'
import { Meta } from '../Meta'
import { Post } from '../Post'
import { RelatedBlogs } from '../RelatedBlogs'
import { Share } from '../Share'
import { Toc } from '../Toc'
import { TocProps } from '../Toc/Toc'
import { Writer } from '../Writer'

import styles from './BlogDetailLayout.module.css'

type ContainerProps = {
  categories: MicroCMSListResponse<Category>['contents']
  content: Blog & MicroCMSListContent
  toc: TocProps['toc']
  popularArticles: MicroCMSListResponse<Blog>['contents']
  latestArticles: MicroCMSListResponse<Blog>['contents']
}

export type { ContainerProps as BlogDetailLayoutProps }

type Props = ContainerProps

const Component: React.FC<Props> = ({ content, toc, ...layoutProps }) => (
  <Layout {...layoutProps}>
    <div className={styles.ogimageWrap}>
      <picture>
        <source
          media="(min-width: 1160px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=820&fm=webp, ${content.ogimage.url}?w=1640&fm=webp 2x`}
        />
        <source
          media="(min-width: 820px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=740&fm=webp, ${content.ogimage.url}?w=1480&fm=webp 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=728&fm=webp, ${content.ogimage.url}?w=1456&fm=webp 2x`}
        />
        <source
          media="(max-width: 768px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=375&fm=webp, ${content.ogimage.url}?w=750&fm=webp 2x`}
        />
        <img src={content.ogimage.url + '?w=820&q=100'} className={styles.ogimage} alt="" />
      </picture>
    </div>
    <Breadcrumb category={content.category} />
    <div className={styles.main}>
      <Share id={content.id} title={content.title} />
      <div className={styles.container}>
        <h1 className={styles.title}>{content.title}</h1>
        <Meta
          createdAt={content.publishedAt ?? content.createdAt}
          author={content.writer?.name}
          category={content.category}
        />
        {content.toc_visible && <Toc toc={toc} />}
        <Post body={content.body} />
        {content.writer && <Writer writer={content.writer} />}
        <Conversion id={content.id} />
        {content.related_blogs.length > 0 && <RelatedBlogs blogs={content.related_blogs} />}
      </div>
    </div>
  </Layout>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
