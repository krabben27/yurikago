import Vue from "vue"

Vue.prototype.$getBreadcrumbSchema = breadcrumbItemList => {
  const itemListElementValue = breadcrumbItemList.map((v, k) => {
    return {
      "@type": "ListItem",
      "position": k + 1,
      "name": v.name,
      "item": process.env.FRONT_URL + v.path
    }
  })

  const breadcrumbListSchema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElementValue
  }

  return JSON.stringify(breadcrumbListSchema)
}
