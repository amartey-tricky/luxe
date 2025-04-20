"use server"

import { google } from "googleapis"
import { z } from "zod"

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  eventDate: z.string(),
  eventTime: z.string(),
})

export async function createCalendarEvent(formData: FormData) {
  try {
    // Parse and validate the form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      eventDate: formData.get("eventDate") as string,
      eventTime: formData.get("eventTime") as string,
    }

    const validatedData = formSchema.parse(data)

    // Set up OAuth2 client with your credentials
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    )

    // Set credentials using a refresh token or other method
    // For this example, we'll use a JWT client approach which is better for server-side applications
    const jwtClient = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/calendar"],
    )

    // Create calendar client
    const calendar = google.calendar({ version: "v3", auth: jwtClient })

    // Combine date and time
    const eventDateTime = new Date(`${validatedData.eventDate}T${validatedData.eventTime}`)

    // Set end time to 1 hour after start time
    const endDateTime = new Date(eventDateTime.getTime() + 60 * 60 * 1000)

    // Create the event
    const event = {
      summary: validatedData.subject,
      description: `From: ${validatedData.name} (${validatedData.email})\n\n${validatedData.message}`,
      start: {
        dateTime: eventDateTime.toISOString(),
        timeZone: "UTC",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "UTC",
      },
      attendees: [{ email: validatedData.email }],
    }

    // Insert the event into your calendar
    const response = await calendar.events.insert({
      calendarId: "primary", // This will use your primary calendar
      requestBody: event,
      sendUpdates: "all", // This will send email notifications to attendees
    })

    return {
      success: true,
      message: "Appointment booked successfully!",
      eventId: response.data.id,
    }
  } catch (error) {
    console.error("Error creating calendar event:", error)
    return {
      success: false,
      message: "Failed to book appointment. Please try again.",
    }
  }
}
