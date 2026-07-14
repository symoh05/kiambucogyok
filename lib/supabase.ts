// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Only create the client in the browser
const isBrowser = typeof window !== 'undefined'

// Dummy values for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy-key'

// Create client with proper auth only in browser
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  }
})

console.log('✅ Supabase client initialized:', isBrowser ? 'Browser' : 'Server (dummy)')