import { createBreadcrumbSchemaObject } from '~/resources/schema/breadcrumb'
import { CommonHead } from '~/interfaces/Head'

export function createHeadObject(head: CommonHead) {
  const breadcrumbSchema = JSON.stringify(
    createBreadcrumbSchemaObject(head.breadcrumbSchema)
  )

  const headObject = {
    title: head.title,
    meta: [
      {
        name: 'description',
        content: head.description,
      },
      {
        property: 'og:title',
        content: `${head.title} | Yurikago Blog`,
      },
      {
        property: 'og:type',
        content: 'blog',
      },
      {
        property: 'og:description',
        content: head.description,
      },
      {
        property: 'og:url',
        content: (process.env.FRONT_URL as string) + head.path,
      },
    ],
    script: [
      // 構造化マークアップ
      {
        hid: 'breadcrumbSchema',
        innerHTML: breadcrumbSchema,
        type: 'application/ld+json',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      breadcrumbSchema: ['innerHTML'],
    },
  }

  return headObject
}
