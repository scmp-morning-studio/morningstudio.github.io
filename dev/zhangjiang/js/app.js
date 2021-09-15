;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed)}else{doc.detachEvent('onreadystatechange',completed)}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery)}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed)}else{doc.attachEvent('onreadystatechange',completed)}}init()})(window,document,function(win,$){
    $.ajaxSetup({cache:true});
    $.ajax('./js/vue.min.js')
    .then(function(){return $.ajax('./js/component.min.js')})
    .then(function(){return $.ajax('./js/gsap.min.js')})
    .then(function(){return $.ajax('./js/scrolltrigger.min.js')})
    .then(function(){return $.ajax('./js/swiper.min.js')})
    .then(function(){
        var imagelist = [
            "aidistrict_base.jpg",
            "aisland_buildings.jpg",
            "aisland.jpg",
            "bg_btm.jpg",
            "kv_m.jpg",
            "aisland_buildings_active.png",
            "heatmap_bg_world.png",
            "ic_companies.png",
            "aisland_buildings_alibaba.png",
            "aisland_buildings_ibm.png",
            "aisland_buildings_ms.png",
            "aisland_buildings_pp.png",
            "aisland_buildings_seed.png",
            "aidistrict_industrial_aisland.png",
            "aidistrict_industrial_inodev1.png",
            "aidistrict_industrial_inodev2.png",
            "aidistrict_scene_application.png",
            "aidistrict_scene_community.png",
            "aidistrict_scene_urban.png",
            "aidistrict_support_education.png",
            "aidistrict_support_exhibition.png",
            "aidistrict_support_research.png",
            "aidistrict_support_sciencehall.png",
            "aidistrict_support_talenthub.png",
            "aisland_application_driving_off.png",
            "aisland_application_dron-air_off.png",
            "aisland_application_dron-aqua_off.png",
            "aisland_application_dron-land_off.png",
            "aisland_application_energy_off.png",
            "aisland_application_irrigation_off.png",
        ],
        imagePath = "./images/";

        var MS = new Vue({
            el: '#msapp',
            data: {
                loaded:false,
                kv:"",
                message:{
                    landscape:false,
                    ie:false,
                },
                aisCompaniesMob:'',
                heatmap:[
                    {
                        id    : "zj",
                        country: "Shanghai",
                        revers: true,
                        morevers:true,
                        place : "Zhangjiang AIsland",
                        detail: [
                            {
                                li:"300 billion yuan (US$46.4 billion)<br class='br767'/> digital economy by 2022"
                            },
                            {
                                li:"More than 100 companies"
                            },
                            {
                                li:"100,000m²"
                            }
                        ]
                    },
                    {
                        id    : "sf",
                        country: "San Francisco",
                        revers: true,
                        morevers:false,
                        place : "",
                    },
                    {
                        id    : "canada",
                        country: "Montreal",
                        revers: true,
                        place : "SCALE.AI Supercluster",
                        detail: [
                            {
                                li:"US$182 million in investments and counting"
                            },
                            {
                                li:"US$13.1 billion to Canada’s economy<br class='br767'/> and 16,000 jobs created by 2028"
                            },
                            {
                                li:"Québec City-Waterloo corridor"
                            }
                        ]
                    },
                    {
                        id    : "boston",
                        country: "Boston",
                        revers: false,
                        morevers:false,
                        place : "",
                    },
                    {
                        id    : "london",
                        country: "London",
                        revers: false,
                        morevers:false,
                        place : "",
                    },
                    {
                        id    : "taiwan",
                        country: "Hsinchu",
                        revers: true,
                        morevers:true,
                        place : "Hsinchu County International<br class='br767'/> AI Smart Business Park",
                        detail: [
                            {
                                li:"US$390.9 billion market by 2025"
                            },
                            {
                                li:"150,000 people currently employed"
                            },
                            {
                                li:"126,000m²"
                            }
                        ]
                    },
                    {
                        id    : "japan",
                        country: "Tokyo",
                        revers: false,
                        morevers:true,
                        place : "Hongo Valley",
                        detail: [
                            {
                                li:"80 start-ups supported"
                            },
                            {
                                li:"1.36 million m²"
                            }
                        ]
                    }
                ],
                aisland:{
                    current:"companies",
                    cate:[
                        {
                            id:"companies",
                            name:"Companies",
                            active:"ibm",
                            list:[
                                {
                                    id  : "ibm",
                                    name: "IBM",
                                    desc: "American multinational tech company and a major research organisation that has received the most US patents annually among all companies for 28 consecutive years."
                                },
                                {
                                    id  : "ms",
                                    name: "Microsoft",
                                    desc: "China’s Microsoft AI & IoT Insider Lab, built jointly by Zhangjiang Group and Microsoft China, is an R&D organisation that provides clients with solutions based on Microsoft AI and Internet of Things technologies."
                                },
                                {
                                    id  : "pp",
                                    name: "PaddlePaddle",
                                    desc: "Baidu’s PaddlePaddle is China’s first open-source deep-learning platform, which provides software developers with the tools, services and resources they need to quickly adopt and implement deep learning at scale."
                                },
                                {
                                    id  : "sequoia",
                                    name: "Sequoia",
                                    desc: "Sequoia Digital Intelligent Industry Incubation Center is China’s first industry incubator dedicated to discovering and fostering AI and deep-tech companies."
                                },
                                {
                                    id  : "alibaba",
                                    name: "T-Head Semiconductor",
                                    desc: "Founded in September 2018 and owned by Alibaba Group (which also owns SCMP), T-Head has a terminal-cloud integrated full-stack product series that includes an AI chip and CPU processor IP, covering the end-to-end chip design process."
                                },
                                {
                                    id  : "seed",
                                    name: "Experience Centre",
                                    desc: "Shanghai’s first AI-themed exhibition hall and China’s first “5G + AI” showroom. The centre is divided into six major regions: AI + household, AI + campus, AI + medical, AI + finance, AI + manufacturing and AI + industrial park."
                                },
                            ],
                        },
                        {
                            id:"application",
                            name:"AI-powered applications on AIsland",
                            active:"energy",
                            list:[
                                {
                                    id  : "energy",
                                    name: "Energy management",
                                    desc: "Conducts remote real-time monitoring of electrical equipment and energy system status via 4G technology, and provides fundamental data for evaluating energy-saving operations and auditing energy use."
                                },
                                {
                                    id  : "driving",
                                    name: "Unmanned vending truck",
                                    desc: "This driverless vehicle uses built-in sensors that collect interactive image information, which allows people to stop the truck by waving at it, and provides vending machine services from selection of items to payment."
                                },
                                {
                                    id  : "irrigation",
                                    name: "Smart irrigation",
                                    desc: "An intelligent system that simultaneously conducts weather monitoring and improves dust levels in the air."
                                },
                                {
                                    id  : "dron-aqua",
                                    name: "Aquatic security robots",
                                    desc: "Unmanned watercraft provide security both underwater and above the surface.  The underwater craft is equipped with sonar, while the monitor boat operating on the water is equipped with cameras and radar."
                                },
                                {
                                    id  : "dron-air",
                                    name: "Unmanned patrol aircraft",
                                    desc: "Provides security protection, district patrols, city management, river patrols and real-time safety hazard alarms."
                                },
                                {
                                    id  : "dron-land",
                                    name: "Smart security on land",
                                    desc: "The land robot conducts facial recognition, detection of fire and harmful gases, tracking of biological activities, and includes an alarm system that is activated by incidents in its area."
                                },
                            ]
                        }
                    ]
                },
                district:{
                    current:"",
                    cate:[
                        {id:"industrial", name:"Industry"},
                        {id:"support", name:"Support"},
                        {id:"scene", name:"Application"}
                    ],
                    areas:[
                        {
                            id   : "education",
                            title: "AI + Education",
                            desc : "ShanghaiTech University",
                            cate : "support"
                        },
                        {
                            id   : "research",
                            title: "Basic Research",
                            desc : "Zhangjiang Lab with<br/>Chinese Academy of Sciences",
                            cate : "support"
                        },
                        {
                            id   : "exhibition",
                            title: "Exhibition",
                            desc : "AI Pavilion",
                            cate : "support"
                        },
                        {
                            id   : "sciencehall",
                            title: "Academic Exchange",
                            desc : "Science Hall",
                            cate : "support"
                        },
                        {
                            id   : "talenthub",
                            title: "Talent Services",
                            desc : "Pudong International Talent Hub",
                            cate : "support"
                        },
                        {
                            id   : "inodev1",
                            title: "AI Application",
                            desc : "",
                            cate : "industrial"
                        },
                        {
                            id   : "inodev2",
                            title: "Incubator",
                            desc : "Zhangjiang International<br/>Innovation Harbour",
                            cate : "industrial"
                        },
                        {
                            id   : "aisland",
                            title: "Innovation Engine",
                            desc : "Zhangjiang AIsland",
                            cate : "industrial"
                        },
                        {
                            id   : "application",
                            title: "AI + Business",
                            desc : "",
                            cate : "scene"
                        },
                        {
                            id   : "community",
                            title: "AI Community",
                            desc : "",
                            cate : "scene"
                        },
                        {
                            id   : "urban",
                            title: "AI + City Management",
                            desc : "Urban Sub-centre",
                            cate : "scene"
                        }
                    ]
                }
            },
            created:function(){
                this.checkLoaded();
            },
            mounted:function(){
                this.checkLandscape();
                this.setScrollAni();
                this.aislandCate(this.aisland.current);

                $(window).resize(function(){
                    MS.checkLandscape();
                });
            },
            watch:{
                loaded:function(val){
                    if(val === true) {
                        console.log('Page Loaded')
                    }
                }
            },
            methods:{
                aislandCate:function(cate, res){
                    var nav       = $('.aisland-nav'),
                        box       = $('.aisland-nav-cate-box'),
                        targetNav = nav.find('.cate-item-name[data-cate='+cate+']'),
                        paddings  = 60,
                        leftss;

                    if(cate === 'companies') {
                        leftss = 0;
                    }else if(cate === 'application'){
                        leftss = nav.find('.cate-item-name[data-cate="companies"]').width() + paddings;
                    }
                    this.aisland.current = cate;

                    box.animate({
                        width:targetNav.width() + paddings,
                        left:leftss,
                    });

                    if(res == 'mob') {

                        if(cate === 'companies') {
                            MS.aisCompaniesMob.slideTo(0, 1000, true);
                        }else if(cate === 'application'){
                            MS.aisCompaniesMob.slideTo(6, 1000, true);
                        }
                    }
                },
                showAisland:function(target){
                    //console.log(target[0], target[1], target[2])

                    this.aisland.current = target[0];
                    this.aisland.cate[target[1]].active = target[2];
                    this.aislandCate(target[0])
                },
                checkLoaded:function(){
                    var loadStatus = localStorage.getItem("msLoaded");
                    if(loadStatus == "1") {
                        this.loaded = true;
                        $('html').addClass('loaded');
                    }else if(loadStatus == "0" || loadStatus == null) {
                        this.loading();
                    }
                },
                loading:function(totalFrame){
                    var totalFrame = imagelist.length;
                    var finished = new Promise(function(resolve, reject) {
                        var loadedCount = 0;
                        var isLoadedCheck = function(img){
                            var onLoaded = function(){
                                var handleLoadingProgress = function() {
                                    var loadingProgressBar    = $(".in-color-bar"),
                                        loadingProgressNumber = $(".loading-count-txt");

                                    loadingProgressBar.css("height", (loadedCount / totalFrame) * 100 + '%');
                                    loadingProgressNumber.html(Math.ceil(loadedCount / totalFrame * 100) + "%");
                                }
                                handleLoadingProgress();
                                if (loadedCount >= totalFrame) {
                                    setTimeout(function(){
                                        $('.loading-ani').addClass('loaded');
                                        $('.ms-loading').addClass('after-full-load');

                                        setTimeout(function(){
                                            console.log('Loaded');
                                            $('.ms-loading').fadeOut(300, function(){
                                                MS.loaded = true;
                                            });
                                        }, 1500);
                                    }, 300);
                                }
                            }
                            if (img.complete) {
                                loadedCount++;
                                onLoaded();
                                return
                            }
                            img.onload = function(){
                                loadedCount++;
                                onLoaded();
                            }
                            img.onerror = function(){
                                loadedCount++;
                                console.log('Load Error: '+img);
                                onLoaded();
                            }
                        }

                        for (let i = 1; i <= totalFrame; i++) {
                            const img = new Image();
                            img.src = imagePath + imagelist[i-1];
                            isLoadedCheck(img);

                            if(i == totalFrame - 1) {
                                localStorage.setItem("msLoaded", "1");
                                $('html').addClass('loaded');
                            }
                        }
                    });
                    return finished
                },
                setScrollAni:function(){
                    var ww = $(window).width(),
                        wh = $(window).height(),
                        size = ww > 752 ? "desktop" : "mobile",
                        ailand, aidistrictCloud, aidBeforeDistrict;

                    ScrollTrigger.batch("#aicluster", {
                        toggleClass: "hello",
                        start: "top center",
                        once: true
                    });

                    function aiCompaniesScrollDesk(){
                        ScrollTrigger.batch("#iccompaies", {
                            toggleClass: "hello",
                            start: "top top",
                            end:"bottom center"
                        });
                    }

                    function aislandScrollDesk(){
                        gsap.utils.toArray(".aisland-whole").forEach(function(section){
                            ailand = gsap.timeline({
                                scrollTrigger: {
                                    id:"areamap",
                                    trigger: ".aisland-whole",
                                    start:"bottom bottom",
                                    end: function(){"+=" + section.offsetWidth * 3},
                                    scrub: true,
                                    pin: ".aisland-whole",
                                }
                            });

                            ailand.to('.before-aisland', 10, {background:"#020b24"})
                            .fromTo("#decos", 1, {className:'+=deactive-btm'}, {className:'+=deactive-top'})
                            .fromTo('.area-grid-line', 10, {scale:1.2, opacity:0}, {scale:1, opacity:1})
                            .fromTo('.inner-grid-big', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .fromTo('.inner-grid-sm', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .fromTo('.inner-grid-circle', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .fromTo('.area-grid-line', 2, {backgroundColor:'rgba(255,255,255,0)', opacity:1}, {backgroundColor:'rgba(255,255,255,1)', opacity:0.3})
                            .fromTo('.area-grid-line', 2, {backgroundColor:'rgba(255,255,255,1)', opacity:0.3}, {backgroundColor:'rgba(255,255,255,0)', opacity:1})
                            .fromTo('.map-cont-img', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-sm', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-big', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-circle', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.map-detect_area', 10, {opacity:1}, {opacity:0.05}, '-=5')
                            .fromTo('.img_active', 10, {opacity:0}, {opacity:1})
                            .fromTo('.img_default', 10, {opacity:1}, {opacity:0}, '-=10')
                            .fromTo('.map-detail', 10, {width:"54.92091388401%", bottom:"14.921875%", left:"41.12478031634%"}, {width:"70%", bottom:"2%" , left:"15%"})
                            .to(".aisland-whole", 10, {className:'+=aisland-whole nav-on'}, '-=10')
                        });
                    }

                    function aislandScrollMobile(){
                        gsap.utils.toArray(".aisland-whole").forEach(function(section){
                            ailand = gsap.timeline({
                                scrollTrigger: {
                                    id:"areamap",
                                    trigger: ".aisland-whole",
                                    start:"top center",
                                    end:"top 100px",
                                    //end: function(){"+=" + section.offsetWidth * 3},
                                    scrub: true,
                                    //pin:'.aisland-whole'
                                }
                            });

                            ailand.to('.before-aisland', 10, {background:"#020b24"})
                            .fromTo("#decos", 1, {className:'+=dd'}, {className:'+=deactive'})
                            .fromTo('.area-grid-line', 20, {scale:1.2, opacity:0}, {scale:1, opacity:1})
                            .fromTo('.inner-grid-big', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .fromTo('.inner-grid-sm', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .fromTo('.inner-grid-circle', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=10')
                            .to('.area-grid-line', 2, {backgroundColor:'rgba(255,255,255,1)', opacity:0.3})
                            .fromTo('.map-cont-img', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-sm', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-big', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.inner-grid-circle', 10, {opacity:1}, {opacity:0}, '-=5')
                            .fromTo('.map-detect_area', 10, {opacity:1}, {opacity:0.05}, '-=5')
                            .fromTo('.img_active', 10, {opacity:0}, {opacity:1})
                            .fromTo('.img_default', 10, {opacity:1}, {opacity:0}, '-=10')
                            .fromTo('.map-detail', 10, {width:"54.92091388401%", bottom:"14.921875%", left:"41.12478031634%"}, {width:"100%", bottom:"0%", left:"0%"})
                            .to(".aisland-whole", 10, {className:'+=aisland-whole nav-on'})
                            .fromTo(".map-detect_nav-mob ", 5, {opacity:0.2}, {opacity:1})
                        });
                    }

                    function aiDistrictScrollDesk(){
                        gsap.utils.toArray(".district-cloud").forEach(function(){
                            aidistrictCloud = gsap.timeline({
                                scrollTrigger: {
                                    trigger: ".district-cloud",
                                    start: "top bottom",
                                    end: "bottom 65%",
                                    scrub: true,
                                }
                            });

                            aidistrictCloud.fromTo('.cloud-01', 10, {left:"40%", scale:1}, {left:"90%", scale:1.6})
                            .fromTo('.cloud-02', 10, {left:"43%" , scale:1},{left:"85%" , scale:1.2}, '-=9.5')
                            .fromTo('.cloud-03', 10, {left:"30%" , scale:1, top:"25%"}, {left:"-25%" , scale:1.9, top:"65%"}, '-=10.5')
                            .fromTo('.cloud-04', 10, {left:"35%" , scale:1}, {left:"0%" , scale:1.7}, '-=9.2')
                            .to(['.district-map', '.before-district'], 3, {background:"#7b98aa"}, '-=15')
                            .fromTo('.district-numbers', 10, {scale:0.3, opacity:0}, {scale:1, opacity:1}, '-=15')
                            .to('.area-outline', 2, {opacity:1}, '-=7.2')
                            .to(".district-map", 1, {className:'+=district-map info-on', onUpdate:function(){
                                var nowCate = MS.district.current;
                                if(nowCate == '') {
                                    MS.district.current='support';
                                }
                            }}, '-=7')
                        });
                    }

                    var endpoint;
                    var cww = 1600,
                        ww = $(window).width(),
                        tar = (ww/cww*100);

                    endpoint = '-'+(100-tar)+'%';

                    function aiBeforeDistrictScrollMobile(){
                        gsap.utils.toArray("#aidistrict").forEach(function(){
                            aidBeforeDistrict = gsap.timeline({
                                scrollTrigger: {
                                    trigger: "#aidistrict",
                                    start: "top bottom",
                                    end: "bottom bottom",
                                    scrub: true,
                                }
                            });

                            aidBeforeDistrict.to('.before-district', 10, {background:"#7b98aa"})
                            .fromTo('#aidistrict', 10, {opacity:0}, {opacity:1}, '-=8.2')
                            .to('.cloud-01', 10, {left:"90%", scale:1.5, delay:30})
                            .to('.cloud-02', 10, {left:"70%" , scale:1.2}, '-=10')
                            .to('.cloud-03', 10, {left:"-50%" , scale:1.7, top:"55%"}, '-=10')
                            .to('.cloud-04', 10, {left:"0%" , scale:1.5}, '-=10')
                            .fromTo('.district-numbers', 10, {scale:0.6, opacity:0}, {scale:1.2, opacity:1}, '-=10')
                            .to('.district-content', 10, {top:"10%"})
                            .to('.district-numbers', 10, {scale:1.4, opacity:0}, '-=5')
                        });
                    }

                    function aiDistrictScrollMobile(){
                        gsap.utils.toArray(".district-map").forEach(function(section){
                            aidistrictCloud = gsap.timeline({
                                scrollTrigger: {
                                    trigger: ".district-map",
                                    start: "top top",
                                    end: function(){"+=" + section.offsetWidth * 3},
                                    scrub: true,
                                    pin:'.district-map'
                                }
                            });

                            aidistrictCloud.fromTo(['.district-bg', '.district-area'], 10, {left:"0%"}, {left:endpoint})
                            .to(".district-map", 1, {className:'+=district-map info-on-mob',onUpdate:function(){
                                MS.district.current='support';
                            }}, '-=11')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='industrial';
                            }}, '-=8.5')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='support';
                            }}, '-=7.5')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='scene';
                            }}, '-=6.5')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='industrial';
                            }}, '-=5.8')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='support';
                            }}, '-=4.8')
                            .to(".district-map", 1, {className:'+=district-map info-on-mob', onUpdate:function(){
                                MS.district.current='scene';
                            }}, '-=3')
                            .to('.district-cloud', 10, {left:"-10%"}, '-=10')
                        });
                    }

                    if(size === "desktop") {
                        aislandScrollDesk();
                        aiCompaniesScrollDesk()
                        aiDistrictScrollDesk();
                    }

                    if(size === "mobile") {
                        aislandScrollMobile();
                        this.aisCompaniesMob = new Swiper(".aisland-items-mob", {
                            navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                            },
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                            },
                        });

                        this.aisCompaniesMob.on('slideChange', function(){
                            var current = $('.aisland-items-mob').find('.swiper-slide:nth-child('+(MS.aisCompaniesMob.activeIndex+1)+')').data();
                            MS.showAisland([current.cate, current.order, current.application]);
                        });

                        aiCompaniesScrollDesk();
                        aiBeforeDistrictScrollMobile();
                        aiDistrictScrollMobile();
                    }

                    function infoResponsive() {
                        ww = $(window).width();
                        wh = $(window).height();
                        var newSize = ww > 752 ? "desktop" : "mobile";
                        if (newSize != size) {
                            size = newSize;
                            if (newSize === "mobile") {
                                if(wh > 900) {
                                    window.location.reload();
                                }
                            } else if (newSize === "desktop") {
                                if(wh > 900) {
                                    window.location.reload();
                                }
                            }
                        }
                    }

                    $(window).resize(function(){
                        infoResponsive()
                    });
                },
                checkLandscape:function(){
                    if(window.innerWidth < 1023) {
                        if(window.innerHeight > window.innerWidth){
                            this.message.landscape = false;
                        }else {
                            this.message.landscape = true;
                        }
                    }else {
                        this.message.landscape = false;
                    }
                },
                openWindowAndShare:function(type){
                    var u = window.location.href,
                        t = document.title;

                    var browserW = $(window).width(),
                        isMobile;

                    if(browserW < 700) {
                        isMobile = true;
                    }

                    var postTitle = document.title.replace(/ /g, "+"),
                        encoded   = encodeURI(postTitle);

                    var urls = {
                        "fb": 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),
                        "tw": "http://twitter.com/intent/tweet?text="+encoded+"&url=" + window.location.href,
                        "ln": "http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href,
                    }

                    if(type === "facebook"){
                        if(isMobile){
                            window.location.href = urls.fb;
                        }else {
                            window.open(urls.fb,'sharer','toolbar=0,status=0,width=626,height=436');
                        }
                    }

                    if(type === "twitter"){
                        if(isMobile) {
                            window.location.href = urls.tw;
                        }else {
                            window.open(urls.tw,'twitter', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0')
                        }
                    }

                    if(type === "linkedin"){
                        if(isMobile){
                            window.location.href = urls.ln;
                        }else {
                            window.open(urls.ln,'linkedin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0')
                        }
                    }

                    if(type === "email"){
                        window.open("mailto:?subject="+encoded +  window.location.href , 'email', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                    }

                    return false;
                },
                openNav:function(){
                    var nav = $('.mainmenu');
                    nav.toggleClass('active');
                    $('.btn-menu').toggleClass('active');

                    window.onscroll = function (e) {
                        nav.removeClass('active');
                        $('.btn-menu').removeClass('active');
                    }
                },
                changeDistrict:function(district) {
                    this.district.current = district;
                }
            }
        });
    })
});