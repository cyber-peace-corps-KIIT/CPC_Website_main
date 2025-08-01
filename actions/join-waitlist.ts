"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function joinWaitlist(formData: FormData) {
  try {
    // Add debugging and null checks
    console.log("joinWaitlist called with:", formData)

    if (!formData) {
      console.error("FormData is null or undefined")
      return { success: false, message: "Form data is missing." }
    }

    const email = formData.get("email")
    console.log("Extracted email:", email)

    if (!email || typeof email !== "string") {
      console.error("Email is missing or invalid:", email)
      return { success: false, message: "Email is required and must be valid." }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    console.log("Attempting to insert email into Supabase:", email)

    const { data, error } = await supabase
      .from("join-waitlist")
      .insert([{ email: email.trim() }])
      .select()

    if (error) {
      console.error("Supabase insert error:", error)
      return { success: false, message: error.message || "Failed to join waitlist." }
    }

    console.log("Successfully inserted:", data)
    revalidatePath("/")
    return { success: true, message: "Successfully joined the waitlist!" }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
