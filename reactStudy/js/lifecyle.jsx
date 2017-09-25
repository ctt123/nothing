class Clock extends React.Component {
    constructor(props) {//es6的知识，详细查看es6的class文档
        //1.super是class继承的一个关键字，此时它作为函数调用，代表父类的构造函数，es6要求，子类的
        //的构造函数必须执行一次super函数，否则会报错。并且作为函数调用的时候只能在子类的constructor中使用，否则报错。
        //2.warn:super代表父类React.Component的构造函数，但是返回的是子类Clock的实例，其内部的this指的是
        //Clock，因此super（）在这里相当于React.Component.call(this)
        //3.super.xx这种时候super则是指父类原型即React.Component.prototype
        super(props);
        this.state = {
            date: new Date(),//被嵌入dom中，但由于被componentDidMount函数所创建的定时器，所以他的值会随时改变。
            posts:[],
            comments:[]
        };
    }

    //class内的函数除了constructor外其他皆等同于es5的prototype.xx所定义出来的原型方法。
    //此hook在组件输出已经在dom中渲染完之后执行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

        fetchPosts().then(response=>{
            this.setState({
                posts:response.posts
            })
        })

        fetchComments().then(response=>{
            this.setState({
                comments:response.comments
            })
        })
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date:new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('lifecyle')
)

//1）当ReactDOM.render()开始执行到<Clock/>的时候，React就调用Clock的构造函数constructor，
//因为Clock需要立刻展示出来，所以同时也初始化了this.state.
//2)然后，React调用了Clock中的render()方法,这就让React知道什么该在屏幕上展示出来。React接着更新DOM就是render更新输出的东西。
//3）当Clock输出的东西插入在dom后，React调用了componentDidMount（）声明周期钩子。然后Clock组件请求浏览器每一秒钟调用一次tick（）
//4）浏览器每秒调用tick（）。其中，Clock组件用过调用setState()来更新UI.因为这个函数调用，React知道了state已经改变了并且再调用render()
//更新ui。此时，render输出的this.state.date讲改变了，并相应地在dom上作出改变。
//5）如果Clock组件从dom中移除，React条用哦个comonentWillUnmount 生命钩子，这个定时器就会消失。



//正确使用state
//1.不可以直接修改state的值：wrong:this.state.comment='Hello';right:this.setState({date:new Date()})要使用setState()
//2.唯一可以声明this.state的地方就是在构造函数中。
//3.state可以异步更新，其有两种更新方式：（1）this.setState({})对象参数    （2）this.setState((prevState,props)=>({counter: prevState.counter + props.increment}))函数参数
//4.state的更新和合并