"use client"

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator"
import { motion } from 'framer-motion';
import Image from 'next/image'
import { fetchBlogData } from './fetchBlogData';

interface BlogTag {
  id: string;
  name: string;
}

interface BlogPost {
  node: {
    tags: BlogTag[];
    title: string;
    brief: string;
    url: string;
  }
}

interface Author {
  id: string;
  username: string;
  name: string;
  profilePicture: string;
}

interface BlogData {
  url: string;
  author: Author;
  posts: {
    edges: BlogPost[];
  }
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogData | null>(null);

  useEffect(() => {
    async function getBlogs() {
      const fetchedBlogs = await fetchBlogData();
      setBlogs(fetchedBlogs);
    }

    getBlogs();
  }, []);

  if (!blogs) {
    return (
      <div className="container mx-auto py-24 flex justify-center items-center">
        <div className="animate-pulse text-muted-foreground">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {blogs.posts.edges.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow border border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Image
                    src={blogs.author.profilePicture}
                    alt={`${blogs.author.name}'s profile picture`}
                    width={36}
                    height={36}
                    className="rounded-full ring-1 ring-muted"
                  />
                  <div>
                    <CardTitle className="text-sm font-medium text-foreground">{blogs.author.name}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">@{blogs.author.username}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="py-4 flex-grow">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground">{post.node.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-2">{post.node.brief}</p>
                <Link
                  href={post.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read more
                </Link>
              </CardContent>
              <CardFooter className="pt-2 pb-4 flex flex-col gap-3 items-start">
                <div className="flex flex-wrap gap-1.5">
                  {post.node.tags.slice(0, 3).map((tag) => (
                    <div
                      key={tag.id}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
                <Link
                  href={blogs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'sm' }),
                    'mt-2 text-xs font-medium rounded-full'
                  )}
                >
                  Follow
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}