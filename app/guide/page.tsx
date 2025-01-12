import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata:Metadata={
  title:'Comprehensive Guide: Master rrl Quickly | RRL Example',
  description:'Discover our comprehensive guide to quickly master rrl. Get practical advice and step-by-step instructions to enhance your skills.',
}

export default function GuidePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">RRL Writing Guide</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to write an effective Related Literature Review with our comprehensive guide
        </p>
      </div>

      <Tabs defaultValue="basics" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="basics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What is RRL?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>A Related Literature Review (RRL) is a critical component of academic research that helps researchers understand existing knowledge and gaps in a specific field.</p>
              
              <h3 className="text-lg font-semibold mt-6">Key Purposes:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify research gaps</li>
                <li>Establish theoretical foundation</li>
                <li>Avoid research duplication</li>
                <li>Demonstrate academic literacy</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                RRL Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Introduction</h3>
                  <p>Introduce the research topic and scope of review</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Main Body</h3>
                  <p>Organize literature by themes or chronologically</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Conclusion</h3>
                  <p>Summarize key findings and research directions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="writing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Writing Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Select Topic</h3>
                    <p>Define research scope and keywords</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Collect Literature</h3>
                    <p>Search relevant literature using academic databases</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Analyze and Organize</h3>
                    <p>Analyze and organize literature by themes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Writing Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Stay Objective</h3>
                  <p>Analyze literature objectively, avoid personal bias</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Cite Properly</h3>
                  <p>Use proper citation format, avoid plagiarism</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Maintain Coherence</h3>
                  <p>Ensure logical flow between paragraphs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}