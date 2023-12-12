import { MicroCMSListContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'

import { Author } from '~/src/types/microCMS/Author'
import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'
import { apiClient } from '~/src/utils/microCMS/apiClient'

export const getAuthors = (queries?: MicroCMSQueries) => apiClient.getList<Author>({ endpoint: 'authors', queries })
export const getBlogs = (queries?: MicroCMSQueries) => apiClient.getList<Blog>({ endpoint: 'blog', queries })
export const getBlog = (queries?: MicroCMSQueries) => (contentId: string) =>
  apiClient.getListDetail<Blog>({ endpoint: 'blog', contentId, queries })
export const getCategories = (queries?: MicroCMSQueries) =>
  apiClient.getList<Category>({ endpoint: 'categories', queries })

export const limit = 10

type ReturnCommonGetGlobalContentsType = {
  currentPage: number
  contents: MicroCMSListResponse<Blog>['contents']
  pager: number[]
  categories: MicroCMSListResponse<Category>['contents']
}

export async function getGlobalContents(currentPage?: number): Promise<
  {
    selectedCategory: null
  } & ReturnCommonGetGlobalContentsType
>

export async function getGlobalContents(
  currentPage: number,
  categoryId: string
): Promise<
  {
    selectedCategory: Category & MicroCMSListContent
  } & ReturnCommonGetGlobalContentsType
>

export async function getGlobalContents(currentPage = 1, categoryId?: string) {
  const filters = categoryId === undefined ? '' : `category[equals]${categoryId}`
  const offset = (currentPage - 1) * limit

  const [{ contents, totalCount }, { contents: categories },] = await Promise.all(
    [
      getBlogs({ limit, filters, offset }),
      getCategories({ limit: 100, fields: 'id' }),
    ]
  )

  const pager = [...Array(Math.ceil(totalCount / limit)).keys()]

  if (categoryId === undefined) {
    return { currentPage, contents, pager,  categories,  selectedCategory: null }
  }

  const selectedCategory = categories.find((content) => content.id === categoryId)
  if (selectedCategory === undefined) throw Error()

  return { currentPage, contents, pager, categories, selectedCategory }
}
