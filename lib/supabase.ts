// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Only create the client in the browser
const isBrowser = typeof window !== 'undefined'

// For build time, use dummy values
const supabaseUrl = isBrowser ? process.env.NEXT_PUBLIC_SUPABASE_URL! : 'https://dummy.supabase.co'
const supabaseKey = isBrowser ? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! : 'dummy-key'

// Create a dummy client for build time
export const supabase = isBrowser 
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : createClient('https://dummy.supabase.co', 'dummy-key')

console.log('✅ Supabase client initialized:', isBrowser ? 'Browser' : 'Server (dummy)')