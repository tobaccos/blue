lmapp.controller('tsdCtrl',function($scope,$routeParams){
        $scope.playflag = false;
        $scope.textflag = false;
        $scope.fenshu = 6;
        $scope.pingfen =function(e){
            var t1 = e.target.getAttribute('data');
            $scope.fenshu = t1;
        }
        $scope.titleflag = true;
        // 回复框的angular控制
        $scope.secshow1 = false;
        $scope.secshow2 = false;
        $scope.newshow1 = false;
        $scope.newshow2 = false;
        
        $(function(){
            $(".play-btn").on('click',function(){
                var player = document.getElementById('audio');
                if(player.paused){
                    player.play();
                }else{
                    player.pause();
                }
            });
        })
        $scope.array1 = {
            singertu:"image/tsdetail/singer.jpg",
            songName:"刚刚好",
            score:8.2,
            pfnum:80,
            songinfo:{
                singer:"薛之谦",
                ci:"张楚翘",
                qu:"伍乐城",
                lang:"国语",
                company:"环球音乐",
                albumname:"初学者",
                time:"2016-06-07"
            },
            audio:'res/ganghao.mp3',
            geci:[
                "如果有人在灯塔",
                "拨弄她的头发",
                "思念刻在墙和瓦",
                "如果感情会挣扎",
                "没有所得儒雅",
                "把挽回的手放下",
                "镜子里的人说假话",
                "违心的样子你决定了吗",
                "装聋或者做哑 要不我先说话",
                "我们的爱情 到这儿刚刚好",
                "剩不多也不少 还能忘掉",
                "我应该可以 把自己照顾好"
            ],
            albumtext:'"我们的爱情到这刚刚好 剩不多也不少 还能忘掉" 卸下“段子手”的华丽戏服 薛之谦诚恳唱出分手恋人的勇敢与不舍 《刚刚好》这首歌同样由薛之谦亲自词曲操刀，是他最擅长地以深情慢歌便能“杀人不见血”的抒情之作。薛之谦诠释的经典情歌诸如《丑八怪》、《绅士》、《演员》等歌曲至今仍萦绕在耳，传唱度持续延烧。这次推出新专辑，除了极力创作全新音乐品种之外，薛之谦仍不忘回馈一路支持他的乐迷最熟悉的“薛式情歌”。近年薛之谦以诙谐搞笑形象红遍综艺圈，但一直有死忠歌迷翘首期盼，并不停询问薛之谦什么时候要再唱情歌，《刚刚好》这首歌便顺应而生。《刚刚好》这首歌的旋律层次分明，尤其副歌部分记忆点颇高，只听过一次便能让你跟着哼唱。编排细腻的和弦走法加上薛之谦的诚恳音色彷佛他此刻已卸下“段子手”的华丽戏服，还原成一个男人面临分手时候的勇敢与不舍，让人听了心生感动。薛之谦的写词功力经由这些年的创作焠炼更是一举升华，字字要命，句句正中要害！“如果分手太复杂，流浪的歌手会放下吉他”、“我们的流浪到这刚刚好，趁我们还没到天涯海角，我也不是非要去那座城堡”、“是否要逼人弃了甲，亮出一条伤疤，不堪的根源在哪”每句歌词都直指恋人的内心世界，说出了一个男人为了让深爱的人宽心，宁愿自己开口提分手，把爱情亲手结束在“刚刚好”的时机，却背对着恋人强忍泪水。有类似分手经验的人想必会对《刚刚好》这首歌产生共鸣，重新披上“情歌手”外衣的薛之谦，这次会让你对他的内敛伤情深深触动!'+
            '    ',
            singerbanner:"image/tsdetail/singerbanner.jpg",
            albumposter:"image/tsdetail/vediobanner.jpg",
            albumsrc:"",
            othersongs:[
                {
                    songname:"初学者",
                    bar:'50%',
                },
                {
                    songname:"我好像在哪见过你",
                    bar:'10%',
                },
                {
                    songname:"演员",
                    bar:'20%',
                },
                {
                    songname:"绅士",
                    bar:'20%',
                },
                {
                    songname:"一半",
                    bar:'60%',
                },
                {
                    songname:"小孩",
                    bar:'40%',
                },
                {
                    songname:"花儿和少年",
                    bar:'50%',
                },
                {
                    songname:"下雨了",
                    bar:'42%',
                },
            ],
            jccomment:{
                comment1:{
                    name:"小夏同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                },
                comment2:{
                    name:"小夏同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是动态生成的第二条评论，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                }
            },
            zxcomment:{
                comment1:{
                    name:"小夏同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是最新的第一条评论「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                },
                comment2:{
                    name:"小夏同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是最新的第二条评论，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                }
            },
            otherpub:[
                {
                    name:"我从崖边跌落1",
                    id:1
                },
                {
                    name:"我从崖边跌落2",
                    id:1
                },
                {
                    name:"我从崖边跌落3",
                    id:1
                },
                {
                    name:"我从崖边跌落4",
                    id:1
                },
                {
                    name:"我从崖边跌落5",
                    id:1
                },
                {
                    name:"我从崖边跌落6",
                    id:1
                }
            ]
        }

        $scope.array2 = {
            singertu:"image/tsdetail/singer2.jpg",
            songName:"夜空中最亮的星",
            score:8.5,
            pfnum:90,
            songinfo:{
                singer:"邓紫棋",
                ci:"逃跑计划",
                qu:"伍逃跑计划",
                lang:"国语",
                company:"美丽世界音乐",
                albumname:"夜空中最亮的星",
                time:"2011-04-12"
            },
            audio:'res/ykzzldx.mp3',
            geci:[
                "夜空中最亮的星 能否听清",
                "那仰望的人 心底的孤独和叹息",
                "夜空中最亮的星 能否记起",
                "曾与我同行 消失在风里的身影",
                "我祈祷拥有一颗透明的心灵",
                "和会流泪的眼睛",
                "给我再去相信的勇气",
                "越过谎言去拥抱你",
                "每当我找不到存在的意义",
                "每当我迷失在黑夜里",
                "夜空中最亮的星",
                "请照亮我前行",
                "夜空中最亮的星 是否知道",
                "曾与我同行的身影 如今在哪里"
            ],
            albumtext:'有时，走在白天，也像走在夜里。孤单和茫然，都会让人坠入黑暗。每当这时我都会仰起头。是的，我愿意成为一个仰望星空的人，拥有透明的心灵、和会流泪的眼睛。因为懂得痛，才能面对痛。而其实，黑不可怕，只要能抬头看到你。这是唱这首歌时，邓紫棋心里的话。邓紫棋推出新的翻唱作品《夜空中最亮的星》（原唱：逃跑计划乐队），丰富电音的加入，将这首摇滚歌曲演绎得更为磅礴生动'+'    ',
            singerbanner:"image/tsdetail/singerbanner2.jpg",
            albumposter:"image/tsdetail/vediobanner.jpg",
            albumsrc:"",
            othersongs:[
                {
                    songname:"阳光照进回忆里",
                    bar:'40%'
                },
                {
                    songname:"Is This Love",
                    bar:'50%'
                },
                {
                    songname:"一万次悲伤",
                    bar:'30%'
                },
                {
                    songname:"结婚",
                    bar:'20%'
                },
                {
                    songname:"再见 再见",
                    bar:'60%'
                },
                {
                    songname:"哪里是你的拥抱",
                    bar:'40%'
                },
                {
                    songname:"Apple",
                    bar:'50%'
                },
                {
                    songname:"Take Me Away",
                    bar:'42%'
                }
            ],
            jccomment:{
                comment1:{
                    name:"小刘同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                },
                comment2:{
                    name:"小张同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是动态生成的第二条评论，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                }
            },
            zxcomment:{
                comment1:{
                    name:"小艾同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是最新的第一条评论「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                },
                comment2:{
                    name:"小娜同学",
                    head:"image/tsdetail/userhead.png",
                    time:"5/23 16:15",
                    content:"这里是最新的第二条评论，不久前为新专辑MV的拍摄，专程来到了龙井一所大房子取景，在这里跟大家分享这座大房子背后一对年轻...妇的故事。内地流行乐双人组合「牛奶咖啡」，不久前为新专辑MV的拍摄，专程来到",
                    zan:22,
                    replay:22
                }
            },
            otherpub:[
                {
                   name:"喜欢你",
                   id:1
                },
                {
                   name:"泡沫",
                   id:2
                },
                {
                   name:"红蔷薇白玫瑰",
                   id:3
                },
                {
                   name:"多远都要在一起",
                   id:4
                },
                {
                   name:"后会无期",
                   id:5
                }  
            ]
        }
        function load(id){
            if(id==1){
                $scope.songarray = $scope.array1;
            }else{
                $scope.songarray = $scope.array2;
            }
        }
        load($routeParams.id);
})