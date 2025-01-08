import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const examples = {
  "remote-work-organizational-performance": {
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
- Performance measurement in remote settings

2. Technology and Infrastructure
- Digital tools adoption
- Communication platforms
- Security considerations
- IT infrastructure requirements

3. Employee Well-being
- Work-life balance
- Job satisfaction
- Mental health impacts
- Social connection

4. Management Practices
- Remote leadership strategies
- Performance monitoring
- Team building approaches
- Training and development

Implications:
The research suggests that successful remote work implementation requires a balanced approach considering technological, human, and organizational factors.

Future Research Directions:
- Long-term impacts on organizational culture
- Hybrid work model effectiveness
- Cross-cultural remote work dynamics
- Innovation in virtual environments`
  },
  "education-research-rrl": {
    title: "Education Research RRL",
    field: "Education",
    content: `This literature review examines modern teaching methodologies and their impact on student engagement in higher education settings.

Research Background:
Recent studies have shown increasing interest in innovative teaching approaches that enhance student engagement and learning outcomes. This review synthesizes findings from the past decade of educational research.

Key Findings:

1. Active Learning Methodologies
- Increased student participation
- Higher retention rates
- Improved critical thinking skills
- Enhanced problem-solving abilities

2. Technology Integration
- Impact of digital tools on learning
- Online learning effectiveness
- Hybrid teaching models
- Educational technology adoption

3. Student Engagement Factors
- Classroom environment
- Teaching strategies
- Assessment methods
- Peer interaction

Implications:
The findings suggest that incorporating active learning strategies and appropriate technology integration can significantly improve student engagement and learning outcomes.

Future Research Directions:
- Long-term effects of hybrid learning
- Impact of AI in education
- Cultural aspects of engagement
- Personalized learning approaches`
  },
  "psychology-research-rrl": {
    title: "Psychology Research RRL",
    field: "Psychology",
    content: `This review examines recent developments in cognitive behavioral therapy (CBT) approaches and their effectiveness in treating various psychological conditions.

Research Focus:
The review concentrates on CBT innovations and adaptations over the past five years, analyzing their applications and outcomes.

Key Areas:

1. Traditional vs. Modern CBT
- Evolution of techniques
- Integration with other therapies
- Evidence-based outcomes
- Treatment duration

2. Digital CBT Applications
- Online therapy platforms
- Mobile applications
- Virtual reality integration
- Remote therapy effectiveness

3. Specialized Applications
- Anxiety disorders
- Depression
- PTSD
- Eating disorders

Research Implications:
Modern CBT approaches show promising results, particularly when combined with digital tools and personalized treatment plans.

Future Directions:
- AI-assisted therapy
- Virtual reality applications
- Cultural adaptations
- Long-term effectiveness studies`
  }
}

export default function ExamplePage({ params }: { params: { slug: string } }) {
  const example = examples[params.slug as keyof typeof examples]

  if (!example) {
    return <div>Example not found</div>
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