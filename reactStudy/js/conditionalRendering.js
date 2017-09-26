//1.在react中，你可以创建你所不同的组建来封装一些方法。然后你可以依赖应用中的state仅渲染其中的一部分。
//React 的条件渲染就像js一样工作，使用js操作符，如js或者条件操作符来创建表示当前状态的元素，并且React响应UI来匹配他们。


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    //条件选择对应的component
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

// ReactDOM.render(
//     <Greeting isLoggedIn={false}/>,
//     document.getElementById('conditionalRendering')
// );

//2.元素变量
//你可以使用变量保存元素(渲染在html的模版)，这可以帮助你条件渲染一部分组件同时剩下的输出不改变

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button=null;

        if(isLoggedIn) {
            button=<LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button=<LoginButton onClick={this.handleLoginClick} />;
        }

        //下面则是使用｛｝来表达button这个变量，其中保存着不同的button
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}


//3.当声明一个变量和使用一个if是一种很好的方式去条件渲染一个组件的，有的时候
//你可能想使用一个更短的语法，那么下面有些jsx内部条件方法

//(1)&&操作符(相当于if前面的条件)
function Mailbox(props) {
    const unreadMessages=props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length>0&&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Re:React', 'Re:Re:React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('conditionalRendering')
// );

//? :
class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={isLoggedIn:false}
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        return(
            <div>
                The user is <b>{isLoggedIn ? 'currently': 'not'}</b> logged in.
            </div>
        )
    }
}

// ReactDOM.render(
//     <Test isLoggedIn={true} />,
//     document.getElementById('conditionalRendering')
// );


//3.阻止组件渲染
//在一些罕见的情况下，你可能一个组件会通过另外一个组件渲染出来，你也想要可以隐藏他，那么可以使用return null代替他的输出
//

function WarningBanner(props) {
    if(!props.warn) {
        return null;//这样可以隐藏组件
    }

    return(
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('conditionalRendering')
)






//
// ReactDOM.render(
//     <LoginControl/>,
//     document.getElementById('conditionalRendering')
// );
