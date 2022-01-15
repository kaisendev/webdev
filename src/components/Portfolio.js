import todonotes from '../images/todo-notes.png'
import todoAppReactjs from '../images/todo-app-reactjs.png'
import todoFirebase from '../images/todo-firebase.png'
import './Portfolio.css'

const Portfolio = () => {
    return ( 
        
        <div className="projContainer">  

          <div className="projBox">
                <img src={todoFirebase} alt="" />
                <p>Todo App with Firebase</p>
                <div>
                    <span>React Js</span> <span>Firebase</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todo-firebase/" target="_blank" rel="noreferrer">Live</a>
            </div>      
          
            <div className="projBox">
                <img src={todoAppReactjs} alt="" />
                <p>Todo App</p>
                <div>
                    <span>React Js</span> <span>CSS</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todoapp/" target="_blank" rel="noreferrer">Live</a>
            </div>

            <div className="projBox">
                <img src={todonotes} alt="" />
                <p>Todo Notes</p>
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