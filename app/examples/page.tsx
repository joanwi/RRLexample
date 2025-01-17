import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata:Metadata={
  title:'RRL Example | Comprehensive rrl example.',
  description:'Explore diverse Review of Related Literature (RRL) examples from multiple academic fields. Find well-structured samples to guide your research writing.',
}

const examples = [
  {
    id: 1,
    title: "The Impact of Nurse Staffing Levels on Patient Outcomes",
    introduction: "Nurse staffing levels have emerged as a critical topic within the nursing field, particularly due to their direct implications for patient safety, quality of care, and overall healthcare outcomes. Adequate staffing is essential for nurses to perform their duties effectively, maintain...",
    field: "Nursing",
    slug: "the-impact-of-nurse-staffing-levels-on-patient-outcomes"
  },
  {
    id: 2,
    title: "The Role of Telemedicine in Chronic Disease Management",
    introduction: "Telemedicine has become a crucial component of modern healthcare, providing remote clinical services through telecommunications technology. Its significance has intensified due to the COVID-19 pandemic, which necessitated alternative methods for delivering medical care...",
    field: "Medicine",
    slug: "the-role-of-telemedicine-in-chronic-disease-management"
  },
  {
    id: 3,
    title: "Sustainable Tourism Development and Its Impacts on Local Communities",
    introduction: "Sustainable tourism has gained significant attention in recent years as a response to the negative environmental, economic, and social impacts of traditional tourism practices. As global travel continues to increase, the need for sustainable approaches that balance...",
    field: "Tourism Management",
    slug: "sustainable-tourism-development-and-its-impacts-on-local-communities"
  },
  {
    id: 4,
    title: "The Effectiveness of Experiential Marketing on Consumer Engagement",
    introduction: "Experiential marketing has emerged as a compelling strategy for brands seeking to create memorable connections with consumers. This marketing approach focuses on engaging consumers through interactive experiences that are emotionally resonant and immersive...",
    field: "Marketing",
    slug: "effectiveness-of-experiential-marketing-on-consumer-engagement"
  },
  {
    id: 5,
    title: "The Role of Leadership in Fostering Organizational Change",
    introduction: "Leadership plays a crucial role in guiding organizations through change processes, which are increasingly essential in today's fast-paced and competitive business environment. The effectiveness of organizational change relies significantly on the capabilities and approaches...",
    field: "Business Administration",
    slug: "the-role-of-leadership-in-fostering-organizational-change"
  },
  
  
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
                    View Full RRL <ArrowRight className="ml-2 h-4 w-4" />
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