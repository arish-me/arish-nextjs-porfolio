import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    // Use local storage during development
    // For production with GitHub, use: kind: 'github', repo: 'owner/repo'
    kind: 'local',
  },
  
  collections: {
    // Courses collection
    courses: collection({
      label: 'Courses',
      slugField: 'title',
      path: 'content/courses/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Docker', value: 'Docker' },
            { label: 'Linux', value: 'Linux' },
            { label: 'Vim', value: 'Vim' },
            { label: 'React', value: 'React' },
            { label: 'Rails', value: 'Rails' },
            { label: 'JavaScript', value: 'JavaScript' },
            { label: 'TypeScript', value: 'TypeScript' },
          ],
          defaultValue: 'Docker',
        }),
        image: fields.image({
          label: 'Course Image',
          directory: 'public/images/courses',
          publicPath: '/images/courses/',
        }),
        level: fields.select({
          label: 'Level',
          options: [
            { label: 'Beginner', value: 'Beginner' },
            { label: 'Intermediate', value: 'Intermediate' },
            { label: 'Advanced', value: 'Advanced' },
            { label: 'All levels', value: 'All levels' },
          ],
          defaultValue: 'All levels',
        }),
        isFree: fields.checkbox({
          label: 'Is Free',
          defaultValue: true,
        }),
        duration: fields.integer({
          label: 'Duration (minutes)',
          defaultValue: 60,
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: 'Long Description',
          options: {
            image: {
              directory: 'public/images/courses',
              publicPath: '/images/courses/',
            },
          },
        }),
      },
    }),

    // Chapters collection (nested under courses)
    chapters: collection({
      label: 'Chapters',
      slugField: 'title',
      path: 'content/chapters/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        courseSlug: fields.text({
          label: 'Course Slug',
          description: 'The slug of the course this chapter belongs to',
        }),
        order: fields.integer({
          label: 'Order',
          defaultValue: 0,
        }),
      },
    }),

    // Lessons collection
    lessons: collection({
      label: 'Lessons',
      slugField: 'title',
      path: 'content/lessons/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        chapterSlug: fields.text({
          label: 'Chapter Slug',
          description: 'The slug of the chapter this lesson belongs to',
        }),
        duration: fields.integer({
          label: 'Duration (minutes)',
          defaultValue: 5,
        }),
        order: fields.integer({
          label: 'Order within chapter',
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: 'Lesson Content',
          options: {
            image: {
              directory: 'public/images/lessons',
              publicPath: '/images/lessons/',
            },
          },
        }),
      },
    }),
  },
})

