
import './Portfolio.css'
import todoFirebase from "../images/todo-fb-img.png"
import todoReact from "../images/todo-react-img.png"
import todoJs from "../images/todo-js-img.png"

const Portfolio = () => {
    return ( 
        
        <div className="projContainer">  
            <div className="projBox">
                <img className='image' src={todoFirebase} alt="" />
                <p>Todo App</p>
                <div>
                    <span>React Js</span> <span>Firebase</span> <span>CSS</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todo-firebase/" target="_blank" rel="noreferrer">Live</a>
            </div>     

            <div className="projBox">
                <img className='image' src={todoReact} alt="" />
                <p>Todo App</p>
                <div>
                    <span>React Js</span> <span>CSS</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todoapp/" target="_blank" rel="noreferrer">Live</a>
            </div> 
          
            <div className="projBox">
                <img className='image' src={todoJs} alt="" />
                <p>Todo App</p>
                <div>
                    <span>Javascript</span> <span>Bootstrap</span>
                </div>
                <a className="projDiv" href="https://todonotes.surge.sh/" target="_blank" rel="noreferrer">Live</a>
            </div>

            {/*<div className="projBox"> 
                <section className="upcoming">
                    <p>Upcoming Project</p>
                    <span>Lorem Ipsum</span><span>Lorem Ipsum</span>
                </section>
            </div> */}
        </div>   
     );
}
 
export default Portfolio;