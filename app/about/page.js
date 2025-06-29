import style from './page.module.css';
import Navbar from '../components/ui/navbar.js';
import { Footer } from '../page.js';
import { Poppins } from 'next/font/google';
import ScrollVelocity from '../components/ui/ScrollVelocity';


// skils set from expert, advanced, intermediate, and beginner
// skills are categorized as follows:
// - Expert: JavaScript, HTML5 & CSS3
// - Advanced: React.js, Next.js
// - Intermediate: Node.js
// - Beginner: Tailwind CSS

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Page() {
    return(
        <div className={style.pageContainer}>
          <Navbar />
          <div className={style.mainWrapper + ' ' + poppins.className}>
            <h1 id={style.h1Page}>About Me</h1>
            <ScrollVelocity
                texts={['Matzz Dev', 'Web Developer', 'Portfolio']} 
                velocity={100} 
                className={style.scrollVelocity}
            />
            <section className={style.section}>
              <p className={style.pageText} id={style.textSpecial}>
                Hi, I’m Matzz — a web developer who loves turning ideas into interactive digital experiences. My journey in tech started with curiosity and quickly grew into a passion for building beautiful, functional, and accessible web applications.
              </p>
              <p className={style.pageText}>
                I thrive on challenges and enjoy learning new frameworks, tools, and best practices. Whether it’s crafting a pixel-perfect UI or optimizing backend logic, I’m always eager to push boundaries and deliver high-quality results.
              </p>
              <p className={style.pageText}>
                Beyond coding, I’m an open-source enthusiast and a lifelong learner. I believe in sharing knowledge, collaborating with others, and making a positive impact through technology.
              </p>
            </section>
            <section className={style.section}>
              <h2 className={style.sectionTitle}>Skills</h2>
              <ul className={style.skillsList}>
                <li>
                  JavaScript (ES6+)
                  <span className={style.skillLevel + " " + style.expert}>Expert</span>
                </li>
                <li>
                  React.js
                  <span className={style.skillLevel + " " + style.advanced}>Advanced</span>
                </li>
                <li>
                  Next.js
                  <span className={style.skillLevel + " " + style.advanced}>Advanced</span>
                </li>
                <li>
                  Node.js
                  <span className={style.skillLevel + " " + style.intermediate}>Intermediate</span>
                </li>
                <li>
                  HTML5 & CSS3
                  <span className={style.skillLevel + " " + style.expert}>Expert</span>
                </li>
                <li>
                  Tailwind CSS
                  <span className={style.skillLevel + " " + style.advanced}>Beginner</span>
                </li>
              </ul>
            </section>
            <section className={style.section}>
              <h2 className={style.sectionTitle}>Contact</h2>
              <div className={style.contactInfo}>
                <p>
                  <span role="img" aria-label="Email" style={{marginRight: "0.5em"}}>📧</span>
                  Email: <a href="mailto:muhfatahilla62@gmail.com">muhfatahilla62@gmail.com</a>
                </p>
                <p>
                  <span role="img" aria-label="WhatsApp" style={{marginRight: "0.5em"}}>💬</span>
                  Whatsapp: <a href="https://wa.me/62895406828812" target="_blank" rel="noopener noreferrer">62895406828812</a>
                </p>
                <p>
                  <span role="img" aria-label="Location" style={{marginRight: "0.5em"}}>📍</span>
                  Location: Indonesia
                </p>
              </div>
            </section>
            <section className={style.section}>
              <h2 className={style.sectionTitle}>More Info</h2>
              <ul className={style.infoList}>
                <li>Experience: 2+ years in web development</li>
                <li>Open for freelance & collaboration</li>
                <li>Languages: Bahasa Indonesia, English</li>
              </ul>
            </section>
          </div>
          <Footer />         
        </div>
    )
}