import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExamplePage() {
 const example = {
    title: "Review of Related Literature on Remote Work and Organizational Performance",
    field: "Business Administration",
    content: `The advent of technology and the recent global pandemic have accelerated the adoption of remote work models across various sectors. This shift has prompted significant research within the field of Business Administration, focusing on how remote work impacts organizational performance, employee productivity, and overall business outcomes.

Research Background:
This literature review explores existing studies that investigate the relationship between remote work practices and organizational performance, highlighting the opportunities and challenges that organizations face in this new paradigm.

Key Findings:

1. Productivity and Performance
- Impact on individual productivity
- Team collaboration effectiveness
- Organizational efficiency metrics
- Performance measurement in remote settings`
  }
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{example.title}</CardTitle>
            <div className="text-sm text-muted-foreground mt-2">
              Field: {example.field}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {example.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}