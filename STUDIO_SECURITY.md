# Sanity Studio Security

## Current Security Setup

The Sanity Studio at `/studio` is now protected with **two layers of security**:

### Layer 1: Password Protection (Next.js)
- A password is required to access the studio interface
- Password is set via environment variable: `NEXT_PUBLIC_STUDIO_PASSWORD`
- In development mode, access is automatically granted (no password needed)
- Password is stored in browser localStorage after successful login

### Layer 2: Sanity Authentication (Sanity.io)
- Even after accessing the studio, you must authenticate with Sanity
- Only users with access to your Sanity project can edit/publish content
- This is managed by Sanity's built-in authentication system

## Setup Instructions

### 1. Set Studio Password

Add to your `.env.local` file:

```env
NEXT_PUBLIC_STUDIO_PASSWORD=your-secure-password-here
```

**Important**: Use a strong password! This protects the studio interface.

### 2. Development vs Production

- **Development** (`npm run dev`): No password required - automatically authorized
- **Production**: Password required to access studio

### 3. Sanity Project Access

To actually edit content, you need:
1. Access to the Sanity Studio (password)
2. Sanity account with access to your project
3. Login through Sanity's authentication system

## Security Best Practices

### ✅ Recommended:
- Use a strong, unique password for `NEXT_PUBLIC_STUDIO_PASSWORD`
- Don't commit `.env.local` to git (it's already in `.gitignore`)
- Limit who has access to your Sanity project
- Use environment variables for all sensitive data

### ⚠️ Important Notes:
- The password is stored in localStorage (client-side)
- Anyone with the password can access the studio interface
- But they still need Sanity account access to edit content
- Consider using a more robust auth solution for production

## Alternative: Remove Studio from Production

If you don't want the studio accessible in production at all, you can:

1. **Option A**: Only enable studio in development
   - Modify the studio page to redirect in production
   - Or use environment-based routing

2. **Option B**: Use Sanity's hosted studio
   - Deploy studio separately at `studio.yourdomain.com`
   - Keep it completely separate from your main site

3. **Option C**: Use IP whitelisting
   - Add middleware to check IP addresses
   - Only allow specific IPs to access `/studio`

## Current Implementation

The current setup provides:
- ✅ Password protection for studio interface
- ✅ Sanity authentication for content editing
- ✅ Development mode bypass for convenience
- ✅ Simple, easy-to-use interface

This is suitable for most use cases, but you can enhance it further if needed.

