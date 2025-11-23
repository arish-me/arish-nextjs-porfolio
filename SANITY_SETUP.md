# Sanity.io Setup Guide

## Step 1: Create a Sanity Account and Project

1. Go to [sanity.io](https://www.sanity.io) and sign up for a free account
2. Create a new project
3. Note your **Project ID** and **Dataset** name (usually "production")

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Sanity credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Step 3: Install Sanity CLI (Optional but Recommended)

```bash
npm install -g @sanity/cli
```

## Step 4: Initialize Sanity Studio

Run this command in your project root:

```bash
npx sanity init
```

When prompted:
- Choose "Create new project" or "Use existing project"
- Select your project
- Choose "Blog (schema)" or "Clean project with no predefined schemas"
- Choose "Yes" to use the default dataset configuration
- The studio will be set up at `/studio`

## Step 5: Access Sanity Studio

1. Start your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/studio` to access the Sanity Studio

3. You'll need to authenticate with your Sanity account

## Step 6: Create Your First Course

1. In Sanity Studio, you'll see "Course", "Chapter", and "Lesson" document types
2. Create a Chapter first (e.g., "Docker Fundamentals")
3. Create Lessons and link them to the Chapter
4. Create a Course and link the Chapters to it
5. Add course image, description, and other metadata

## Step 7: Publish Your Content

- Click "Publish" on each document to make it available via the API
- Your courses will automatically appear on `/courses` page

## Troubleshooting

### Images not showing
- Make sure you've uploaded images through Sanity Studio
- Check that image URLs are being generated correctly

### Courses not appearing
- Verify your environment variables are set correctly
- Check browser console for API errors
- Ensure courses are published in Sanity Studio

### Studio not loading
- Make sure you've run `npx sanity init`
- Check that `sanity.config.ts` exists in the root
- Verify your project ID is correct

## Next Steps

- Customize the Sanity schemas in `sanity/schemas/`
- Add more fields to courses, chapters, or lessons
- Set up webhooks for automatic rebuilds on content changes
- Configure image optimization settings

