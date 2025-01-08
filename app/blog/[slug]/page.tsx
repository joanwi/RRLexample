"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const blogPosts = {
  "structure-literature-review": {
    title: "How to Structure Your Literature Review",
    content: `A well-structured literature review is essential for academic writing. Here's how to organize your review effectively:

1. Introduction
- Define your topic and scope
- State your research objectives
- Outline the structure of your review

2. Body
- Organize by themes or chronology
- Synthesize findings
- Compare and contrast studies

3. Conclusion
- Summarize key findings
- Identify research gaps
- Suggest future research directions`,
    date: "2024-03-20"
  },
  "common-mistakes-literature-reviews": {
    title: "Common Mistakes in Literature Reviews",
    content: `Avoid these common pitfalls when writing your literature review:

1. Lack of Critical Analysis
- Simply summarizing without evaluation
- Not identifying research gaps
- Missing methodological critiques

2. Poor Organization
- No clear structure
- Lack of logical flow
- Inconsistent formatting

3. Inadequate Coverage
- Missing key studies
- Over-reliance on outdated sources
- Limited database searches`,
    date: "2024-03-18"
  },
  "research-methods-literature-review": {
    title: "Research Methods for Literature Review",
    content: `Effective research methods for conducting a literature review:

1. Search Strategy
- Define keywords
- Select appropriate databases
- Use boolean operators

2. Evaluation Criteria
- Assess source credibility
- Check methodology
- Review citations

3. Data Organization
- Use reference management tools
- Create synthesis matrices
- Document search process`,
    date: "2024-03-15"
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>Administrator</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}