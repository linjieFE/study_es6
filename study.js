//...结构运算符 rest(剩余)运算符
function show(...a){
  console.log(arguments)
 }
 show(1,2,3,4,5)//=>[1,2,3,4,5]
 
 // step2 es5
 function show(){
   console.log(...arguments,arguments)//=> -3 9 2 5 6 -1 ,=> Arguments(6) [-3, 9, 2, 5, 6, -1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
   return Array.prototype.slice.apply(arguments).sort()
 }
 show(-3, 9, 2, 5, 6,-1)//=> [-1, -3, 2, 5, 6, 9]
 
 //step3 解构
 function show(...a){
   //...a 结构为数组
   return a.sort()
 }
 
 show(-3, 9, 2, 5, 6,-1)//=> [-1, -3, 2, 5, 6, 9]
 
 function test(a,b,c){
   console.log(a,b,c)
   }
 test(...[-3,-5,6]) //->  -3,-5,6
 
 function test(a,b,...c){//剩余参数 必须放在函数的末尾
   console.log(a,b,c)
   }
 test(-3,-5,6,7,1,3) //->  -3 -5  [6, 7, 1, 3]
 
 //拷贝数组
 let arr=[1,2,3,4]
 let arr2 = [...arr]//同样可以把类数组转成数组 例如 arguments 
 var arr5 = Array.from(arr)
 //Array.from 可以把类数组转成数组 例如 arguments  es5把类数组转成数组方法 let li = document...('li'); let arrLi = [].slice.call(ali)
 //类数组 有length 
 //Array.from 只要有 length 这个属性就能转成数组
 let json = {
   a:1,
   b:2,
 }
 let arr =Array.from(json)//[]
 
 let json = {
   a:1,
   b:2,
   length:2
 }
 let arr =Array.from(json)//[1,2]
 
 let json = {
   a:1,
   b:2,
   length:1
 }
 let arr =Array.from(json)//[1]
 console.log(arr2, arr5)
 
 //箭头函数
 function show(a=3,b=5){
   return a+b
 }
 
 let show =(a=3,b=5)=>{
   console.log(a,b)
   return a+b
 }
 
 let show = (a,b) => a+b
 
 // 箭头函数和function的this区别
 // 1) 箭头函数的this为当前对象的范围;function this指向全局
 
 var id =10;
 let json = {
   id:1,
   show:function(){
     setTimeout(function(){
       alert(this.id)
     },2000) 
   },
   show2:function(){
     setTimeout(()=>{
       alert(this.id)
     },2000)
   }
 }
 json.show() //->10
 json.show1() //->1
 
 //2)箭头函数没有arguments 用'...'
 let show =function(){
   console.log(arguments)
 }
 show(1,2,3,4,5) //-> Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
 
 let show = () =>{
   console.log(arguments)
 }
 show(1,2,3,4,5) //-> arguments is not defined
 
 
 let show = (...args) =>{
   console.log(args)
 }
 show(1,2,3,4,5)  //-> [1,2,3,4,5]
 // 3)箭头函数不能当构造函数
  
 function show(){
   this.name = 'abc'
 }
 let test = new show()
 console.log(test.name) //-> abc
 
 show=()=>{
   this.name = 'abc'
 }
 
 let test = new show()
 console.log(test.name) // -> Uncaught TypeError: show is not a constructor
 
 //4) es2017 函数参数最后可以有逗号
 function show(a,b,){
   console.log(a,b)
 }
 show(1,2,) //-> 1 2
 
 //** =------- let const ------*/
 /*
 1)没有预解析，不存在变量提升，代码块内，先定义，再使用只要let定义变量，在定义之前使用，都报错
 2）同一个作用域里，不能重复定义变量
 3）for循环里（）是父级作用域，{}是子作用域
 
 */
 {
   let a = 5
   console.log(a) // ->5
   {
     let a=10
     console.log(a)// ->10
   }
 }
 console.log(a)//-> undefind
 
 //good
 var arr=[],
 for(let i=0; i++, i<10){
   arr[i] = ()=>{
     console.log(i)
   }
 }
 arr[5]()//-> 5
 
 //bad
 
 var arr=[],
 for(var i=0; i++, i<10){
   arr[i] = ()=>{
     console.log(i)
   }
 }
 arr[5]()//-> 10
 
 //const 特性
 /* 变量不能修改 ，定义必需有值
 2）const 在数组里属于堆项,可以追加
 3）IIFE 自运行函数
 (function(){
   //TODO
 })()*/
 const a = [1,3,4]
 a.push(6)//->[1,3,4,6]
 /*freeze 冻结*/
 const a = Object.freeze([1,3,4])
 a.push(6)
 console.log(a)//报错不能修改
 
 
 //解构赋值
 let [a,b,c] = [1,2,3]
 console.log(a,b,c)//->123
 let [a,[b,c]] = [1,[2,3]]
 console.log(a,b,c)//->123
 let [a,b,c=4] = [1,2]
 console.log(a,b,c)//->124
 let [a,b,c=4] = [1,2,undefined]
 console.log(a,b,c)//->124
 let [a,b,c=4] = [1,2,null]
 console.log(a,b,c)//->12null
 //对象解构
 let json={
   name:'json',
   age:'39'
 }
 let {name, age} = json
 console.log(name,age)
 let {name:n, age:a} = json
 console.log(n,a)//->json 39
 let {a,b} = {a:1,b:2} 
 console.log(a,b)//1 2
 
 let a;
  {a} = {a:1,b:2} 
 console.log(a)//报错
 let a;
 ({a} = {a:1,b:2})
 console.log(a)//1 用（）表示同一个块级作用域
 
 //交换位置
 let [a,b] =[1,2]
 [a,b]=[b,a]
 console.log(a,b)//->2 1
 
 function getPost(){
   return {
     left:12,
     top:10
   }
 }
 let {let,top}=getPost(); console.log(let,top)//报错 top是window的属性已定义
 
 ({let,top}=getPost()); console.log(let,top)//->12 10 加()重定块作用域
 
 let {let,top=t}=getPost(); console.log(let,t)//->12 10 或给top默认别名
 
 function show({a=1,b=2}={}){
   console.log(a,b)
 }
 
 show()//{}
 show({})//1 2
 show({a:3})//1 2
 
 import {a,b,c} from './mod'
 import { ServerResponse } from 'http';
 //字符串模版
 let a="hi"
 `${a}aa`
 //字符串查找
 let data = 'apple,banana,orange'
 data.includes('apple')//->true
 //判断是否以什么开头
 data.startsWith("http://")//=> true/false
 
 //判断是否以什么结尾
 data.endsWith(".html")//=> true/false
 //重复
 ("哈").repeat(4)//=> 哈哈哈哈
 
 //填充开头
 data.padStart("http://")//=> true/false
 
 //填充结尾
 let str="apple"
 let str2=10
 str.padEnd(str.length+str2.length,".html")
 // ==========================================
 // 数组新增
 arr.forEach()
 arr.map()
 arr.filter() //过滤不合格的 返回ture的留下
 arr.some() //类似查找，对象中有某一个值相符，返回true 
 arr.every()//类似查找，对象中所有值相符，才返回true 
 //===== 以上（回调函数，this指向谁）
 //例 arr.forEach(fn(val,index,arr),this)
 let arr = ['apple','banana','orange','tamato']
 
 arr.forEach(function(val,index,arr){
   console.log(this,val,index,arr)
 },this)//this=>window "c" window 0 'apple' ["apple", "banana", "orange",'tamato']...
 
 arr.forEach(function(val,index,arr){
   console.log(this,val,index,arr)
 },123)//this=>123
 arr.forEach(function(val,index,arr){
   console.log(this,val,index,arr)
 }.bind(123))//this=>123
 
 // map() 适合配合return 数据交互做映射 返回新的数组
 let arr =[
   {title:'aaa',red:100,hot:true},
   {title:'aaa',red:100,hot:true},
   {title:'aaa',red:100,hot:true},
 ]
 
 arr.map((item,index,arr)=>{
   let json={}
   json.t=`@_@${item.title}--`;
   json.r=item.red+99;
   json.h=item.hot===true && 'good';
   return json;//返回一个新数组
 })
 
 
 
 //1) forEach 代替 for
 let arr = ['apple','banana','orange','tamato']
 function findValueArray(arr, item){
   arr.some((val,index,arr)=>{
     return val ===item
   })
 }
 findValueArray(arr,'tamato') //true
 findValueArray(arr,'pear') //false
 
 arr.reduce()//字面减少，从左向后阶层
 arr,reduceRight()//从右向左阶层
 arr.reduce((prev,cur,index,arr)=>{//(prev=前一个,cur=当前的,index=索引,arr=数组)类例递归 求阶层
 
 })
 
 //for...of
 let arr = ['apple','banana','orange','tamato']
 
 for (let val of arr){
   console.log(val)//'apple','banana','orange','tamato'
 }
 
 for (let index of arr.keys()){// arr.keys()下标
   console.log(index)//0,1,2,3
 }
 
 for (let item of arr.entries()){// arr.entries() 某一项
   console.log(item)//[0,'apple'] [1,'banana'] [2,'orange'] [3,'tamato']
 }
 for (let [key,val] of arr.entries()){
   console.log(key,val)//0,'apple' 1,'banana' 2,'orange' 3,'tamato'
 }
 
 //Array.of()// 作用是把一串字符串变成数组
 Array.of('1',2,3,4,5)//=>['1',2,3,4,5]
 
 //arr.find()  查找,找出数组第一个符合条件的成员，没有返回undefined
 [20,111,57,0,-1].find((val,index,arr)=>{
   return val>100
 })//=> 111
 
 //arr.findIndex()  查找,找出数组第一个符合条件的成员的下标，没有返回-1
 [20,111,57,0,-1].findIndex((val,index,arr)=>{
   return val>100
 })//=> 1
 
 //arr.fill()//填充 默认值 arr.fill('填的内容'，开始下标，结束下标)
 let arr = new Array(10)//初始length为10的empty[empty × 10]
 arr.fill('默认值')//["默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值"]
 
 //arr.includes()
 arr.includes()//同字符串的includes查找，返回true/false
 
 //================= 对象的简洁语法 =================
 let name ='me';
 let age= 30;
 let json ={
    name,//等同name:name
    age,//等同age:age
   //  showA:function(){
   //    return this.name //me
   //  },简写如下 ！注意对象里不能用箭头函数
    showA(){
      return this.name//me
    }
 }
 
 /*
 工作中遇到的同类简写：
 例：*/
 new Vuex.Store({
   state,//=> state:state
   mutation,// => mutation:mutation
   types, //=> types:types
   action  //=> action:action
 })
 
 //对象新增的一些方法
 
 //Object.is(前值,后值)比较前后两值是否相等
 console.log(NaN ===NaN)//false
 Number.isNaN(NaN)//true
 console.log(Object.is(+0,-0))//false
 console.log(Object.is(NaN,NaN))//true
 
 //Object.assign() =>复制克隆对象 或 合并参数对象也可以合并数组， Object.assign(target, source1.source2,.......) => 得到一个新对象
 Object.assign({},{a:1},{b:2},{c:3})//=> {a: 1, b: 2, c: 3}
 Object.assign([],[1,2,3])//=>[1,2,3] 
 Object.assign([],[1,2,3],[4,5,6])//=>[4,5,6]  后面的会覆盖前面的
 
 //Object.keys()
 let json = {
   a:1,
   b:2,
   c:3
 }
 for (let key of Object.keys(json)){
   console.log(key) // =>a b c
 }
 //另一个简洁方法 解构Object
 let { is,assign,keys,values,entries} =Object
 
 for (let key of keys(json)){
   console.log(key) // =>a b c
 }
 
 for (let key of values(json)){
   console.log(key) // =>123
 }
 
 for (let key of entries(json)){
   console.log(key) // => ["a", 1]["b", 2] ["c", 3]
 }
 for (let [key,val] of entries(json)){
   console.log(key,val) // => a 1 | b 2 | c 3
 }
 
 //对象的扩展运算。。。
 let json = {a:1, b:2, c:3, d:4, e:5, f:6}
 let {x,y,...z} = json
 console.log(x,y,z)//=>1,2,{3,4,5,6}
 
 json ={a:1, b:2}
 json2 ={...json}
 delete json2.b
 console.log(json)// => {a:1, b:2}
 console.log(json2)//=> {a:1}
 
 // ================================== promise 承诺 ===============================
 
 //作用 解决异步回调 
 let a =10
 let promise = new Promise((resolve,reject)=>{
   //resolve 成功调用
   //reject 失败调用
   if(a==10){
     resolve('成功')
   }else{
     reject('失败')
   }
 })
 
 promise.then(res=>{//then返回的也是一个promise
   console.log(res)
 },err=>{
   console.log(err)
 })
 
 promise.catch(err=>{//reject 发生错误的别名
   console.log(err)
 })
 
 var p = Promise.resolve('aa')//将现有的东西转成一个promise 对象，resolve状态 成功状态
 var b = Promise.reject('vv')//将现有的东西转成一个promise 对象，resolve状态  失败状态
 p.then(res=>{
   cosnole.log(res)//=>aa 
 }).catch(err=>{
   consolelog(err)
 })
 
 b.then(res=>{
   cosnole.log(res)
 }).catch(err=>{
   consolelog(err)//=>vv
 })
 
 //promise.all([p1,p2,p3]) 把promise 打包，扔到一个数组里,打包完还是一个promise对象
 //2) 注意必需确保所有的promise对象，都是resolve成功状态
 
 let p1= Promise.resolve('aaa')
 let p2= Promise.resolve('bbb')
 let p3= Promise.resolve('ccc')
 
 Promise.all([a1,a2,a3]).then(res =>{
   console.log(res)//=>['aaa','bbb','ccc']
   let [res1,res2,res3]= res
   console.log(res1,res2,res3) //=> aaa bbb ccc
 })
 //promise.rece([p1,p2,p3]) 同样把promise 打包，扔到一个数组里,打包完还是一个promise对象
 //2)只要有一个是resolve成功状态就返回
 
 let p1= Promise.reject('aaa')
 let p2= Promise.resolve('bbb')
 let p3= Promise.reject('ccc')
 
 Promise.all([a1,a2,a3]).then(res =>{
   console.log(res)//=>[bbb']
 }).catch(err=>{
   console.log(err)
 })
 
 //mock 一个例子摸似一个用户登陆的状态 用户登陆->获取用户信息
 let status = 0000
 let token = 1
 let userLogin = (resolve, reject)=>{
   setTimeout(() => {
     if(status == 0000){
      resolve({data:{},msg:'用户登陆成功',token:'sadfasdfsdf'})
     }else{
       reject('用户登陆失败')
     }
     
   }, 2000);
 }
 
 let getUserInfo = (resolve, reject)=>{
   setTimeout(() => {
     if(token ==1){
      resolve({data:{},msg:'获取用户信息成功',token:'sadfasdfsdf'})
     }else{
       reject('获取用户信息失败了')
     }
     
   }, 2000);
 }
 
 new Promise(userLogin).then(res=>{
   console.log(res.msg)
   token = res.token
   return new Promise(getUserInfo)
 }).then(res =>{
   console.log(res.msg,res)
 },err=>{console.log(err)})
 
 // ========================= 模块化 ================================
 //js 以前不支持模块化
 
 //es6之前社区定制一套模块规范
 //1） Commonjs 主要服务端规范 nodeJs require('http')
 //2） AMD require,curlJs
 //3） CMD seaJs
 
 // Es6出来，同意肥务端和客户端模块规范
 /*
   模块化：
   注意：前提必段是服务器环境
   a) 如何定义  export
   b) 如何引入  import 可以是相对路径也可以是绝对路径, 无论引入几次只导出一次
      import 有提升效果，在import引用之前用也可以用模块里的上引用
   c)import导出去的模块，如果里面有定时器更改，外面也会改动，不像common规范缓存
   d)import 可以类似node里面的requre可以动态引用 默认的import不能用if...else
 
   --- 强大的import() ---
   e)import() 是一个Promise对象
    优点:1)可以按需加载
        2）可以写在if中
        3）路径可以动态
   */  
   let sign=1,
   function config(){
     switch (sign) {
       case 1:
         return '1.mod';
         break; 
       case 2:
         return '2.mod';
         break;
     }
   }
   import(config(sign)).then(res=>{
     console.log(res.a)
   })
 
   // -----Promise.all 动态引入----
   new Promise.all([
     import('1.mod'),
     import('2.mod')
   ]).then(([mod1,mod2]) =>{
     console.log(mod1,mod2)//解构
   })
 
 
 // =============举个栗子🌰
 
 /*
 <head>
   <script type="module">
     import './modulus/1.js'
     import {a, b, c} from './modulus/1.js'
     console.log(a,b,c)//=>10 0 1
   </script>
 </head>
 */
 
 
 /*------  模块文件./modulus/1.js----*/
 
 export const a=10;
 export const b=0
 export const c=1
 // --简化--
 
 const a=10
 const b=0
 const c=1
 
 export {
   a,
   b,
   c
 }
 // --- 起别名 ---
 // 模块文件./modulus/1.js
 export {
   a as apple,
   b as banana,
   c as orange
 }
 
 //html文件
 import {apple,banana,orange} from './modulus/1.js'
 console.log(apple,banana,orange)//=>10 0 1
 
 // --------起别名
 
 import {apple as a,banana as b,orange as o} from './modulus/1.js'
 console.log(a,b,o)//=>10 0 1
 
 // ---- 把1.js模块内容全部导出并起别名----
 
 import * as modTow from './modulus/1.js'
 console.log(modTow.apple) //=>10
 
 
 // ------- 模块里带export default import引用时不需要加{} 没有default的export 需要加{}
 
 export default a=10
 export const b=0
 export const c=1
 
 // ----1.js
 import a, {b,c} from './modulus/1.js'
 console.log(a,b,c)//10 0 1
 
 // async await 方式引用------
 async function main (){
   const mod1 =await import('./modulus/1.js')
   const mod2 =await import('./modulus/2.js')
   console.log(mod1, mod2)
 
   const [m1, m2] = await Promise.all([
     import('./modulus/1.js'),
     import('./modulus/2.js')
   ])
 
   console.log(m1, m2)
   
 }
 
 main()
 
 // ============================ es6 的class 类==============================
 // ES5之前的定义对象的方式我
 // 函数实例:属性，方法
 // ES6 中 class constructor
 function Person(name, age){
   this.name = name,
   this,age = age
 }
 // --------------
 Person.prototype.showName=function(){
   return `名子为：${this.name}`
 }
 Person.prototype.showAge=function(){
   return `年纪为：${this.age}`
 }
 // ------ 简化上面代码 ----
 Object.assign(Person.prototype,{
   showAge(){
     return `名子为：${this.age}`
   },
   showName(){
     return `年纪为：${this.name}`
   }
 })
 
 let p1 = new Person('jenny',18)
 console.log(p1.showName)
 console.log(p1.showAge)
 
 // ============ es6 ================
  let myChineseName="linjie"
  let my="zheng"
  class Person {//也可以 const Person = class{} 不推荐
   constructor(name,age){//构造方法（函数），只要调用new就自动执行
     console.log(`调用执行${name}${age}`)
     this.name=name;
     this.age;
   }//这里不可以加逗号‘,’
   showAge(){//这里不需加function(){...}
     return `名子为：${this.age}`
   }
   showName(){
     return `年纪为：${this.name}`
   }
   [myChineseName](){//myChineseName(){
     return '变量式函数'
   }
   [my+myChineseName](){
     return '运算后变量式函数'
   }
 }
 
 let p1 = new Person('jenny',18)
 console.log(p1.showName, p1.showAge)//=>名子为：jenny, 年纪为：18
 console.log(p1.myChineseName)//=> undefined 
 console.log(p1.linjie, p1.linjie())// => fn() 变量式函数 
 console.log(p1[myChineseName], p1[myChineseName]())// => fn() 表达式变量函数 
 console.log(p1[my+myChineseName], p1[my+myChineseName]())// => fn() 运算后变量式函数  相当于console.log(p1.zhenglinjie, p1.zhenglinjie())
 //============= 实用案例 react ============
 
 return (
   <input type="text" name="username" value={this.state.username} onClick={this.handleClick}/>
   <input type="number" name="age" value={this.state.age}/>
 )
 
 
 handleClick(ev) {
   this.state({
     [ev.target.name]:[ev.target.value]
   })
 }
 //注意 
 /*
 
 1)es6 的class没有提升的功能，必需先名明再调用，在es5，用函数模拟可以，默认函数提升
 2)矫正this指向
  1。fn.call(this指向谁，args1,args2...)
  2。fn.apply(this指向谁，[args1,args2...])
  3。fn.bind()
 前两个是两执行再指向，bind不执行，直接指向
 
 -----------------------
 */
 
 // =========== 类对象的解构 ===
 
 class Person {
   constructor(){
     this.name='zlj';
     this.showName =this.showName.bind(this); //指定this指向类本身，必需加，没有这句角构报借，log => this = undefined
   }
   showName(){
     console.log("this:",this)
     return `名字为：${this.name}`
   }
 }
 
 let p1 =new Person()
 let {showname} = p1
 console.log(showname()) //=> 名字为：zlj
 
 //class 里面取值（获取）函数（getter），存值（设置）函数（setter）
 
 class Person {
   constructor(){
     
   }
   get apple(){
     return `获取apple的属性`
   }
   set apple(val){
     console.log(`设置apple的属性。值为${val}`)//=>监听到设置的值 =>just me!
   }
 }
 
 p1 = new Person()
 p1.aaa = 'just me!'
 console.log(p1.apple)//=>获取apple的属性
 
 
 //=======  class静态方法 static====================
 
 class Person{
   constructor(){
     
   }
   static aaa(){
     return `这是静态方法`
   }
 }
 
 Person.aaa() //=> 这是静态方法  （不必声明可直接用类调用静态属性）
 
 //===============class类 子类和父类的继承 ==============
 
 // 之前
 //父类
 function person(name){
   this.name = name
 }
 person.prototype.showName=function(){
   return `名字是：${this.name}`
 }
 
 //子类
 function student(name,skill){ 
   Person.call(this,name)// 继承属性
   this.skill = skill
   //return`${name} 在 ${skill}`// 技能
 }
 student.prototype = new person()// 继承方法
 
 let stu1 = new student('zlj','学习')
 stu1.showName()//=>zlj在学习
 
 // es6 之后 -------------------
 // 现在用 extends 继承
 //父类
 class Person{
   constructor(name){
     this.name = name
   }
   showName(){
     return `名字是父类的：${this.name}`
   }
 }
 
 
 //子类
 class student extends Person{
   constructor(name,skill){
     //子类 自已身上加属性的时候，必需用super(args)否而会覆盖父类报错， argument 是继承的父类的参数
     super(name)
     this.skill = skill
   }
   showName(){//
     super.showName()//super.fn()父类的方法执行 确保子类同名方法不覆盖父类的方法
     //TODO 做子类的事情 
     return `子类的事件：${this.name}`
   }
 }
 
 //调用
 let stu1 = new student('zlj','学习')
 stu1.showName()//=>zlj在学习
 console.log(stu1.skill) //=> 学习
 
 //=========== 关于Class  一个拖曳 demo 例子 详见class.html=========
 
 //============generrator=====
 /*
  生成器

  解决异步的问题 ，深度嵌套的问题 迭代器

  定义方式 function * fn(){}
 */
//定义
  function * gen(){
    yield 'welcome'
    yield 'to'
    yield 'myhome'
    return 'zheng theacher'
  }

//调用
  let g= gen()
  console.log(g)// 返回的是一个对象
  onsole.log(g.next())// {value:'welcome',done:false} =>done 表示是不是完成
  onsole.log(g.next())// {value:'to',done:false} =>done 表示是不是完成
  onsole.log(g.next())// {value:'myhome',done:false} =>done 表示是不是完成
  onsole.log(g.next())// {value:'zheng theacher',done:true} =>done =true 完成

  //上述调用，手机调用，麻烦  简化

  for (let key of g){
    console.log(key)//但是 return 里的内容不能遍历
  }

  //解构方法 

  let [a,b,c,d] =  g
  console.log(a,b,c,d)//=>welcome to myhome undefined   ==>return 里的不能被解构

  let [a,...d] =  g
  console.log(a,d)//welcome [to, myhome]

  console.log(...g)//=> welcome to myhome

  console.log(Array.from(gen()))//=>[welcome, to, myhome] 转成数组

  //====用 generator解决异步====
  function * gen(){
    let val = yield 'linjiefe'
    yield axios.get(`https://api.github.com/users/${val}`);
  }

  let g1 =gen()

  let username = g1.next().value;

  console.log(username)//=>linjiefe
  console.log(g1.next(username).value)//=>这里因为axios返回的是一个Promise
  g1.next(username).value.then(res=>{
    console.log(res.data)
  })

  //异步 不连续，上一个操作没有执行完 下一个操作照样开始
  //同步 连续执行，上一个操作没有执行完，下一个不能进行，

  //关于异步，解决方案“
  // 1）回调函数
  // 2）事件监听
  // 3 发布/订阅
  // 4）Promise对象
  // 5）es2017 async

  
  // -----=============async====================


