const SUPABASE_URL = "https://crsrillwsyemmqlodptp.supabase.co";
const SUPABASE_KEY = "sb_publishable_eExNt51cdrssnoo6XVgQ4A_tfmlWPnk";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const loginForm =
  document.getElementById("loginForm");

loginForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    const memberId =
      document.getElementById("memberId")
      .value
      .trim()
      .toUpperCase();

    const pin =
      document.getElementById("pin")
      .value
      .trim();

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

    localStorage.setItem(
  "member",
  JSON.stringify(data)
);

window.location.href =
  "dashboard.html";
  }
);