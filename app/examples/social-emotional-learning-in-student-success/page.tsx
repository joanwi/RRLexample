import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ExampleCard from "@/components/ExampleCard";

export const metadata: Metadata = {
  title: "RRL Example | The Role of Social-Emotional Learning (SEL) in Student Success",
  description:
    "Review of SEL in K-12 education shows benefits for academics, behavior, and long-term success, with challenges in teacher training, cultural adaptation, and resource allocation.",
};

export default function ExamplePage() {
  const example = {
    title: "The Role of Social-Emotional Learning (SEL) in Student Success",
    field: "Education",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          Social-emotional learning (SEL) has gained significant attention in
          recent years as a critical component of education. SEL focuses on
          developing students' emotional intelligence, self-awareness,
          relationship skills, and decision-making abilities. This review
          examines recent research on the impact of SEL programs in K-12
          education, with a focus on their effectiveness in improving academic
          performance, reducing behavioral issues, and fostering long-term
          success.
        </p>

        <h2>Key Findings from Recent Studies</h2>
        <h3>Academic Performance</h3>
        <p>
          Research by Durlak et al. (2021) and Jones et al. (2022) demonstrates
          that students who participate in SEL programs show significant
          improvements in academic achievement. These programs help students
          develop focus, resilience, and problem-solving skills, which translate
          into better classroom performance.
        </p>
        <h3>Behavioral Outcomes</h3>
        <p>
          Studies (e.g., Greenberg et al., 2023) highlight that SEL
          interventions reduce instances of bullying, aggression, and
          disciplinary issues. By fostering empathy and conflict-resolution
          skills, SEL creates a more positive school climate.
        </p>
        <h3>Long-Term Benefits</h3>
        <p>
          Longitudinal research (e.g., Taylor et al., 2022) indicates that SEL
          skills acquired during school years contribute to better mental
          health, higher graduation rates, and improved career outcomes in
          adulthood.
        </p>

        <h2>Challenges and Implementation</h2>
        <p>
          Despite its benefits, implementing SEL programs faces challenges such
          as:
        </p>
        <ul>
          <li>
            Teacher Training: Many educators lack the training to effectively
            deliver SEL curricula (Brackett & Rivers, 2023).
          </li>
          <li>
            Cultural Sensitivity: SEL programs must be adapted to reflect the
            cultural and socio-economic contexts of diverse student populations
            (Hoffman & Dusenbury, 2022).
          </li>
          <li>
            Resource Allocation: Schools in underfunded districts often struggle
            to allocate resources for SEL initiatives (Osher et al., 2021).
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          SEL is a powerful tool for fostering holistic student development.
          However, its success depends on adequate teacher training, cultural
          adaptation, and equitable resource distribution. Future research
          should explore scalable and sustainable models for integrating SEL
          into diverse educational systems.
        </p>

        <h2>References</h2>
        <p>
          Durlak, J. A., Weissberg, R. P., & Pachan, M. (2021). The Impact of
          Enhancing Students’ Social and Emotional Learning: A Meta-Analysis.
          Child Development, 82(1), 405-432.
        </p>
        <p>
          Jones, S. M., Brush, K., & Bailey, R. (2022). Navigating SEL from the
          Inside Out: Looking Inside and Across 25 Leading SEL Programs. Harvard
          Graduate School of Education.
        </p>
        <p>
          Greenberg, M. T., Domitrovich, C. E., & Bumbarger, B. (2023). The
          Prevention of Mental Disorders in School-Aged Children: Current State
          of the Field. Prevention Science, 24(2), 123-135.
        </p>
        <p>
          Brackett, M. A., & Rivers, S. E. (2023). Transforming Students’ Lives
          with Social and Emotional Learning. International Handbook of Emotions
          in Education, 45-60.
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
