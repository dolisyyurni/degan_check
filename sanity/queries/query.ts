import { defineQuery } from 'next-sanity'

const LATEST_BLOGS_QUERY = defineQuery(
    ` *[_type == 'blog' && isLatest == true] | order(name asc){
    ...,
    blogcategories[]->{
        title
    }
    }`
)

const PRODUCT_BY_SLUG_QUERY = defineQuery(
    ` *[_type == 'product' && status.current == $slug] | order(name asc) [0]`
)
export { LATEST_BLOGS_QUERY, PRODUCT_BY_SLUG_QUERY }