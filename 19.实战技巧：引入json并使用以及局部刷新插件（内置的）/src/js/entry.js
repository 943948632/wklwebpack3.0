import css from '../css/entry.css';
// import $ from 'jquery';//普通的局部引用 不建议 这么用
document.getElementById('title').innerHTML='devServer'
let a='9.18';
console.log(Number.parseInt(a)); 

$('#title').html('利用webpack自带插件，引入第三方库jquery')
// 引入json webpack3.0已经应用了这个所以 就不用引入json的loader
var json =require('../../config.json');
document.getElementById("json").innerHTML= json.name+json.age;