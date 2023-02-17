import Mock from 'mockjs'

// 登录
export function getMenus() {
    return {
        // isOpen: false,
        url: 'api/menu/getMenus',
        type: 'get',
        data: {
            'code': 200,
            'msg': 'success',
            'data': menuList
        }
    }
}

/*
    menuId       表示当前菜单项 ID
    parentId     表示父菜单项 ID
    name_zh      表示菜单名（中文）
    name_en      表示菜单名（英语）
    url          表示路由跳转路径（自身模块 或者 外部 url）
    type         表示当前菜单项的级别（0: 目录，1: 菜单项，2: 按钮）
    icon         表示当前菜单项的图标
    orderNum     表示当前菜单项的顺序
    subMenuList  表示当前菜单项的子菜单
*/
var menuList = [{
        'menuId': 1,
        'parentId': 0,
        'name_zh': '询价管理',
        'name_en': 'Enquiry Management',
        'url': '',
        'type': 0,
        'icon': 'el-icon-phone',
        'orderNum': 0,
        'subMenuList': [{
                'menuId': 1.1,
                'parentId': 1,
                'name_zh': '发布询价',
                'name_en': 'Publish Enquiry',
                'url': 'enquiry/publish/publish',
                'type': 1,
                'icon': 'el-icon-s-order',
                'orderNum': 1,
                'subMenuList': []
            },
            {
                'menuId': 1.2,
                'parentId': 1,
                'name_zh': '选择供应商',
                'name_en': 'Select Supplier',
                'url': 'enquiry/supplier/supplier',
                'type': 1,
                'icon': 'el-icon-s-custom',
                'orderNum': 2,
                'subMenuList': []
            },
            {
                'menuId': 1.3,
                'parentId': 1,
                'name_zh': '查看询价（G）',
                'name_en': 'View Enquiry',
                'url': 'enquiry/view',
                'type': 1,
                'icon': 'el-icon-s-management',
                'orderNum': 3,
                'subMenuList': []
            },
            {
                'menuId': 1.4,
                'parentId': 1,
                'name_zh': '进行报价（G）',
                'name_en': 'Quote Price',
                'url': 'enquiry/quote',
                'type': 1,
                'icon': 'el-icon-s-claim',
                'orderNum': 4,
                'subMenuList': []
            }
        ]
    },
    {
        'menuId': 2,
        'parentId': 0,
        'name_zh': '采购管理',
        'name_en': 'Purchase Management',
        'url': '',
        'type': 0,
        'icon': 'el-icon-s-goods',
        'orderNum': 1,
        'subMenuList': [{
                'menuId': 2.1,
                'parentId': 2,
                'name_zh': '生成采购',
                'name_en': 'Generate Pruchase',
                'url': 'purchase/Generate',
                'type': 1,
                'icon': 'el-icon-s-order',
                'orderNum': 1,
                'subMenuList': []
            },
            {
                'menuId': 2.2,
                'parentId': 2,
                'name_zh': '查看采购',
                'name_en': 'view Pruchase',
                'url': 'purchase/view',
                'type': 1,
                'icon': 'el-icon-s-management',
                'orderNum': 2,
                'subMenuList': []
            }
        ]
    },
    {
        'menuId': 3,
        'parentId': 0,
        'name_zh': '物流管理',
        'name_en': 'Physical Distribution Management',
        'url': '',
        'type': 0,
        'icon': 'el-icon-truck',
        'orderNum': 2,
        'subMenuList': [{
                'menuId': 3.1,
                'parentId': 3,
                'name_zh': '物流详情',
                'name_en': 'Physical Distribution',
                'url': 'distribution/detail',
                'type': 1,
                'icon': 'el-icon-monitor',
                'orderNum': 1,
                'subMenuList': []
            },
            {
                'menuId': 3.2,
                'parentId': 3,
                'name_zh': '填写送货预约单',
                'name_en': 'Fill Appointment',
                'url': 'distributioon/fill',
                'type': 1,
                'icon': 'el-icon-edit',
                'orderNum': 2,
                'subMenuList': []
            },
        ]
    },
    {
        'menuId': 4,
        'parentId': 0,
        'name_zh': '系统管理',
        'name_en': 'System Control',
        'url': '',
        'type': 0,
        'icon': 'el-icon-setting',
        'orderNum': 3,
        'subMenuList': [{
                'menuId': 4.1,
                'parentId': 4,
                'name_zh': '管理员列表',
                'name_en': 'Administrator List',
                'url': 'sys/UserList',
                'type': 1,
                'icon': 'el-icon-user',
                'orderNum': 1,
                'subMenuList': []
            },
            {
                'menuId': 3,
                'parentId': 1,
                'name_zh': '角色管理',
                'name_en': 'Role Control',
                'url': 'sys/RoleControl',
                'type': 1,
                'icon': 'el-icon-price-tag',
                'orderNum': 2,
                'subMenuList': []
            },
            {
                'menuId': 4.2,
                'parentId': 4,
                'name_zh': '菜单管理',
                'name_en': 'Menu Control',
                'url': 'sys/MenuControl',
                'type': 1,
                'icon': 'el-icon-menu',
                'orderNum': 3,
                'subMenuList': []
            }
        ]
    },
    {
        'menuId': 5,
        'parentId': 0,
        'name_zh': '帮助',
        'name_en': 'Help',
        'url': '',
        'type': 0,
        'icon': 'el-icon-info',
        'orderNum': 1,
        'subMenuList': [{
            'menuId': 5.1,
            'parentId': 5,
            'name_zh': '百度',
            'name_en': 'Baidu',
            'url': 'https://www.baidu.com/',
            'type': 1,
            'icon': 'el-icon-menu',
            'orderNum': 1,
            'subMenuList': []
        }, {
            'menuId': 5.2,
            'parentId': 5,
            'name_zh': '博客',
            'name_en': 'Blog',
            'url': 'https://www.cnblogs.com/l-y-h/',
            'type': 1,
            'icon': 'el-icon-menu',
            'orderNum': 1,
            'subMenuList': []
        }]
    }
]