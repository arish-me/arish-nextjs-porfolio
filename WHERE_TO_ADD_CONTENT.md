# Where to Add Rich Content (Code, Images, Videos)

## Important: Two Different Places

### ✅ **Lesson Content** (Has Rich Content Support)
**Location:** When editing a **Lesson** document in Sanity Studio

1. Go to **Lessons** in the left sidebar
2. Open or create a lesson
3. Find the **"Content"** field
4. Click the **"+"** button in the Content field
5. You'll see options for:
   - **Code Block** - For code snippets
   - **Image** - For images
   - **Video** - For YouTube/Vimeo videos
   - **Block** - For text with formatting

**This is where you add code blocks, images, and videos!**

---

### ✅ **Course Long Description** (Now Has Rich Content Support)
**Location:** When editing a **Course** document in Sanity Studio

1. Go to **Courses** in the left sidebar
2. Open or create a course
3. Find the **"Long Description"** field
4. Click the **"+"** button in the Long Description field
5. You'll see the same options as Lesson Content

**Note:** The "Description" field is still plain text (for short summaries). Use "Long Description" for rich content.

---

## Quick Guide

### To Add Code Block:
1. Click **"+"** in Content or Long Description field
2. Select **"Code Block"**
3. Choose language
4. Paste your code

### To Add Image:
1. Click **"+"** in Content or Long Description field
2. Select **"Image"**
3. Upload or select image
4. Add alt text

### To Add Video:
1. Click **"+"** in Content or Long Description field
2. Select **"Video"**
3. Paste YouTube/Vimeo URL

---

## Visual Guide

```
Sanity Studio
├── Courses
│   └── [Your Course]
│       ├── Description (plain text) ❌ No rich content
│       └── Long Description ✅ Rich content here!
│
└── Lessons
    └── [Your Lesson]
        └── Content ✅ Rich content here!
            └── Click "+" to add:
                - Code Block
                - Image
                - Video
                - Text Block
```

---

## Troubleshooting

**"I don't see the + button"**
- Make sure you're in the **Content** field (for lessons) or **Long Description** field (for courses)
- The field should be empty or have existing content blocks
- Try clicking in the field first to activate it

**"I only see text options"**
- Make sure you're clicking the **"+"** button, not just typing
- The "+" appears when you click in an empty area or between blocks
- Look for the toolbar that appears when you select text

**"Code/Image/Video options don't appear"**
- Make sure you've restarted your dev server after schema changes
- Clear your browser cache
- Check that the schema files are saved correctly

---

## Summary

- **Lesson Content** = Full rich content support ✅
- **Course Long Description** = Full rich content support ✅
- **Course Description** = Plain text only (for short summaries)

The "+" button appears when you click in the Content or Long Description fields!

