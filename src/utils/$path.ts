export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  _slug: (slug: string | number) => ({
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/[slug]' as const, query: { slug }, hash: url?.hash })
  }),
  "category": {
    _categoryId: (categoryId: string | number) => ({
      "page": {
        _pageNumber: (pageNumber: string | number) => ({
          $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/category/[categoryId]/page/[pageNumber]' as const, query: { categoryId, pageNumber }, hash: url?.hash })
        })
      }
    })
  },
  "feed_xml": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/feed.xml' as const, hash: url?.hash })
  },
  "page": {
    _pageNumber: (pageNumber: string | number) => ({
      $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/page/[pageNumber]' as const, query: { pageNumber }, hash: url?.hash })
    })
  },
  "search": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
};

export type PagesPath = typeof pagesPath;
