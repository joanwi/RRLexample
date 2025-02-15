import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ExampleCard from "@/components/ExampleCard";

export const metadata: Metadata = {
  title: "RRL Example | The Impact of Social Media on Adolescent Mental Health",
  description:
    "Examines social media's impact on adolescent mental health, noting both risks and benefits, and calling for further research to address causality and cultural differences.",
};

export default function ExamplePage() {
  const example = {
    title: "The Impact of Social Media on Adolescent Mental Health",
    field: "Psychology",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          The pervasive use of social media among adolescents has raised
          concerns about its impact on mental health. Recent studies suggest a
          complex relationship between social media use and psychological
          well-being, with both positive and negative effects. This review
          examines the latest research on how social media influences adolescent
          mental health, focusing on depression, anxiety, and self-esteem.
        </p>

        <h2>Key Findings from Recent Studies</h2>
        <p>
          <strong>Negative Effects:</strong> Excessive social media use has been
          linked to increased symptoms of depression and anxiety, particularly
          due to cyberbullying, social comparison, and sleep disruption (Twenge
          et al., 2023).
        </p>
        <p>
          <strong>Positive Effects:</strong> Social media can also provide
          social support, foster connections, and enhance self-expression,
          particularly for marginalized groups (Valkenburg et al., 2022).
        </p>
        <p>
          <strong>Moderating Factors:</strong> The impact of social media
          depends on factors such as usage patterns (active vs. passive use),
          content consumed, and individual vulnerabilities (Primack et al.,
          2023).
        </p>

        <h2>Challenges and Limitations</h2>
        <p>
          <strong>Causality Issues:</strong> Most studies are correlational,
          making it difficult to determine whether social media use causes
          mental health problems or vice versa (Orben & Przybylski, 2023).
        </p>
        <p>
          <strong>Measurement Variability:</strong> The lack of standardized
          measures for social media use and mental health outcomes complicates
          comparisons across studies (Rideout & Fox, 2022).
        </p>
        <p>
          <strong>Cultural Differences:</strong> The effects of social media may
          vary across cultures and socio-economic contexts, yet most research
          focuses on Western populations (Livingstone & Helsper, 2023).
        </p>

        <h2>Conclusion</h2>
        <p>
          Social media has a multifaceted impact on adolescent mental health,
          with both risks and benefits. Future research should address
          causality, develop standardized measures, and explore cultural
          differences to provide a more nuanced understanding of this
          relationship.
        </p>

        <h2>References</h2>
        <p>
          Twenge, J. M., et al. (2023). Social Media and Mental Health: A Review
          of the Evidence. <em>Journal of Adolescence</em>, 78, 1-10.
        </p>
        <p>
          Valkenburg, P. M., et al. (2022). The Benefits of Social Media for
          Adolescent Well-Being. <em>Developmental Psychology</em>, 58(4),
          789-801.
        </p>
        <p>
          Orben, A., & Przybylski, A. K. (2023). The Debate Over Social Media
          and Mental Health: A Critical Review. <em>Nature Human Behavior</em>,
          7(2), 123-135.
        </p>
        <p>
          Livingstone, S., & Helsper, E. J. (2023). Cultural Variations in the
          Effects of Social Media on Adolescents. <em>New Media & Society</em>,
          25(3), 456-473.
        </p>
      </>
    ),
  };
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>

        <ExampleCard example={example} />

        <Button variant="ghost" asChild className="mb-6">
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>
      </div>
    </div>
  );
}
