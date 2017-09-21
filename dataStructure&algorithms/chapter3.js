function List(){
    this.listSize=0;//列表长度
    this.pos=0;//当前位置
    this.dataStore=[];//初始化一个空数组来保存列表元素
    this.clear=clear;
    this.find=find; //从列表中查找某一个元素
    this.toString=toString; //显示列表中的元素
    this.insert=insert;
    this.append=append;//给列表添加元素
    this.remove=remove; //从列表中删除元素
    this.front=front;
    this.end=end;
    this.prev=prev;
    this.next=next;
    this.length=length; //列表中有多少个元素
    this.currPos=currPos;
    this.moveTo=moveTo;
    this.getElement=getElement;
    this.contains=contains;

    //给列表添加元素
    function append(ele){
        this.dataStore[this.listSize++]=ele;
    }

    //从列表中查找某一个元素
    function find(ele) {
        for(var i=0;i<this.dataStore.length;++i) {
            if(this.dataStore[i]==ele) {
                return i;
            }
        }
        return -1;
    }

    //从列表中删除元素
    function remove(ele) {
        var foundAt = this.find(ele);
        if(foundAt>-1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    //列表中有多少个元素
    function length(){
        return this.listSize;
    }

    //显示列表中的元素
    function toString(){
        return this.dataStore;
    }

    //向列表中插入一个元素
    function insert(ele, after){
        var insertPos = this.find(after);
        if(insertPos>-1) {
            this.dataStore.splice(insertPos + 1, 0, ele);
            ++this.listSize;
            return true;
        }
        return false;
    }

    //清空列表中的所有元素
    function clear(){
        delete this.dateStore;
        this.dataStore=[];
        this.listSize=this.pos=0;
    }

    //判断给定值是否在列表中
    function contains(ele) {
        for(var i=0;i<this.dataStore.length;++i) {
            if(this.dataStore[i]==ele) {
                return true;
            }
        }
        return false;
    }

    //遍历列表：
    //把当前位置移到第一个下标
    function front(){
        this.pos=0;
    }

    //把当前位置移到最后一个下标
    function end(){
        this.pos=this.listSize-1;
    }

    //把当前位置移前一位
    function prev(){
        if(this.pos>0) {
            --this.pos;     //把当前位置移前一位
        }
    }

    //把当前位置移前一位
    function next(){
        if(this.pos<this.listSize-1) {
            ++this.pos;
        }
    }

    //把当前位置移前一位
    function currPos(){
        return this.pos;
    }

    //把当前位置移前一位
    function moveTo(position) {
        this.pos=position;
    }

    //返回列表当前元素
    function getElement(){
        return this.dataStore[this.pos];
    }
}

var names=new List();
names.append("Scarlett");
names.append("Rhett");
console.log(names.toString())
console.log(names.length())
//3.使用迭代器访问列表,优点：1.访问列元素时不必关心底层的数据存储结构 2.当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器 3.可以用不同类型的数据存储方式实现cList类，迭代器为访问列表里的元素提供了一种统一的方式。
// for(names.front();names.currPos()!=names.length();names.next()) {
//     console.log(names.getElement());
// }
// for(names.end();names.currPos()!=0;names.prev()) {
//     console.log(names.getElement());
// }


//从文件中读取数据，然后将其保存在一个数组中
function createArr(file) {
    var arr = read(file).split("\n");
    for(var i=0;i<arr.length;++i) {
        arr[i]=arr[i].trim();
        console.log(arr[i])
    }
    return arr;
}

//显示影碟店里现有的影碟清单
function displayList(list) {
    for(list.front();list.currPos()<list.length();list.next()) {
        console.log(list.getElement);
        if(list.getElement() instanceof Customer) {
            console.log(list.getElement()['name'] + ',' + list.getElement()['movie']);
        }else{
            console.log(list.getElement());
        }
    }
}


//customers的构造函数
function Customer(name,movie) {
    this.name=name;
    this.movie=movie;
}

//判断电影是否存在租赁电影清单中，如果是则
function checkOut(name, movie, filmList, customerList){
    if(movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }else{
        console.log(movie + ' is not available');
    }
}
//4.一个基于列表的应用
var movies = createArr('films.txt');

//将数组movies中的元素保存在一个列表中
var movieList=new List();

//电影的客户
var customers=new List();

for(var i=0;i<movies.length;++i) {
    movieList.append(movies[i]);
}

console.log('Available movies: \n');
displayList(movieList);
// putstr("\nEnter your name: ");
// var name=readline();
checkOut('Jane Doe', 'The Godfather', movieList, customers);
console.log('\nCustomer Rentals: \n');
displayList(customers);