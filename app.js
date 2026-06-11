const SUPABASE_URL = "https://crsrillwsyemmqlodptp.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_eExNt51cdrssnoo6XVgQ4A_tfmlWPnk";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const memberId =
        document.getElementById("memberId").value;

    const pin =
        document.getElementById("pin").value;

    const { data, error } =
    await supabaseClient
        .from("members")
        .select("*");
        
console.log(data);
console.log(error);

    const message =
        document.getElementById("message");

    if (error || !data) {

        message.textContent =
            "Invalid Member ID or PIN";

        return;
    }

    message.textContent =
        `Welcome, ${data.full_name}`;

});
