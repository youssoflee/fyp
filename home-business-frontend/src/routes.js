import React from 'react';
import Roles from "./services/Roles";
// import Product from './views/homeBusinessPages/Products/Product';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const RefreshAfterLogin = React.lazy(() => import('./views/homeBusinessPages/RefreshAfterLogin'));
const Customer = React.lazy(() => import('./views/homeBusinessPages/Customers/Customer'));
const Product = React.lazy(() => import('./views/homeBusinessPages/Products/Product'));
const Order = React.lazy(() => import('./views/homeBusinessPages/Orders/Order'));
const Statistic = React.lazy(() => import('./views/homeBusinessPages/Statistics/Statistic'));
const Shop = React.lazy(() => import('./views/homeBusinessPages/Shops/Shop'));
const Purchase = React.lazy(() => import('./views/homeBusinessPages/Purchases/Purchase'));
const Address = React.lazy(() => import('./views/homeBusinessPages/Address/Address'));
const ChangePassword = React.lazy(() => import('./views/homeBusinessPages/Passwords/ChangePassword'))
const PersonalInformation = React.lazy(() => import('./views/homeBusinessPages/Personal/PersonalInformation'));
const ShoppingCart = React.lazy(() => import('./views/homeBusinessPages/Cart/ShoppingCart'));

// const AddCustomer = React.lazy(() => import('./views/homeBusinessPages/Customers/Addcustomer'))
// const EditCustomer = React.lazy(() => import('./views/homeBusinessPages/Customers/Editcustomer'))


const routes = [
  { path: '/', exact: true, name: 'Home', component: RefreshAfterLogin },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
   // start
   { path: '/seller/customer', name: 'Customer', component: Customer, permission: [Roles.SELLER] },
   { path: '/seller/product', name: 'Product', component: Product, permission: [Roles.SELLER] },
   { path: '/seller/order', name: 'Order', component: Order, permission: [Roles.SELLER] },
   { path: '/seller/statistic', name: 'Statistic', component: Statistic, permission: [Roles.SELLER] },
  //  { path: '/seller/change-password', name: 'Change Password', component: ChangePassword, permission: [Roles.SELLER] },
   { path: '/customer/shop', name: 'Shop', component: Shop, permission: [Roles.CUSTOMER] },
   { path: '/customer/purchase', name: 'Purchase', component: Purchase, permission: [Roles.CUSTOMER] },
   { path: '/customer/address', name: 'My Address', component: Address, permission: [Roles.CUSTOMER] },
   { path: '/change-password', name: 'Change Password', component: ChangePassword },
   { path: '/personal-information', name: 'Personal Information', component: PersonalInformation },
   { path: '/shopping-cart', name: 'Shopping Cart', component: ShoppingCart },


  //  { path: '/addcustomer', name: 'Add Customer', component: AddCustomer },
  //  { path: '/editcustomer/3', name: 'Edit Customer', component: EditCustomer },
   
 
   // end

  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
