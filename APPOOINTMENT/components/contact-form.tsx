"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { createCalendarEvent } from "@/app/actions/calendar"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  addToCalendar: z.boolean().default(false),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [calendarResult, setCalendarResult] = useState<{ success: boolean; message: string } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      eventDate: "",
      eventTime: "",
      addToCalendar: false,
    },
  })

  const watchAddToCalendar = form.watch("addToCalendar")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Create a FormData object to pass to the server action
      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value.toString())
        }
      })

      // If the user wants to add to calendar, call the server action
      if (values.addToCalendar && values.eventDate && values.eventTime) {
        const result = await createCalendarEvent(formData)
        setCalendarResult(result)

        if (result.success) {
          toast({
            title: "Appointment booked!",
            description: "Your appointment has been added to the calendar.",
          })
        } else {
          toast({
            title: "Calendar error",
            description: result.message,
            variant: "destructive",
          })
        }
      }

      // Simulate API call for form submission (replace with your actual form submission logic)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)

      toast({
        title: "Form submitted!",
        description: "We've received your message and will get back to you soon.",
      })
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-semibold">Thank you!</h3>
            <p className="text-muted-foreground">Your message has been received. We'll get back to you shortly.</p>

            {calendarResult && (
              <div className={`mt-4 text-sm ${calendarResult.success ? "text-green-600" : "text-red-600"}`}>
                <p>{calendarResult.message}</p>
                {calendarResult.success && <p className="mt-1">You will receive a calendar invitation by email.</p>}
              </div>
            )}

            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setIsSubmitted(false)
                setCalendarResult(null)
                form.reset()
              }}
            >
              Send another message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What is this regarding?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="addToCalendar"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="cursor-pointer" onClick={() => field.onChange(!field.value)}>
                      Schedule an appointment
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">Book a time slot for a consultation</p>
                  </div>
                </FormItem>
              )}
            />

            {watchAddToCalendar && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Appointment Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} required={watchAddToCalendar} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Appointment Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} required={watchAddToCalendar} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
