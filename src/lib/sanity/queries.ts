import { groq } from 'next-sanity'

export const coursesQuery = groq`
  *[_type == "course"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    category,
    "image": image.asset->url,
    duration,
    isFree,
    level,
    studentsEnrolled,
    lastUpdated,
    "chapters": chapters[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      "lessons": lessons[]-> {
        _id,
        title,
        "slug": slug.current,
        duration,
        content,
        order
      } | order(order asc),
      order
    } | order(order asc)
  }
`

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    category,
    "image": image.asset->url,
    duration,
    isFree,
    level,
    studentsEnrolled,
    lastUpdated,
    "chapters": chapters[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      "lessons": lessons[]-> {
        _id,
        title,
        "slug": slug.current,
        duration,
        content,
        order
      } | order(order asc),
      order
    } | order(order asc)
  }
`

export const courseByIdQuery = groq`
  *[_type == "course" && _id == $id][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    category,
    "image": image.asset->url,
    duration,
    isFree,
    level,
    studentsEnrolled,
    lastUpdated,
    "chapters": chapters[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      "lessons": lessons[]-> {
        _id,
        title,
        "slug": slug.current,
        duration,
        content,
        order
      } | order(order asc),
      order
    } | order(order asc)
  }
`

