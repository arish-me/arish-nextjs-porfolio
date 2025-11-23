# Content Guide: Adding Code Blocks, Images, and Videos

## How to Add Rich Content in Sanity Studio

### 1. **Code Blocks**

When editing a lesson in Sanity Studio:

1. Click the **"+"** button in the content editor
2. Select **"Code Block"**
3. Choose the programming language from the dropdown
4. Paste or type your code
5. (Optional) Add a filename to display above the code block

**Supported Languages:**
- JavaScript, TypeScript
- HTML, CSS
- Python, Ruby
- JSON, SQL
- Bash, Shell
- Markdown, Plain Text

**Example:**
```
Language: JavaScript
Code:
function greet(name) {
  return `Hello, ${name}!`;
}
```

### 2. **Images**

1. Click the **"+"** button in the content editor
2. Select **"Image"**
3. Upload an image or select from existing assets
4. Add alt text for accessibility
5. (Optional) Add a caption

**Tips:**
- Images are automatically optimized by Sanity
- Use the hotspot feature to control focus/cropping
- Recommended size: 800x450px or similar aspect ratio

### 3. **Videos**

1. Click the **"+"** button in the content editor
2. Select **"Video"**
3. Paste the video URL

**Supported Platforms:**
- **YouTube**: Paste any YouTube URL (e.g., `https://www.youtube.com/watch?v=...`)
- **Vimeo**: Paste any Vimeo URL (e.g., `https://vimeo.com/...`)
- **Direct Video**: Paste direct video file URLs (`.mp4`, `.webm`, etc.)

**Example URLs:**
- YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Vimeo: `https://vimeo.com/123456789`
- Direct: `https://example.com/video.mp4`

### 4. **Inline Code**

For inline code snippets within text:

1. Select the text you want to format as code
2. Click the **"Code"** button in the toolbar (looks like `</>`)
3. The text will appear in a monospace font with a background

### 5. **Links**

1. Select the text you want to link
2. Click the **"Link"** button in the toolbar
3. Enter the URL
4. External links open in a new tab automatically

### 6. **Text Formatting**

Available formatting options:
- **Bold** (Strong)
- *Italic* (Emphasis)
- Headings (H1, H2, H3)
- Blockquotes
- Bullet lists

## Best Practices

### Code Blocks
- Always specify the correct language for proper syntax highlighting
- Use filenames to help students understand context
- Keep code blocks focused and readable

### Images
- Use descriptive alt text for accessibility
- Optimize images before uploading (recommended: WebP format)
- Use captions to provide context

### Videos
- Test video URLs before publishing
- Use captions to describe video content
- Keep videos relevant to the lesson content

### Content Structure
- Use headings to break up long content
- Mix text, code, images, and videos for engaging lessons
- Keep paragraphs short and focused

## Example Lesson Structure

```
[Heading] What is Docker?

[Paragraph] Docker is a containerization platform...

[Code Block] 
Language: bash
docker --version

[Image]
Alt: Docker logo
Caption: Docker makes containerization easy

[Video]
URL: https://www.youtube.com/watch?v=...
Caption: Watch this introduction to Docker

[Paragraph] Now that you understand the basics...
```

## Troubleshooting

### Code blocks not showing syntax highlighting?
- Make sure you've selected the correct language
- Check that the code block is published

### Images not loading?
- Verify the image is uploaded and published in Sanity
- Check that `cdn.sanity.io` is in your `next.config.ts`

### Videos not embedding?
- Verify the URL is correct
- YouTube/Vimeo URLs should be the full watch page URL
- Direct video URLs must be publicly accessible

### Content not appearing?
- Make sure you've clicked "Publish" on the lesson
- Check browser console for errors
- Verify Sanity environment variables are set

