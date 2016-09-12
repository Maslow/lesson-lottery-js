/**
 * Created by Administrator on 2016/9/12.
 */



var i = 0;              //当前奖品的索引
var t = 200;            //[切换]的时间间隔
var count = $(".lottery-container .item").length;   //商品总数
var total_times = 0;    //当前已经[切换]的总次数
var min_times = 20;     //最低[切换]次数
var prize_index = 3;    //指定中奖奖品的索引

function update(index) {
    $(".lottery-container .item").eq(index).addClass('active').siblings().removeClass('active');
}

function loop() {
    if (total_times > min_times && i == prize_index + 1) {
        alert('Congratulations');
    } else {
        update(i);
        total_times++;
        i++;
        i = i % count;
        setTimeout(loop, t);
    }
}

loop();