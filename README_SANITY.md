# Sanity.io Integration Complete! 🎉

Your portfolio now uses Sanity.io for managing course content. Here's what's been set up:

## What's Been Configured

### 1. **Sanity Schemas** (`sanity/schemas/`)
- **Course Schema**: Title, description, category, image, duration, chapters, etc.
- **Chapter Schema**: Title, description, lessons, order
- **Lesson Schema**: Title, duration, content (PortableText), order

### 2. **Sanity Client** (`src/lib/sanity/`)
- Client configuration for fetching data
- Utility functions to transform Sanity data to your Course type
- GROQ queries for fetching courses, chapters, and lessons

### 3. **Updated Pages**
- `/courses` - Now fetches from Sanity
- `/courses/[courseId]` - Fetches course details from Sanity
- `/courses/[courseId]/[chapterId]/[lessonId]` - Fetches lesson content from Sanity
- `/studio` - Sanity Studio for content management

### 4. **PortableText Component**
- Renders rich text content from Sanity
- Handles both PortableText blocks and plain text (for backward compatibility)

## Next Steps

### 1. Set Up Your Sanity Project

1. **Create Sanity Account**: Go to [sanity.io](https://www.sanity.io) and sign up
2. **Create Project**: Create a new project in your Sanity dashboard
3. **Get Credentials**: Note your Project ID and Dataset name

### 2. Configure Environment Variables

Create `.env.local` file in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Initialize Sanity Studio

Run this command in your project:

```bash
npx sanity init
```

Follow the prompts:
- Choose "Use existing project"
- Select your project
- Choose "Clean project with no predefined schemas"
- Use default dataset configuration

### 4. Access Sanity Studio

1. Start your dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/studio`
3. Authenticate with your Sanity account

### 5. Create Your First Course

**Order of Creation:**
1. **Create Lessons first** (they don't depend on anything)
2. **Create Chapters** and link lessons to them
3. **Create Course** and link chapters to it

**Example Workflow:**
1. Go to "Lesson" → Create new
   - Title: "What and Why?"
   - Duration: 5
   - Content: Write your lesson content
   - Order: 1
   - Publish

2. Go to "Chapter" → Create new
   - Title: "Docker Fundamentals"
   - Description: "Learn about docker fundamentals"
   - Lessons: Link the lesson you just created
   - Order: 1
   - Publish

3. Go to "Course" → Create new
   - Title: "Docker for Newbs"
   - Slug: "docker-for-newbs" (auto-generated)
   - Description: "Welcome to the Introduction to Docker course"
   - Category: "Docker"
   - Upload course image
   - Duration: 40
   - Chapters: Link the chapter you created
   - Publish

### 6. View Your Courses

Once published, your courses will appear on `/courses` page automatically!

## Features

✅ **Rich Text Editing**: Use Sanity's PortableText editor for lesson content
✅ **Image Management**: Upload and manage course images through Sanity
✅ **Real-time Updates**: Changes in Sanity Studio reflect on your site
✅ **Progress Tracking**: Still works with localStorage (browser-based)
✅ **Backward Compatible**: Falls back to hardcoded data if Sanity is unavailable

## Troubleshooting

### Courses not showing?
- Check environment variables are set correctly
- Verify courses are published in Sanity Studio
- Check browser console for errors

### Studio not loading?
- Make sure you've run `npx sanity init`
- Verify your Project ID is correct in `.env.local`
- Check that `sanity.config.ts` exists in project root

### Images not displaying?
- Ensure images are uploaded through Sanity Studio
- Check image URLs in browser network tab
- Verify image asset references are correct

## Migration from Hardcoded Data

Your existing hardcoded courses in `src/config/courses.tsx` will still work as a fallback. To fully migrate:

1. Create all courses in Sanity Studio
2. Test that they appear correctly
3. Optionally remove or comment out `COURSES_DATA` from `src/config/courses.tsx`

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://slack.sanity.io/)
- Check `SANITY_SETUP.md` for detailed setup instructions

