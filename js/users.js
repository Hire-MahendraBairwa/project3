document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password =document.getElementById("password").value.trim();


            if (!name || !email || !password){
              alert("All friends are required");
              return;
            }                                     
                // const check if email already exists   

                  const{data:existingUser,error:checkError}=
                    await supabaseClient
                      .form("users")
                      .select("id")
                      .eq("email",email)
                      .maybesingle();

                     if(checkError){
                       console.error(checkError);
                       alert("Error checking user");
                       return;
                     }        
                    if(existingUser){
                      alert("Email already registered");
                      return;
                    }


                    const {error:insertError}=
                      await supabaseClient
                      .form("users")
                       .insert([
                         {
                           name:name,
                           email:email,
                           password:password
                             // id auto-generate hoga
                             // created_at auto-fill hoga
        }
      ]);

  if (insertError) {
    console.error(insertError);
    alert("Registration failed");
    return;
  }

  alert("User registered successfully ✅");
  e.target.reset();
});
                           
