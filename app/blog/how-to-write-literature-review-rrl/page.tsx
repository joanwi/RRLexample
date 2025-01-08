import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function RRLGuidePage() {
  const post = {
    title: "How to Write a Literature Review in Research: RRL Example & Guide",
    date: "2024-03-21",
    content: `A Review of Related Literature (RRL) is an essential part of any research project. It provides you with a comprehensive overview of existing studies and helps you identify gaps in the current knowledge on your topic. By understanding what has already been explored, you can better frame your research questions and objectives.

Key Components of an RRL:

1. Introduction
- Clear statement of the research topic
- Scope and objectives of the review
- Overview of the literature selection criteria

2. Main Body
- Systematic presentation of existing research
- Critical analysis of methodologies
- Synthesis of findings and arguments
- Identification of research gaps

3. Conclusion
- Summary of key findings
- Implications for current research
- Recommendations for future studies

Writing Tips:

1. Organization
- Use a logical structure
- Group related studies together
- Maintain a clear flow of ideas

2. Analysis
- Compare and contrast different studies
- Evaluate research methodologies
- Identify patterns and trends

3. Citation
- Use proper citation format
- Include recent sources
- Maintain academic integrity

Remember: A good RRL doesn't just summarize existing research—it analyzes, synthesizes, and connects different studies to provide a comprehensive understanding of your research topic.`
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
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://reddit.com/submit?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
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