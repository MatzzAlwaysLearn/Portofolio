import style from './page.module.css';
import Navbar from '../components/ui/navbar.js';
import { Footer } from '../page.js';
import { Poppins } from 'next/font/google';

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
            <p className={style.pageText}>
              Hello! I'm Matzz, a passionate web developer with a focus on creating dynamic and responsive web applications. I love exploring new technologies and continuously improving my skills.
            </p>
            <p className={style.pageText}>
              In my free time, I enjoy contributing to open-source projects and learning about the latest trends in web development.
            </p>
          </div>
          <Footer />         
        </div>
    )
}