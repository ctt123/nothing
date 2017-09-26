//通常，几个组件需要反映相同改变的数据。我们建议。。。。

function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

//接下来创建一个名为calculator的组件。

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={temperature:''};
    }

    render(){
        const temperature=this.state.temperature;
        return(
            <fieldset>
                <legend>
                    Enter temperature in Celsius:
                </legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}