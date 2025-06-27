import { Open_Sans, Poppins } from "next/font/google";
import style from "./page.module.css";
import Navbar from "./components/ui/navbar.js";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600"],
});

export default function Page() {
  return (
    <>
      <Navbar />
      <section className={`${style.introduction}`}>
        <h1 className={`${poppins.className} ${style.h1Intro}`}>Matzz Dev</h1>
        <p className={openSans.className}>
          Nama saya Matzz, seorang developer pemula semi menengah yang belajar
          di SMKN 1 Gorontalo, kelas 10. Saya memiliki keterampilan di HTML,
          CSS, dan JavaScript, serta pengalaman dengan framework seperti React.
          Saya aktif dalam proyek kelompok di sekolah dan percaya bahwa
          kolaborasi adalah kunci keberhasilan. Dengan semangat untuk belajar
          dan berkembang, saya siap menghadapi tantangan baru di dunia
          teknologi.
        </p>
      </section>
    </>
  );
}
