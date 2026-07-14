// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// This will only work on the client side
export const supabase = typeof window !== 'undefined'
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
  : null

console.log('✅ Supabase initialized:', typeof window !== 'undefined')