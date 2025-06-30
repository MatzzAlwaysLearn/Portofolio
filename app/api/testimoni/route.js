import { supabase } from '../../../lib/supabaseClient';

// GET: Ambil semua testimoni dari Supabase
export async function GET() {
  const { data, error } = await supabase
    .from('testimoni')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error("Supabase GET error:", error.message);
    return new Response(JSON.stringify([]), { status: 200 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}

// POST: Tambah testimoni ke Supabase
export async function POST(request) {
  const { name, message } = await request.json();
  if (!name || !message) {
    return new Response(JSON.stringify({ error: "Invalid" }), { status: 400 });
  }
  // Hapus field "date" dari insert, biarkan Supabase mengisi otomatis jika ada default value
  const { error } = await supabase.from('testimoni').insert([
    { name, message }
  ]);
  if (error) {
    console.error("Supabase POST error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 201 });
}
