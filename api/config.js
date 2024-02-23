//import { createClient } from '@supabase/supabase-js';
const { createClient } = require('@supabase/supabase-js');

const supabaseURL = 'https://rtkqchqgsbajdfibusuv.supabase.co/';
const supabaseAnonKey = process.env.APP_SUPABASE_ANON_KEY;

console.log(process.env);
if (!supabaseAnonKey) {
    throw new Error('Supabase anonymous key is required. Please set the APP_SUPABASE_ANON_KEY environment variable.');
}

const supabase = createClient(supabaseURL, supabaseAnonKey);
//export default supabase
module.exports = supabase;