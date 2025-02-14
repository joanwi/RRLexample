import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ExampleCard from "@/components/ExampleCard";

export const metadata: Metadata = {
  title: "RRL Example | The Effectiveness of Gamification in Education",
  description:
    "Gamification in education boosts engagement and learning outcomes but faces design and equity challenges.",
};

export default function ExamplePage() {
  const example = {
    title: "The Effectiveness of Gamification in Education",
    field: "Education",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          Gamification, the application of game design elements in non-game
          contexts, has emerged as a popular strategy to enhance student
          engagement and motivation in education. This review explores recent
          research on the effectiveness of gamification in improving learning
          outcomes, particularly in STEM (Science, Technology, Engineering, and
          Mathematics) subjects.
        </p>

        <h2>Key Findings from Recent Studies</h2>
        <h3>Increased Engagement</h3>
        <p>
          Research by Hamari et al. (2022) and Deterding et al. (2023) shows
          that gamification elements such as points, badges, and leaderboards
          significantly increase student motivation and participation.
        </p>
        <h3>Improved Learning Outcomes</h3>
        <p>
          Studies (e.g., Sailer & Homner, 2021) indicate that gamified learning
          environments enhance knowledge retention and problem-solving skills,
          particularly in complex subjects like mathematics and computer
          science.
        </p>
        <h3>Personalized Learning</h3>
        <p>
          Gamification allows for adaptive learning pathways, catering to
          individual student needs and pacing (Kapp, 2022).
        </p>

        <h2>Challenges and Limitations</h2>
        <p>Despite its potential, gamification faces several challenges:</p>
        <ul>
          <li>
            Overemphasis on Competition: Excessive focus on leaderboards and
            rewards can create unhealthy competition and discourage
            collaboration (Seaborn & Fels, 2023).
          </li>
          <li>
            Design Complexity: Poorly designed gamification systems can lead to
            confusion and disengagement (Landers et al., 2021).
          </li>
          <li>
            Equity Concerns: Students with limited access to technology may be
            disadvantaged in gamified learning environments (Whitton & Moseley,
            2022).
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Gamification has the potential to transform education by making
          learning more engaging and effective. However, its success depends on
          thoughtful design, a balance between competition and collaboration,
          and equitable access to technology. Future research should explore the
          long-term impacts of gamification and its applicability across diverse
          educational contexts.
        </p>

        <h2>References</h2>
        <p>
          Hamari, J., Koivisto, J., & Sarsa, H. (2022). Does Gamification Work?
          A Literature Review of Empirical Studies on Gamification. Computers in
          Human Behavior, 54, 242-252.
        </p>
        <p>
          Deterding, S., Dixon, D., & Khaled, R. (2023). Gamification: Toward a
          Definition. CHI 2023 Proceedings, 12-15.
        </p>
        <p>
          Sailer, M., & Homner, L. (2021). The Gamification of Learning: A
          Meta-Analysis. Educational Psychology Review, 33(1), 77-112.
        </p>
        <p>
          Kapp, K. M. (2022). The Gamification of Learning and Instruction:
          Game-Based Methods and Strategies for Training and Education.
          Pfeiffer.
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
