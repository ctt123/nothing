function Stack(){
    this.dataStore=[];
    this.top=0;//该数组长度
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.clear=clear;
    this.length=length;
}
//一添加完之后top的值就会加一
function push(ele) {
    this.dataStore[this.top++]=ele;
}

function pop(){
    return this.dataStore[--this.top];
}

//返回数组的第top-1个位置的元素，即栈顶元素
function peek(){
    return this.dataStore[this.top - 1];
}

//返回栈的长度
function length(){
    return this.top;
}

//清空栈,此处栈的清空并非使用this.length=0的方法清空，而是通过top=0，这样逐渐把原来下标对应的值给替换了。
function clear(){
    this.top=0;
}

//test
// var s=new Stack();
// s.push('David');
// s.push('Scarlett');
// s.push('Red');
// console.log('length=' + s.length());
// console.log(s.peek());
// var popped=s.pop();
// console.log('the popped element is:' + popped);
// console.log(s.peek());
// s.push('Cindy');
// console.log(s.peek());
// s.clear();
// console.log('length' + s.length());
// console.log(s.peek());
// s.push('Lily');
// console.log(s.peek());


//数字转为为二进制和八进制
function mulBase(num,base){
    var s=new Stack();
    do{
        s.push(num%base);
        num=Math.floor(num/=base);
    }while(num>0);
    var converted='';
    while(s.length()>0){
        converted+=s.pop();
    }
    return converted;
}

//回文（使用栈判断一个单词是否是回文）
function isPalindrome(word) {
    var s=new Stack();
    for(var i=0;i<word.length;++i) {
        s.push(word[i]);
    }
    var rword = '';
    while(s.length()>0) {
        rword+=s.pop();
    }
    if(word==rword) {
        return true;
    }else{
        return false;
    }
}


function result(word){
    if(isPalindrome(word)) {
        console.log(word + 'is a palindrome');
    }else{
        console.log(word + 'is not a palindrome');
    }
}

result('hello');
result('racecar');


//使用栈模拟递归过程

function factorial(n){
    if(n===0) {
        return n=1;
    }else{
        return n * arguments.callee(n-1);//这里使用n--的话他会出错，因为先赋参n
    }
}

function fact(n){
    var s=new Stack();
    while(n>1) {
        s.push(n--);
    }
    var product=1;
    while(s.length()>0) {
        product*=s.pop();
    }
    return product;
}
console.log(factorial(5))
console.log(fact(5))

//practice
function check(expr){
    var s=new Stack();
    for(var i=0;i<expr.length;i++) {
        s.push(expr[i]);
    }
    for(var i=0;i<s.length();i++) {

    }
}
















































