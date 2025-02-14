import * as React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Navigation() {
  return (
    <div className="bg-[#b3d9ff]">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">RRL Example</span>
        </Link>
        <nav className="flex space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/examples"
            className="text-foreground hover:text-primary transition-colors">
            Examples
          </Link>
          <Link
            href="/guide"
            className="text-foreground hover:text-primary transition-colors">
            Guide
          </Link>
          <Link
            href="/resources"
            className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </div>
  );
}
