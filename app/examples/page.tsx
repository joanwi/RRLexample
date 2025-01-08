import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    id: 1,
    title: "Review of Related Literature on Remote Work and Organizational Performance",
    introduction: "The advent of technology and the recent global pandemic have accelerated the adoption of remote work models across various sectors.",
    field: "Business Administration",
    slug: "remote-work-organizational-performance"
  },
  {
    id: 2,
    title: "Education Research RRL",
    introduction: "A comprehensive review of modern teaching methodologies and their impact on student engagement.",
    field: "Education",
    slug: "education-research-rrl"
  },
  {
    id: 3,
    title: "Psychology Research RRL",
    introduction: "An analysis of recent developments in cognitive behavioral therapy approaches.",
    field: "Psychology",
    slug: "psychology-research-rrl"
  },
  {
    id: 4,
    title: "Environmental Science RRL",
    introduction: "A review of sustainable urban development practices and their environmental impact.",
    field: "Environmental Science",
    slug: "environmental-science-rrl"
  }
]

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">RRL Examples</h1>
        <p className="text-xl text-muted-foreground">
          Browse through real-world examples of Review of Related Literature from various academic fields
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {examples.map((example) => (
          <Card key={example.id}>
            <CardHeader>
              <CardTitle>{example.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{example.introduction}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Field: {example.field}
                </div>
                <Button asChild>
                  <Link href={`/examples/${example.slug}`}>
                    View Example <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}