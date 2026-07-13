// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Check if we're in a browser (not during build)
const isBrowser = typeof window !== 'undefined'

// Safe client creation - always works
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy-key',
  {
    auth: {
      persistSession: isBrowser,
      autoRefreshToken: isBrowser,
    }
  }
)

console.log('✅ Supabase client initialized')