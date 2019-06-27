<template>
    <div>
        <div class="banner">
            开源猫科创基地自开创以来，<br>
            一直给予孩子们冠军教练团队悉心指导，<br>
            一直专业化、赛事话的器材标准教学授课，<br>
            缔造学生完美的国际化竞赛体验。<br>
            同时，期间带领学生参加了大大小小的国内、国际化赛事。<br>
            在丰富孩子们知识的同时，也励志于拓宽孩子们的视野。
        </div>
        <seat curSeatName="竞赛专区"></seat>
        <div class="container my-select pad-b-20">
            <ul>
                <li class="active point" @click="select($event,1)">
                    WER
                </li>
                <li class="point" @click="select($event,2)">
                    RLC
                </li>
                <li class="point" @click="select($event,3)">
                    VEXIQ
                </li>
                <li class="point" @click="select($event,4)">
                    RoboRAVE
                </li>
            </ul>
        </div>
        <div  class="container container-content bg-bai">
            <div>
                <div class="color-huang font-18 text-center blod pad-b-30 border-bottom">WER-世界教育机器人大赛</div>
                <div class="mt-30 introduce-box" v-if="selIndex == 1">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="com-img com-img-f"><img src="~assets/img/com_item_01.png"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="com-img"><img src="~assets/img/com_item_02.png"></div>
                        </div>
                    </div>
                    <p class="mt-20">
                        WER是世界教育机器人大赛（World Educational Robot Contest）的缩写，该赛事由"世界教育机器人学会"（World Educational Robotics Society）发起并主办，是一项针对5-18岁青少年的国际性机器人比赛，每年全球有超过30多个国家的30万名选手参加各级WER选拔赛。
WER2016赛季世界锦标赛于11月19日-20日在中国上海国家会展中心隆重举行，来自全球近30个国家的5000多名选手参与这一机器人嘉年华，分别进行“积木机器人赛”、“扩展任务赛”、“小灵感大创意”、“微镜头”4个比赛项目的角逐。
                    </p>
                    <div class="ys y-center mt-20">
                        <img src="~assets/img/medal.png">
                        <div>
                            <div class="font-16 blod color-3 y-center"><span class="sj-r"></span>开源猫参赛优势</div>
                            <p class="mt-5">
                                开源猫科创基地平时教学中彻底贯彻的创客精神，让开源猫的创客们在“小灵感大创意”的比赛项目中，获得了不少专家和同行的认可。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-30 introduce-box" v-else-if="selIndex == 2">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="com-img com-img-f"><img src="~assets/img/com_item_03.png"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="com-img"><img src="~assets/img/com_item_04.png"></div>
                        </div>
                    </div>
                    <p class="mt-20">
                        RLC机器人工程挑战赛（RECRC LEGO CHALLENGE）是由机器人教育与竞赛研究中心（RECRC）主办的针对8-16岁青少年的国际性机器人比赛。RECRC每年发布一次全新的比赛主题。比赛主题结合社会热点，引导青少年积极思考，鼓励他们利用科技解决现实问题。
比赛使用深受全球青少年欢迎的教育机器人器材——LEGO，充分发挥青少年的创造力和想象力。每年RECRC的研究员精心设计的挑战内容将通过网络全球同步发布。每只参赛队伍由3-6名队员组成，参赛队员们自比赛规则发布之日起，除了组建团队、准备比赛方案外，还要准备工程日志，记录详细的比赛准备过程。挑战任务包括机器人场地赛，机器人技术答辩，团队合作、项目研究等。
比赛以青少年为中心，在一个半封闭的环境中进行，教练和老师不能入场，只能在场外提供指导，目的就是想给孩子们提供一个充分展示自我的舞台。比赛真正考验团队成员的学习能力、应变能力、分析解决问题能力和团队协作能力，锻炼青少年的协作精神、批判性思维、项目管理能力以及人际沟通能力，为将来成为复杂社会问题的解决者和创新者做准备。
                    </p>
                    <div class="ys y-center mt-20">
                        <img src="~assets/img/medal.png">
                        <div>
                            <div class="font-16 blod color-3 y-center"><span class="sj-r"></span>开源猫参赛优势</div>
                            <p class="mt-5">
                                开源猫科创基地， 2次实验+1次制作+半学期亲子课堂+社会实践的课程模式，让孩子们充分将知识运用到解决实际问题上，在比赛上收获和成长了很多。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-30 introduce-box" v-else-if="selIndex == 3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="com-img com-img-f"><img src="~assets/img/com_item_05.png"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="com-img"><img src="~assets/img/com_item_06.png"></div>
                        </div>
                    </div>
                    <p class="mt-20">
                        VEX 机器人世界锦标赛由一些长期支持科技教育的大学、 机构和组织发起， 由美国 Robotics Education & Competition Foundation (REC)主办， 其旨在通过推广教育型机器人， 拓展中小学学生和大学生对科学、 技术、 工程和数学领域兴趣， 提高并促进青少年的团队合作精神、 领导才能和解决问题的能力。 这项在美国及全球都极具影响力的世界级机器人大赛得到亚洲机器人联盟、 美国 Autodesk 公司、 美国太空总署（NASA）、 美国易安信公司（EMC）、 卡耐基梅隆大学（CMU）、 Innovation First ,Inc等单位协办和支持。 于 2007 年在美国创办， 每年都吸引着全球 30 多个国家， 上百万青少年参与选拔，角逐参加总决赛的荣誉席位。
届时有来自美国、 加拿大、 莫斯科、 巴西、 英国、 中国、 韩国、 新加坡、 马来西亚等地区及国家共 900 队支参赛队伍参加此次盛会。 VEX 机器人世界锦标赛由一些长期支持科技教育的大学、 机构和组织发起， 由美国 Robotics Education & Competition Foundation (REC)主办， 其旨在通过推广教育型机器人， 拓展中小学学生和大学生对科学、 技术、 工程和数学领域兴趣， 提高并促进青少年的团队合作精神、 领导才能和解决问题的能力。 这项在美国及全球都极具影响力的世界级机器人大赛得到亚洲机器人联盟、 美国 Autodesk 公司、 美国太空总署（NASA）、 美国易安信公司（EMC）、 卡耐基梅隆大学（CMU）、 Innovation First ,Inc等单位协办和支持。 于 2007 年在美国创办， 每年都吸引着全球 30 多个国家， 上百万青少年参与选拔，角逐参加总决赛的荣誉席位。
届时有来自美国、 加拿大、 莫斯科、 巴西、 英国、 中国、 韩国、 新加坡、 马来西亚等地区及国家共 900 队支参赛队伍参加此次盛会。 VEX IQ是智能机器人，可以看成是VEX金属机器人的基础辅助性课程。VEX相对来说比VEX IQ会更难一些；他们是有联系，又有区别的。
                    </p>
                    <div class="ys y-center mt-20">
                        <img src="~assets/img/medal.png">
                        <div>
                            <div class="font-16 blod color-3 y-center"><span class="sj-r"></span>开源猫参赛优势</div>
                            <p class="mt-5">
                                开源猫核心师资团队由德国、美国、中国机器人研发中心核心成员组成，丰富的机器人研发的项目经验，能更为专业的指导每一个赛事的完成。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-30 introduce-box" v-else-if="selIndex == 4">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="com-img com-img-f"><img src="~assets/img/com_item_07.png"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="com-img"><img src="~assets/img/com_item_08.png"></div>
                        </div>
                    </div>
                    <p class="mt-20">
                        RoboRAVE是一项由Intel公司主要赞助和支持的国际机器人竞赛，它于2001年起源于美国的新墨西哥州。RoboRAVE因其易上手、教育性和趣味性强的特点，在近些年得到了迅速发展。目前，除美国本土学生外，中国、法国、哥西班牙、日本、阿根廷、哥伦比亚、墨西哥、捷克和印度等10余个国家的学生也已经参与其中。中国组委会也同时兼任RoboRAVE的亚洲组委会，担负RoboRAVE在中国乃至亚洲地区的推广和组织工作。
                    </p>
                    <div class="ys y-center mt-20">
                        <img src="~assets/img/medal.png">
                        <div>
                            <div class="font-16 blod color-3 y-center"><span class="sj-r"></span>开源猫参赛优势</div>
                            <p class="mt-5">
                                开源猫科创基地拥有多项机器人专利，多省市机器人协会的理事，拥有丰富的比赛资源和项目经验，以实际经历言传身教给每一个开源猫科创基地的孩子们。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bet"></div>
    </div>
</template>
<script>
import seat from '../components/seat.vue'
export default {
    head() {
        return {
            title:'竞赛加分',
        }
    },
    data(){
        return {
            selIndex:1
        }
    },
    components:{
        seat
    },
    methods:{
        select(e,index){
            var node = e.target;
            var arr = $('.point');
            for(var i = 0; i < arr.length; i++){
                if(node != arr[i]){
                    $(arr[i]).removeClass('active')
                }
            }
            $(node).addClass('active');
            this.selIndex = index;
        }
    },
    mounted(){
        $(window).off("scroll")
    }
}
</script>
<style lang="less" scoped>
    @import '~assets/css/main.less';
    .banner {
        background: url(~assets/img/com_banner.png);
        background-size: 100%;
        padding: 50px 15px;
        color: #f5f5f5;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        line-height: 2em
    }
    .my-select {
        overflow: hidden;
        li {
            float: left;
            padding: 5px 30px;
            background-color: #dbdbdb;
            border-radius: 50px;
            color: #666;
            margin-right: 15px;
            min-width: 100px;
            text-align: center
        }
        li:hover {
            background-color: @bg_huang;
            color: #fff
        }
        .active {
            background-color: @bg_huang;
            color: #fff
        }
    }
    .container-content {
        >div {
            padding: 45px 20px; 
            .introduce-box {
                color: #666;
                .com-img {
                    padding: 15px 0;
                    img {
                        width: 100%;
                        display: block
                    }
                }
                .com-img-f {
                    padding-right: 11.8%
                }
                p {
                    line-height: 2em
                }
                .ys {
                    img {
                        width: 140px;
                        margin-right: 30px
                    }
                    .sj-r {
                        width: 0;
                        height: 0;
                        display: inline-block;
                        border-top: 8px solid transparent;
                        border-left: 8px solid @bg_huang;
                        border-bottom: 8px solid transparent;
                        margin-right: 10px
                    }
                }
            }
        }
    }
    .bet {
        height: 50px;
    }
    @media (max-width:800px) and (min-width: 770px) {
        .container-content {
            >div {
                .introduce-box {
                    .com-img-f {
                        padding-right: 11.8% !important
                    }
                }
            }
        }
    }
    @media (max-width:800px) {
        .banner {
            font-size: 14px;
            padding: 20px 15px
        }
        .container-content {
            >div {
                padding: 35px 0;
                .introduce-box {
                    .com-img {
                        padding: 15px 0
                    }
                    .ys {
                        img {
                            width: 110px
                        }
                    }
                }
            }
        }
        .my-select {
            li {
                padding: 5px;
                color: #666;
                margin: 0 2%;
                min-width: inherit;
                width: 46%;
            }
            li:nth-child(n + 3){
                margin-top: 15px
            }
        }
    }
</style>


