import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'JSON', value: 'json' },
          { title: 'Python', value: 'python' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Bash', value: 'bash' },
          { title: 'Shell', value: 'shell' },
          { title: 'SQL', value: 'sql' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Plain Text', value: 'text' },
        ],
      },
      initialValue: 'javascript',
    }),
    defineField({
      name: 'filename',
      title: 'Filename (optional)',
      type: 'string',
      description: 'Optional filename to display above the code block',
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
    },
    prepare({ language, filename }) {
      return {
        title: filename || 'Code Block',
        subtitle: language || 'javascript',
      }
    },
  },
})

