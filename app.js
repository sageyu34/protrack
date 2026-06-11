const SUPABASE_URL = "YOUR_PROJECT_URL";
const SUPABASE_KEY = "YOUR_ANON_KEY";

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
            .select("*")
            .eq("member_id", memberId)
            .eq("pin", pin)
            .single();

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
