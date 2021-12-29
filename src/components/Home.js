
import Typewriter from 'typewriter-effect'

//Logo
import js from '../images/javascript.png'
import html from '../images/html.png'
import css from '../images/css.png'
import git from '../images/git.png'
import csharp from '../images/csharp.png'
import sql from '../images/sql.png'

const Home = () => {
    return ( 
            <div className="homeContent">

                <section className="intro"> 
                    <p> Hi there, I'm Nilo </p>  
                    <Typewriter onInit={ (typewriter) => {
                        typewriter.typeString("Web Developer!")
                                    .start()
                        }}
                    />
                </section>

                <section className="logoContainer">           
                        <img src={js} alt="Javascript" />      
                        <img src={html} alt="HTML" />       
                        <img src={css} alt="CSS" />      
                        <img src={git} alt="Git" /> 
                        <img src={csharp} alt="CSharp" />
                        <img src={sql} alt="SQL" />     
                </section>   
            </div>
     );
}
 
export default Home;