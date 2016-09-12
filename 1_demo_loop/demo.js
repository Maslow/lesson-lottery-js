/**
 * Created by Administrator on 2016/9/12.
 */
var i = 0;       //循环变量
var t = 100;     //每次循环的时间间隔
var times = 30;  //循环次数

function loop() {
    if (i > times) {
        console.log("The end!");
    }else{
        i++;
        console.log(i);
        setTimeout(loop, t);
    }
}

loop();