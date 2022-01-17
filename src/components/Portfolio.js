
import './Portfolio.css'

const Portfolio = () => {
    return ( 
        
        <div className="projContainer">  
            <div className="projBox">
                <div className='todo-fb-img'></div>
                <p>Todo App</p>
                <div>
                    <span>React Js</span> <span>Firebase</span> <span>CSS</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todo-firebase/" target="_blank" rel="noreferrer">Live</a>
            </div>     

            <div className="projBox">
                <div className='todo-react-img'></div>
                <p>Todo App</p>
                <div>
                    <span>React Js</span> <span>CSS</span>
                </div>
                <a className="projDiv" href="https://kaisendev.github.io/todoapp/" target="_blank" rel="noreferrer">Live</a>
            </div> 
          
            <div className="projBox">
                <div className='todo-js-img'></div>
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