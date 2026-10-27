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
    ` *[_type == 'product' && slug.current == $slug] | order(name asc) [0]{
      ...,
      "reviews": *[_type == "review" && product._ref == ^._id] | order(_createdAt desc){
        _id,
        authorName,
        rating,
        comment,
        _createdAt
      }
    }`
)
export { LATEST_BLOGS_QUERY, PRODUCT_BY_SLUG_QUERY }
