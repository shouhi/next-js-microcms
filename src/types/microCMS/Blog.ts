import { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'

import { Author } from './Author'
import { Category } from './Category'

export type Blog = {
  title: string
  category: Category & MicroCMSListContent
  toc_visible: boolean
  body: string
  description: string
  ogimage: MicroCMSImage
  writer?: Author & MicroCMSListContent
  related_blogs: MicroCMSListResponse<Blog>['contents']
}
