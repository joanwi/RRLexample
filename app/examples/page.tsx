import { Metadata } from "next";
import { examples } from "@/lib/examples";
import ExamplesList from "@/components/ExamplesList";

export const metadata: Metadata = {
  title: "RRL Example | Comprehensive rrl example.",
  description:
    "Explore diverse Review of Related Literature (RRL) examples from multiple academic fields. Find well-structured samples to guide your research writing.",
};

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">RRL Examples</h1>
        <p className="text-xl text-muted-foreground">
          Browse through real-world examples of Review of Related Literature
          from various academic fields
        </p>
      </div>

      <ExamplesList examples={examples} />
      
    </div>
  );
}
