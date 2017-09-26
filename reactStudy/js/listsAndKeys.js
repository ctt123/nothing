//在以前我们js里面有这么一个map方法
// var a = [1, 2, 3];
// console.log(a.map(function (num) {
//     return num * 2
// }))//输出2，3，6

//1.渲染多个组件
//你可以构建元素集，然后在jsx里用｛｝把他们包裹了
//下面，我们使用js的map（）来循环遍历数组。我们为他们每个元素都使用li元素包起来。最后，我们把这个元素数组赋予listItems。

// const numbers = [1, 2, 3, 4, 5];
// const listItems=numbers.map((number)=>
//     <li>{number}</li>
// )

//这样渲染在html上，我们平时把拿到的数据通过这方式来渲染在html上
// ReactDOM.render(
//     <ul>
//         {listItems}
//     </ul>,
//     document.getElementById('listsAndKeys')
// );

//2.基础列表组件
//重构上面的例子放在组件中，接收数据并且在元素中输出无序列表


function ListItem(props) {
    return (
        <li key={props.key}>//这里的key出现警告了，不知道为什么ListItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.
            {props.value}
        </li>
    )
}

//3.下面列表的每个li中需要“key”这个特殊的字符串类型的属性，否则会报警告
//(1)keys可以帮助React发现那个项目发生了改变，添加还是被移除。keys应该在被添加在数组中的每个元素里。
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number}/>
    )

    // const listItems=numbers.map((number,index)=>
    //     //仅仅是在items没有稳定的ids才可以用index
    //     //(2)key的正确位置是添加在组件内的这里，而不是下面的return内部
    //     //(3)在同一个数组里面的每一个key都是唯一的，
    //     <li key={index}>
    //         {number}
    //     </li>
    // )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('listsAndKeys')
)

//(2)使用keys提取组件
