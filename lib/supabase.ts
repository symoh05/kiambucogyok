// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Check if we're in a browser (not during build)
const isBrowser = typeof window !== 'undefined'

// For build time, use dummy values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy-key'

// Create the client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  }
})

console.log('✅ Supabase client initialized')