// 基本信息
let App = {
    // 姓名
    name: '潘潘',
    // 职位
    position: 'Java高级开发工程师',
    // 期望工作地址
    address: '武汉',
    // 期望薪资
    salary: '10-15K',
    // 性别和年龄
    sexAndAge: '男 / 10岁',
    // 工作时间
    workingHours: '202 / 08 - 2020 / 08 · 2年工作经验',
    // 毕业学校
    school: '北京大学 · 计算机科学与技术'
};

// 联系方式
let Contact = [
    // 手机号
    '17777777777',
    // github地址
    'github.com/haohanya',
    // 个人主页
    'mvvm.io',
    // 邮箱
    'pannanx@gmail.com'
];

// 专业技能
let Major = [
    '熟练使用Spring、SpringBoot、Spring MVC、MyBatis等主流后台框架与技术进行开发',
    '熟练使用SpringSecurity进行权限管理',
    '熟练使用MySQL关系型数据库和Redis、Mongo等非关系型数据库',
    '熟练使用Maven等项目管理工具，Git、SVN版本控制工具',
    '熟练使用IDEA、Eclipse、STS等开发工具',
    '熟练使用Freemarker和Thymeleaf等模板引擎',
    '熟练使用ElasticSearch和Solr等搜索引擎',
    '了解 Zookeeper、RabbitMQ、ActiveMQ等中间件',
    '熟悉W3C标准、页面布局架构、前端语义化、浏览器兼容性等，重视用户体验与代码可维护性',
    '对HTML5、CSS3、响应式布局、等有着较熟练的实践和较深刻的感悟',
    '了解Bootstrap、jQuery、Vue或AngularJS等前端框架'
];

// 工作经历
let Work = [
    {
        // 公司名称
        name: '湖北XXXX科技有限公司',
        // 工作时间和职位
        time: 'Java开发工程师 / 2020-8 - 2020-08',
        // 工作内容描述
        desc: '根据需求，对部门经理布置的任务进行Java后台的开发，完成软件的设计、开发、测试、修改bug等工作，包括业务需求的沟通，功能模块 详细设计，业务功能实现与单元测试，系统维护；'
    },
    // {
    //     // 公司名称
    //     name: '湖北XXXX科技有限公司',
    //     // 工作时间和职位
    //     time: 'Java开发工程师 / 2020-8 - 2020-08',
    //     // 工作内容描述
    //     desc: '根据需求，对部门经理布置的任务进行Java后台的开发，完成软件的设计、开发、测试、修改bug等工作，包括业务需求的沟通，功能模块 详细设计，业务功能实现与单元测试，系统维护；'
    // }
];

// 项目经验
let Project = [
    {
        // 项目名称
        name: '百度',
        // 项目开始和结束时间
        time: '2020-8 - 2020-9',
        // 项目描述
        projectDesc: '全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。',
        // 责任描述
        respDesc: `一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述`,
        // 技术栈
        technology: 'Spring SpringMVC MyBatis Dubbo Solr SpringSecurity SpringQuartz VUE ElementUI FastDFS Redis Freemarker RabbitMQ CAS'
    },
    {
        // 项目名称
        name: '知乎',
        // 项目开始和结束时间
        time: '2020-8 - 2020-9',
        // 项目描述
        projectDesc: '有问题,上知乎。知乎,可信赖的问答社区,以让每个人高效获得可信赖的解答为使命。知乎凭借认真、专业和友善的社区氛围,结构化、易获得的优质内容,基于问答的内容生产...',
        // 责任描述
        respDesc: `一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述`,
        // 技术栈
        technology: 'Spring SpringMVC MyBatis Dubbo Solr SpringSecurity SpringQuartz VUE ElementUI FastDFS Redis Freemarker RabbitMQ CAS'
    },
    {
        // 项目名称
        name: '百度',
        // 项目开始和结束时间
        time: '2020-8 - 2020-9',
        // 项目描述
        projectDesc: '百度搜索，搜你意想不到的东西',
        // 责任描述
        respDesc: `一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述`,
        // 技术栈
        technology: 'Spring SpringMVC MyBatis Dubbo Solr SpringSecurity SpringQuartz VUE ElementUI FastDFS Redis Freemarker RabbitMQ CAS'
    }
];
// 自我评价
let Me = [
    '本人性格温和，善于与人沟通，心理承受能力强',
    '注重规范化开发,具有良好的沟通能力、团队合作精神及解决问题的能力',
    '我对自己的定位：主攻后端,同时在其他方面打打辅助。我不希望过于依赖别人,即使没有前端没有设计没有产品经理,我依然想要把这个产品做到完美。毕竟全栈才能最高效地解决问题',
    '我对工作的态度：第一：要高效完成自己的本职工作。第二：要在完成的基础上寻找完美。第三：要在完美的基础上,与其他同事 互相交流学习,互相提升。工作是一种生活方式,不是一份养家糊口的差事',
    '我怎样克服困难：在遇到技术问题时我往往会去Google、Stack over flow上寻找答案。但通常很多问题 并不一定已经被人解决,所以熟练地阅读源码、在手册、规范甚至 REPL的环境自己做实验才是最终解决问题的办法。相信事实的结果,自己动手去做。',
    '我的优势：热爱技术、自学能力强,有良好的自我认知。全面的技能树与开阔的视野,良好的心态、情商与沟通能力。'
];