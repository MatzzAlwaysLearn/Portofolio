import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const { data, error } = await supabase.from("projects").insert([
  {
    title: "Contoh Project",
    description: "Deskripsi project contoh",
    image: "/contoh.jpg",
    imageUrl: null,
    link: "https://contoh-link.com",
    framework: "Next JS",
    tags: ["JavaScript", "CSS", "HTML"],
  },
]);

if (error) {
  console.error("Error inserting data:", error);
} else {
  console.log("Data inserted successfully:", data);
}
