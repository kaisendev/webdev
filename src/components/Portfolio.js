import todonotes from '../images/todonotes.png'
import './Portfolio.css'

const Portfolio = () => {
    return ( 
        
        <div className="projContainer">        
            <div className="projBox">
                <img src={todonotes} alt="" />
                <p>Todo Notes</p>
                <div>
                    <span>Javascript</span> <span>Bootstrap</span>
                </div>
                <a className="projDiv" href="https://todonotes.surge.sh/" target="_blank" rel="noreferrer">Live View</a>
            </div>

            <div className="projBox"> 
                <section className="upcoming">
                    <p>Upcoming React Project</p>
                    <span>Lorem Ipsum</span><span>Lorem Ipsum</span>
                </section>
            </div>
        </div>   
     );
}
 
export default Portfolio;