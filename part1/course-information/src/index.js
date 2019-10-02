import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
    console.log(props)

    return (
        <header>
            <h1>{props.course}</h1>
        </header>
    );
};

const Part = (props) => {
    console.log(props)

    return (
        <p>{props.name} {props.exercises}</p>
    )
}


const Content = (props) => {
    console.log(props)
    return (
        <div>
            {props.parts.map((item, index) => {
                return <Part key={index} name={item.name} exercises={item.exercises} />
            })}
        </div>
    );
};


const Total = (props) => {
    console.log(props)

    let number = props.parts.map(item => {
        return item.exercises
    })
    console.log(number)

    return (
        <section>
            <p>Number of exercises {number.reduce((acc, item) => {
                return acc + item
            })}</p>
        </section>
    );
};




const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [

            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))