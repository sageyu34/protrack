const SUPABASE_URL = "https://crsrillwsyemmqlodptp.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_eExNt51cdrssnoo6XVgQ4A_tfmlWPnk";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function testConnection() {

    const { data, error } = await supabaseClient
        .from("members")
        .select("*");

    const message =
        document.getElementById("message");

    if (error) {
        message.textContent =
            "Error: " + error.message;

        return;
    }

    message.textContent =
        JSON.stringify(data, null, 2);
}

testConnection();