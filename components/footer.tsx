export function Footer() {
  return (
    <footer className="bg-[#b3d9ff] py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RRL Example. All rights reserved.
        </p>
      </div>
    </footer>
  )
}