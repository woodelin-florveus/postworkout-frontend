import { AiOutlineGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { ImBehance2 } from "react-icons/im"

function About(){

    return (
        <div className="main">
            <div className="about-pic">
                <img src="images/image_8.jpg" />
            </div>
            <h1 className="about-header">About Us</h1>
            <ul className="contact-info">
            <li className="user-info">Email: WoodelinFlorveus@gmail.com</li>
            <li className="user-info">Github:<a href="https://github.com/woodelin-florveus?tab=repositories"><AiOutlineGithub /></a></li>
            <li className="user-info">Linkden:<a href="linkedin.com/in/woodelin-florveus-9609a3141 "> <FaLinkedin /></a></li>
            <li className="user-info">Behance:<a href="https://www.behance.net/woodelindesigns "> <ImBehance2 /></a></li>
            </ul>
            <article className="about-info">
            Every month, our editors and reporters seek the advice of the most trusted, experienced, and academically affiliated authorities in health, fitness, weight loss, relationships, and more. We also keep an eye out for the latest new research in the world’s most credible, peer-reviewed academic journals, and distill it for our readers in a way that’s practical, accessible, and easy to understand. Furthermore, every story in the print edition is subjected to a rigorous fact-checking process, in which a team of researchers thoroughly vets all factual claims for accuracy.

            Since it launched in 1986, Men’s Health has been nominated for many of the publishing industry’s top honors, including 17 National Magazine Awards in the categories of personal service and general excellence. In 2017, Ad Age named Men’s Health one of its Magazines of the Year.
            </article>
        </div>
    )

}

export default About;