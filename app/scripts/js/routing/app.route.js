"use strict";
var router_1 = require('@angular/router');
var guide_component_1 = require('../components/guide.component');
var menu_component_1 = require('../components/menu.component');
var additem_component_1 = require('../components/additem.component');
var appRoutes = [
    {
        path: '',
        component: menu_component_1.MenuComponent
    },
    {
        path: 'juicee',
        component: menu_component_1.MenuComponent
    },
    {
        path: 'guide',
        component: guide_component_1.GuideComponent
    },
    {
        path: 'additem',
        component: additem_component_1.AddItemComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map