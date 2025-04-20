export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">404 - Page Not Found</h1>
        <p className="mb-8 text-muted-foreground">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-600 hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  )
}
