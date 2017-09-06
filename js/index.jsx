function tick() {
    const ele = (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    //use the curly braces to express the js fn or value
    ReactDOM.render(
        ele, document.getElementById('root')//in fact, only the changing part will be update in the dom,the h1 has no change and won't be updated
    );
}

setInterval(tick, 1000);

// function Welcome (props){
//     return <h1>Hello,{props.name}</h1>
// }
//component need uppercase and must return a single root element
//functional component

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: new Date()}
    }

    render() {
        return (
            <h1>{this.state.data.toLocaleTimeString()}</h1>
        )
    }
}

//es6 component

const element = <Welcome name="Scarlett"/>;
ReactDOM.render(
    element,
    document.getElementById('root1')
);
