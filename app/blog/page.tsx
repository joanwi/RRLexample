
import { Metadata } from "next";
import { blogs } from "@/lib/blogs";
import BlogsList from "@/components/BlogsList";

export const metadata: Metadata = {
  title: "RRL writing blogs: Tips, Guides & Best Practices | RRL Example",
  description:
    "Explore expert insights on Review of Related Literature writing. Get practical tips, step-by-step guides, and latest research writing strategies.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest insights and guides on writing review of related literature
        </p>
      </div>

      <BlogsList blogs={blogs} />

    </div>
  );
}
