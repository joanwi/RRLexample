import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata:Metadata={
  title:'FAQ|rrl example',
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is RRL Example?",
      answer: "RRL Example is a comprehensive platform designed to help researchers, students, and academics write effective Review of Related Literature (RRL). We provide templates, examples, and resources to guide you through the RRL writing process."
    },
    {
      question: "Why should I use RRL Example?",
      answer: "RRL Example offers professionally crafted templates, real-world examples, and expert guidance to help you create high-quality literature reviews. Our resources are designed by academic professionals and updated regularly to reflect current research standards."
    },
    {
      question: "Who can use RRL Example?",
      answer: "RRL Example is designed for anyone working on academic research, including undergraduate students, graduate students, researchers, and academic professionals. Our resources cater to various academic fields and experience levels."
    },
    {
      question: "Are the templates free to use?",
      answer: "Yes, all RRL Example templates are free to download and use. We believe in making quality research resources accessible to everyone in the academic community."
    },
    {
      question: "Which citation formats are supported?",
      answer: "Our RRL Example templates support all major citation formats including APA, MLA, Chicago, and Harvard styles. Each template can be easily adapted to your required citation format."
    },
    {
      question: "How often is RRL Example updated?",
      answer: "RRL Example is regularly updated with new templates, examples, and resources. We continuously improve our content based on user feedback and changes in academic research standards."
    }
  ]

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Common questions about RRL Example and literature reviews
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}