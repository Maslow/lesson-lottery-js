/**
 * Created by Administrator on 2016/9/12.
 */


var i = 0;              //当前奖品的索引
var t = 50;             //[切换]的时间间隔
var count = $(".lottery-container .item").length;   //商品总数
var total_times = 0;    //当前已经[切换]的总次数
var min_times = 20;     //最低[切换]次数
var prize_index = -1;    //指定中奖奖品的索引
var a = 3;              //加速度(速度变化)

function update(index) {
    $(".lottery-container .item").eq(index).addClass('active').siblings().removeClass('active');
}

function loop() {
    // 下面是我根据t的值，对a进行调整，数据是根据实际效果调出来的，不具有什么特殊意义
    if (t < 100) {
        a = a * 1.001;
    } else if (t < 200) {
        a = a * 1.01;
    } else if (t < 300) {
        a = a * 1.1;
    } else if (t < 400) {
        a = a * 1.2;
    } else {
        a = a * 1.3;
    }

    //间隔时间增加了a，即速度减少了a
    if (prize_index != -1)
        t = t + a;

    console.log(t);

    if (total_times > min_times && i == prize_index + 1 && t > 500) {
        alert('Congratulations');
    } else {
        update(i);
        total_times++;
        i++;
        i = i % count;
        setTimeout(loop, t);
    }
}


function start() {
    $.ajax({
        url:"code.json",
        method: 'post',
        dataType:'json',
        success: function(rs){
            prize_index = rs.prizeIndex;
            console.log(prize_index);
        }
    });
    loop();
}