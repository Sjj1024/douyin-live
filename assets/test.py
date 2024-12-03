# 根据包名启动,推荐使用
# 找到 属性名name 值为 开发者的控件
from ascript.ios.node import Selector
from ascript.ios import system
from ascript.ios import action
import time


def open_huzhijiao():
    # 音量调至最低
    # action.key_press(action.KEY_VOLUMDOWN)
    # action.key_press(action.KEY_VOLUMDOWN)
    # action.key_press(action.KEY_VOLUMDOWN)
    # action.key_press(action.KEY_VOLUMDOWN)
    # action.key_press(action.KEY_VOLUMDOWN)
    # time.sleep(2)
    # 根据包名启动,推荐使用
    system.app_start(bundle_id="com.tencent.xin")
    time.sleep(2)
    # 执行沪智慧矫正
    action_huzhijiao()


def action_huzhijiao():
    # 点击我的
    to_see = Selector().xpath("//*[@name='我的']").find()
    if to_see:
        to_see.click()
        time.sleep(1)
    # 点击可选任务
    node = Selector().xpath("//*[@name='可选任务']").find()
    if node:
        # 找到了控件
        print("找到了可选任务")
        # 打印控件属性,比较耗时
        node.click()
        time.sleep(1)
        # 看视频
        see_movide()
        # 学图文
        see_picture()
        # 完成后返回到微信
        # Selector().label("关闭").click(0).find()
        # print("自动任务已完成")
        to_see = Selector().xpath("//*[@name='我的']").find()
        if to_see:
            to_see.click()
            time.sleep(1)
    else:
        print('没有找到任何控件')


def see_movide():
    print("观看视频")
    to_see = Selector().xpath("//*[@name='我的']").find()
    if to_see:
        to_see.click()
        time.sleep(1)
    # 点击可选任务
    node = Selector().xpath("//*[@name='可选任务']").find()
    if node:
        # 找到了控件
        print("找到了可选任务")
        # 打印控件属性,比较耗时
        node.click()
        time.sleep(1)
        # 去观看
        to_see = Selector().xpath("//*[@name='去观看']").find()
        if to_see:
            to_see.click()
            # 点击民俗
            time.sleep(1)
            # 去观看
            minsu = Selector().xpath("//*[@name='民俗']").find()
            if minsu:
                minsu.click()
            # 点击春节
            time.sleep(1)
            # 去观看 重复4次
            for i in range(0, 5):
                tuhua = Selector().xpath("//*[@name='春节年俗图画']").find()
                if tuhua:
                    tuhua.click()
                # 等待6:10分=370秒
                time.sleep(375)
                # click back
                back = Selector().xpath("//*[@name='返回']").find()
                if back:
                    back.click()
                time.sleep(1)


def find_fanzha():
    print("找到反诈提醒")
    while True:
        # Selector().x(15).y(318).scroll("down").find()
        # time.sleep(1)
        zhapian = Selector().xpath("//*[@name='重要！反诈骗提醒！']").find()
        if zhapian:
            # 滚动到显示
            zhapian.scroll()
            print("找到了反诈提醒")
            return
        else:
            print("没有找到反诈提醒")


def see_picture():
    print("看图文知识")
    to_see = Selector().xpath("//*[@name='我的']").find()
    if to_see:
        to_see.click()
        time.sleep(1)
    # 点击可选任务
    node = Selector().xpath("//*[@name='可选任务']").find()
    if node:
        # 找到了控件
        print("找到了可选任务")
        # 打印控件属性,比较耗时
        node.click()
        time.sleep(1)
        # 去观看
        to_see = Selector().xpath("//*[@name='去学习']").find()
        if to_see:
            to_see.click()
            time.sleep(1)
            # 其他，滑动
            other = Selector().x(324).y(223).find()
            if other:
                other.click()
                time.sleep(1)
                # 滑动找到反诈提醒
                find_fanzha()
                # see fanzhapian
                for i in range(0, 9):
                    zhapian = Selector().xpath("//*[@name='重要！反诈骗提醒！']").find()
                    if zhapian:
                        zhapian.click()
                        time.sleep(32)
                        # back
                        back = Selector().x(16).y(47).find()
                        if back:
                            back.click()
                            time.sleep(1)
                    else:
                        print("没找到 zhapian")
                print("图文知识看完了")
            else:
                print("没找到 其他")


def do_work():
    print("做题")
    to_see = Selector().xpath("//*[@name='去答题']").find()
    if to_see:
        to_see.click()
        time.sleep(1)
        aiguo = Selector().x(107).y(190).find()
        if aiguo:
            aiguo.click()
            time.sleep(1)
            to_do = Selector().x(91).y(624).find()
            if to_do:
                print(to_do.info)
                to_do.click()
                time.sleep(1)
            else:
                print("没找到开始答题")
        else:
            print("cant find aiguo")


def chuang_guan():
    print("闯关")


def signle_v2free():
    system.open_url("https://w1.v2free.cc/user")
    time.sleep(3)
    while True:
        know_btn = Selector().xpath("//*[@name='知道了']").find()
        if know_btn:
            know_btn.click()
            break
        else:
            time.sleep(3)
    time.sleep(3)
    # 滑动显示签到
    action.slide(15, 655, 15, 311)
    time.sleep(3)
    # 点击签到
    single_btn = Selector().xpath("//*[@name='check  点我签到获取流量']").find()
    if single_btn:
        print("点我获取流量")
        single_btn.click()
    else:
        print("没有找到点我获取流量")
    time.sleep(3)
    # 领到之后点知道
    Selector().label("知道了").click(0).find()
    time.sleep(3)


def test_click():
    # open safari
    # system.open_url("https://w1.v2free.cc/user")
    # time.sleep(3)
    # Selector().label("知道了").click(0).find()
    # time.sleep(3)
    # 滑动显示签到
    action.slide(15, 311, 15, 655)
    time.sleep(3)
    # 点击签到
    # Selector().name("check  点我签到获取流量").click(0).find()
    # time.sleep(3)
    # # 领到之后点知道
    # Selector().label("知道了").click(0).find()
    # time.sleep(3)


def main():
    signle_v2free()
    open_huzhijiao()


# test_click()
main()
