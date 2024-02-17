const createClient = require('@supabase/supabase-js').createClient;
var domain = 'https://rtkqchqgsbajdfibusuv.supabase.co'
var publicAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0a3FjaHFnc2JhamRmaWJ1c3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMTA5MTksImV4cCI6MjAxNjc4NjkxOX0.NbXVB9deDdPQSNbcJFgsqRmo7o0U_276OVBS82gDx6o'

// Use a custom domain as the supabase URL
const anonSupabaseClient = createClient(domain,publicAnonKey)

function CreateSupabaseUserClient (){
  GetSupabaseUserSession()
    .then((session) => {
      if (!session) {
        throw new Error("No Session Logged In");
      }
      return createClient(domain,session.access_token);
    })
    .catch((error) => {
      console.error('CreateSupabaseUserClient Error: ' + error);
    });
  
}

function GetSupabaseUserSession (){
    return new Promise((resolve) => {
        setTimeout(async () => {
          // Other things to do before completion of the promise
          const { data, error } = await anonSupabaseClient.auth.getSession()
          if (error) throw error.message;
          if (data.session == null) throw "No LoginSession";
          console.log(data.session.access_token)
          // The fulfillment value of the promise
          resolve(data.session);
        }, 2000);
      });
}