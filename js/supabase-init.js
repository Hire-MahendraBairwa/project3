const supabaseClient = window.supabase.createClient(
  "https://xholwqcarskbmjrfwloe.supabase.co",
  "sb_publishable_Eq2wSZY6D6_OwVxc5_zkJg_x6K1Lih1"
);
if(supabaseClient){
  console .log("Database connected:", supabaseClient);
}else{
  console.log("database not connected");
}
