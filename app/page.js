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
      <section className={style.introduction}>
        <div className={style.introCenter}>
          <img
            src="/logo.jpg"
            alt="Profile"
            className={style.profileImage}
          />
          <h1 className={`${poppins.className} ${style.h1Intro}`}>Matzz Dev</h1>
          <p className={openSans.className + " " + style.introDesc}>
            Developer muda dari SMKN 1 Gorontalo, antusias belajar web & React.
          </p>
          <div className={style.profileCard}>
            <h2 className={poppins.className}>Matzz</h2>
            <p className={openSans.className}>
              Frontend Developer | UI/UX Enthusiast
            </p>
            <div className={style.profileLinks}>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
              <a href="mailto:matzz@email.com">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
