//在react中，你可以创建你所不同的组建来封装一些方法。然后你可以依赖应用中的state仅渲染其中的一部分。
//React 的条件渲染就像js一样工作，使用js操作符，如js或者条件操作符来创建表示当前状态的元素，并且React响应UI来匹配他们。


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

ReactDom.render(
    <Greeting isLoggedIn={false}/>,
    document.getElementById('conditionalRendering')
);

//元素变量
//你可以使用变量保存元素，这可以帮助你在剩下的输出不改变的情况下条件渲染一部分组件
//
// function LoginButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClik}>
//             Logout
//         </button>
//     )
// }
//
// class LoginiControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick(){
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick(){
//         this.setState({isLoggedIn: false});
//     }
//
//     render(){
//         const isLoggedIn=this.state.isLoggedIn;
//         let button=null;
//         if(isLoggedIn) {
//             button=<LogoutButton onClick={this.handleLogoutClick} />;
//         }else{
//             button=<LoginButton onClick={this.handleLoginClick} />;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <LoginiControl/>,
//     document.getElementById('root')
// );
