import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mb-8 text-muted-foreground">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </main>
  )
}
