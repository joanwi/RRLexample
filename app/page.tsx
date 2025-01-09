import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Library, GraduationCap, Users, BookMarked, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted relative">
        <Image
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
          alt="rrl example"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="container mx-auto max-w-4xl relative">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Master Your Review of Related Literature
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive guides, rrl examples, and resources to help you write an outstanding literature review
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/guide">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/examples">View Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/guide" className="block h-full">
              <Card className="transition-transform hover:scale-105 h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center min-h-[280px] p-6">
                  <BookOpen className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Guide</h3>
                  <p className="text-muted-foreground">
                    Step-by-step instructions on writing an effective literature review
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/examples" className="block h-full">
              <Card className="transition-transform hover:scale-105 h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center min-h-[280px] p-6">
                  <FileText className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Real Examples</h3>
                  <p className="text-muted-foreground">
                    Browse through real-world examples from various academic fields
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/resources" className="block h-full">
              <Card className="transition-transform hover:scale-105 h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center min-h-[280px] p-6">
                  <Library className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Resources</h3>
                  <p className="text-muted-foreground">
                    Access to literature databases and research tools
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Benefit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[#f0f7ff] min-h-[280px]">
              <div className="h-16 w-16 rounded-full bg-[#b3d9ff] flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p className="text-muted-foreground">
                Perfect for undergraduate and graduate students working on research papers and theses
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[#f0f7ff] min-h-[280px]">
              <div className="h-16 w-16 rounded-full bg-[#b3d9ff] flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Researchers</h3>
              <p className="text-muted-foreground">
                Essential for academic researchers conducting comprehensive literature reviews
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[#f0f7ff] min-h-[280px]">
              <div className="h-16 w-16 rounded-full bg-[#b3d9ff] flex items-center justify-center mb-4">
                <BookMarked className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scholars</h3>
              <p className="text-muted-foreground">
                Valuable for scholars and academics publishing research papers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">What is a Review of Related Literature?</h3>
                <p className="text-muted-foreground">
                  A comprehensive analysis of existing research and publications related to your research topic, helping establish the theoretical foundation for your study.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Who can use these resources?</h3>
                <p className="text-muted-foreground">
                  Our platform is designed for students, researchers, and academics working on literature reviews across various fields.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Are the templates free?</h3>
                <p className="text-muted-foreground">
                  Yes, all templates and resources are free to download and use for your research.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/faq">
                View More FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white relative">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
          alt="Writing background"
          fill
          className="object-cover opacity-5"
        />
        <div className="container mx-auto text-center max-w-3xl relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Literature Review?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with our comprehensive resources and take your research to the next level
          </p>
          <Button asChild size="lg">
            <Link href="/guide">Start Writing Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}