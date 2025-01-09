import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata:Metadata={
  title:'Examples|Comprehensive rrl example',
}

const examples = [
  {
    id: 1,
    title: "The Effectiveness of Experiential Marketing on Consumer Engagement",
    introduction: "Experiential marketing has emerged as a compelling strategy for brands seeking to create memorable connections with consumers. This marketing approach focuses on engaging consumers through interactive experiences that are emotionally resonant and immersive. As competition intensifies across industries, brands are increasingly investing in experiential marketing to differentiate themselves and increase consumer engagement (Holt, 2002). This review examines the literature on experiential marketing, its effectiveness in engaging consumers, and the value it offers to brands.",
    field: "Marketing",
    slug: "effectiveness-of-experiential-marketing-on-consumer-engagement"
  },
  {
    id: 2,
    title: "The Role of Leadership in Fostering Organizational Change",
    introduction: "Leadership plays a crucial role in guiding organizations through change processes, which are increasingly essential in today's fast-paced and competitive business environment. The effectiveness of organizational change relies significantly on the capabilities and approaches of leaders. As global business dynamics evolve due to technological advancements, economic fluctuations, and societal shifts, understanding the interplay between leadership styles and successful change implementation has garnered scholarly attention. This review explores the literature on leadership's influence on organizational change, highlighting key theories, practical applications, and emerging trends.",
    field: "Business Administration",
    slug: "the-role-of-leadership-in-fostering-organizational-change"
  },
  {
    id: 3,
    title: "Sustainable Tourism Development and Its Impacts on Local Communities",
    introduction: "Sustainable tourism has gained significant attention in recent years as a response to the negative environmental, economic, and social impacts of traditional tourism practices. As global travel continues to increase, the need for sustainable approaches that balance tourism growth with ecological preservation and community well-being has become imperative. This review of the literature focuses on the principles of sustainable tourism development, its impacts on local communities, and the frameworks that guide its implementation.",
    field: "Tourism Management",
    slug: "sustainable-tourism-development-and-its-impacts-on-local-communities"
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