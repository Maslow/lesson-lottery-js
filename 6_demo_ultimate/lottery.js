/**
 *
 * Date : 2016/9/12
 * Author : Malsow(wangfugen@126.com)
 */

(function () {
    function createLottery(item_selector, callback) {
        var lottery = {
            index: 0,
            prize_index: -1,
            item_selector: item_selector,
            t: 50,
            a: 3,
            count: 0,
            min_times: 40,
            total_times: 0,
            active_class: 'active'
        };
        lottery.count = $(item_selector).length;
        lottery.update = function () {
            $(item_selector).eq(lottery.index).addClass(lottery.active_class).siblings().removeClass(lottery.active_class);
        };

        lottery.compute_a = function () {
            var t = lottery.t;
            var a = lottery.a;

            if (t < 100) {
                return a * 1.001;
            } else if (lottery.t < 200) {
                return a * 1.01;
            } else if (lottery.t < 300) {
                return a * 1.1;
            } else if (lottery.t < 400) {
                return a * 1.2;
            } else {
                return a * 1.3;
            }
        };

        lottery.setPrizeIndex = function(id){
            lottery.prize_index = id;
        };

        lottery.loop = function () {
            lottery.a = lottery.compute_a();

            if (lottery.prize_index != -1)
                lottery.t = lottery.t + lottery.a;

            if (lottery.total_times > lottery.min_times && lottery.index == lottery.prize_index + 1 && lottery.t > 500) {
                callback(lottery.index);
            } else {
                lottery.update();
                lottery.total_times++;
                lottery.index++;
                lottery.index = lottery.index % lottery.count;
                setTimeout(lottery.loop, lottery.t);
            }
        };
        return lottery;
    }

    window.createLottery = createLottery;
})();
