import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


interface Example {
  id: number;
  title: string;
  introduction: string;
  field: string;
  slug: string;
}
interface ExamplesListProps {
  examples: Example[];
}

export default function ExamplesList({examples}:ExamplesListProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {examples.map((example) => (
        <Card key={example.id}>
          <CardHeader>
            <h2 className="text-2xl font-bold">{example.title}</h2>
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
  );
}
