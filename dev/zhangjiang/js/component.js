Vue.component('scrollico', {
    template: '\
        <div class="ms-ico-scroll">\
            <div class="ms-ico-scroll-inner">\
                <div class="ms-scroll-mouse">\
                    <div class="ms-scroll-mouse-outer">\
                        <div class="ms-scroll-mouse-inner">\
                            <div></div>\
                            <div></div>\
                            <div class="line-long"></div>\
                            <div></div>\
                            <div></div>\
                        </div>\
                    </div>\
                </div>\
                <div class="scroll-text">\
                    <span v-html="message"></span>\
                </div>\
            </div>\
        </div>\
    ',
    replace: true,
    props: {
        title: String,
    },
    data:function() {
        return {
            message: 'Scroll',
        };
    },
});


Vue.component('footnav', {
    template: '\
        <div><div class="footer-nav-item" v-for="item in menu">\
            <a :href="host+item.link" target="_blank" ms-ca="navigation" ms-ac="footer" :ms-la="\'bottom:gnb:news:\'+item.id">\
                <div class="footer-nav-item_name" v-html="item.title"></div>\
            </a>\
        </div></div>\
    ',
    replace: true,
    props: {
        title: String,
    },
    data:function() {
        return {
            host:"http://www.scmp.com/",
            menu:[
                {
                    title:"home",
                    id:"home",
                    link:""
                },
                {
                    title:"infographics",
                    id:"infographics",
                    link:"infographics"
                },
                {
                    title:"hong kong",
                    id:"hongkong",
                    link:"news/hong-kong"
                },
                {
                    title:"china",
                    id:"china",
                    link:"news/china"
                },
                {
                    title:"asia",
                    id:"asia",
                    link:"news/asia"
                },
                {
                    title:"world",
                    id:"world",
                    link:"news/world"
                },
                {
                    title:"business",
                    id:"business",
                    link:"business"
                },
                {
                    title:"tech",
                    id:"tech",
                    link:"tech"
                },
                {
                    title:"life",
                    id:"life",
                    link:"lifestyle"
                },
                {
                    title:"culture",
                    id:"culture",
                    link:"culture"
                },
                {
                    title:"sport",
                    id:"sport",
                    link:"sport"
                }
            ]
        };
    },
});