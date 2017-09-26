//html表单元素和React的dom元素工作原理有些不一样，因为form元素本身保持一些内部状态，例如，这个表单在空html接收一个属性name


//1.控制组件

//如下面组件return中的input，对应的值以及事件都被控制了。
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
    }

    //因为下面的value属性设置为这个form的元素，它所展示的值总是this。state.value的值。因为handleChange是每次input值改变所触发的函数，所以这个value就会一直更新为用户输入的值
    //
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

//the textarea tag

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'Please write an essay about your favorite DOM element.'
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


//处理多个input
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberOfGuests:2
        }

        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <form>
                <label htmlFor="">
                    Is going:
                    <input type="checkbox"
                           name="isGoing"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input type="number"
                            name="numberOfGuests"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation/>,
    document.getElementById('forms')
);