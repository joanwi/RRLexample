import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExampleCardProps {
  example: {
    title: string;
    field: string;
    content: JSX.Element;
  };
}

export default function ExampleCard({ example }: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{example.title}</CardTitle>
        <div className="text-sm text-muted-foreground mt-2">
          Field: {example.field}
        </div>
      </CardHeader>
      <CardContent className="prose max-w-none">{example.content}</CardContent>
    </Card>
  );
}
