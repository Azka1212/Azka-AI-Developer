"use server"

import { supabase, type ContactSubmission } from "@/lib/supabase"

export async function submitContactForm(formData: FormData) {
  try {
    const submission: Omit<ContactSubmission, "id" | "created_at"> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!submission.name || !submission.email || !submission.subject || !submission.message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(submission.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // For demo purposes, simulate successful submission
      console.log("Demo mode - Contact form submission:", submission)
      return {
        success: true,
        message: "Thank you for your message! (Demo mode - Supabase not configured)",
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("contact_submissions").insert([submission]).select().single()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit form. Please try again.",
      }
    }

    return {
      success: true,
      data: data,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
