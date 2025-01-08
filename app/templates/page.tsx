import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, BookOpen, FileCheck } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">RRL Templates</h1>
        <p className="text-xl text-muted-foreground">
          Download professionally crafted templates to kickstart your literature review
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Basic RRL Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">A simple template with basic sections and formatting guidelines.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Pre-formatted sections</li>
              <li>Citation guidelines</li>
              <li>Writing prompts</li>
            </ul>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Template
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Advanced Research Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Comprehensive template for in-depth literature reviews.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Detailed structure</li>
              <li>Analysis frameworks</li>
              <li>Research matrices</li>
            </ul>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Template
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Systematic Review Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Template designed for systematic literature reviews.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>PRISMA guidelines</li>
              <li>Quality assessment tools</li>
              <li>Data extraction forms</li>
            </ul>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Template
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Citation Management Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Template focused on organizing citations and references.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Citation tracking</li>
              <li>Reference management</li>
              <li>Bibliography formats</li>
            </ul>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Template
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}