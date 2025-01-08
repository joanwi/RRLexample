import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Database, Book, Library } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Research Resources</h1>
        <p className="text-xl text-muted-foreground">
          Access essential tools and databases for your literature review
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Academic Databases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Google Scholar</h3>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive academic search engine</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://scholar.google.com" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Access Database
                  </Link>
                </Button>
              </li>
              <li>
                <h3 className="font-semibold">JSTOR</h3>
                <p className="text-sm text-muted-foreground mb-2">Digital library of academic journals</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.jstor.org" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Access Database
                  </Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Citation Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Mendeley</h3>
                <p className="text-sm text-muted-foreground mb-2">Reference management software</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.mendeley.com" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                  </Link>
                </Button>
              </li>
              <li>
                <h3 className="font-semibold">Zotero</h3>
                <p className="text-sm text-muted-foreground mb-2">Free reference manager</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.zotero.org" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                  </Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Library className="h-5 w-5" />
              Writing Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Purdue OWL</h3>
                <p className="text-sm text-muted-foreground mb-2">Academic writing guidelines</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://owl.purdue.edu" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                  </Link>
                </Button>
              </li>
              <li>
                <h3 className="font-semibold">Grammarly</h3>
                <p className="text-sm text-muted-foreground mb-2">Writing assistance tool</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.grammarly.com" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                  </Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}