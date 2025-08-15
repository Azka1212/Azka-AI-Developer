import { createClient } from "@supabase/supabase-js"

// Check if we're in a browser environment and have the required environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  console.warn("NEXT_PUBLIC_SUPABASE_URL is not set. Supabase features will be disabled.")
}

if (!supabaseAnonKey) {
  console.warn("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Supabase features will be disabled.")
}

// Create a mock client if environment variables are not available
const createMockClient = () => ({
  from: () => ({
    insert: () => ({
      select: () => ({
        single: () =>
          Promise.resolve({
            data: null,
            error: { message: "Supabase not configured. Please set environment variables." },
          }),
      }),
    }),
  }),
})

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : createMockClient()

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}
