import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Share2, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata:Metadata={
  title:'Blog|RRL Example - Comprehensive Guide to Review of Related Literature',
}

const blogPosts = [
  {
    id: 1,
    title: "RRL Example: A Guide to Effective Literature Reviews",
    description: "A Review of Related Literature (RRL) is an essential part of any research project. It provides you with a comprehensive overview of existing studies and helps you identify gaps in the current knowledge on your topic.",
    date: "2025-01-09",
    slug: "a-guide-to-effective-literature-reviews"
  },
  // {
  //   id: 2,
  //   title: "How to Structure Your Literature Review",
  //   description: "Learn the essential components and organization strategies for a comprehensive literature review.",
  //   date: "2024-03-20",
  //   slug: "structure-literature-review"
  // },
  
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest insights and guides on writing review of related literature
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>Administrator</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`https://reddit.com/submit?url=${encodeURIComponent(`https://example.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}