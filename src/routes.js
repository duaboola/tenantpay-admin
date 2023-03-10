import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//
//const Home = React.lazy(() => import('./views/pages/home/Home'))
const Createuser = React.lazy(() => import('./views/users/Create'))
const ListUser = React.lazy(() => import('./views/users/List'))
const UserDetails = React.lazy(() => import('./views/users/Details'))
const EditUser = React.lazy(() => import('./views/users/Edit'))
const UpdateUser = React.lazy(() => import('./views/users/Update'))
const All = React.lazy(() => import('./views/properties/All/All'))
const AllList = React.lazy(() => import('./views/properties/All/List'))
const Flat = React.lazy(() => import('./views/properties/Flat/Flat'))
const FlatList = React.lazy(() => import('./views/properties/Flat/List'))
const FlatDetails = React.lazy(() => import('./views/properties/Flat/Details'))
const FlatImages = React.lazy(() => import('./views/properties/Flat/Images'))
const AddFlatImage = React.lazy(() => import('./views/properties/Flat/Add'))
const CreateFlat = React.lazy(() => import('./views/properties/Flat/Create'))
const EditFlat = React.lazy(() => import('./views/properties/Flat/Edit'))
const Office = React.lazy(() => import('./views/properties/Office/Office'))
const OfficeList = React.lazy(() => import('./views/properties/Office/List'))
const OfficeDetails = React.lazy(() => import('./views/properties/Office/Details'))
const OfficeImages = React.lazy(() => import('./views/properties/Office/Images'))
const AddOfficeImage = React.lazy(() => import('./views/properties/Office/Add'))
const CreateOffice = React.lazy(() => import('./views/properties/Office/Create'))
const EditOffice = React.lazy(() => import('./views/properties/Office/Edit'))
const Shop = React.lazy(() => import('./views/properties/Shop/Shop'))
const ShopList = React.lazy(() => import('./views/properties/Shop/List'))
const ShopDetails = React.lazy(() => import('./views/properties/Shop/Details'))
const ShopImages = React.lazy(() => import('./views/properties/Shop/Images'))
const AddShopImage = React.lazy(() => import('./views/properties/Shop/Add'))
const CreateShop = React.lazy(() => import('./views/properties/Shop/Create'))
const EditShop = React.lazy(() => import('./views/properties/Shop/Edit'))
const Villa = React.lazy(() => import('./views/properties/Villa/Villa'))
const VillaList = React.lazy(() => import('./views/properties/Villa/List'))
const VillaDetails = React.lazy(() => import('./views/properties/Villa/Details'))
const VillaImages = React.lazy(() => import('./views/properties/Villa/Images'))
const AddVillaImage = React.lazy(() => import('./views/properties/Villa/Add'))
const CreateVilla = React.lazy(() => import('./views/properties/Villa/Create'))
const EditVilla = React.lazy(() => import('./views/properties/Villa/Edit'))
const Warehouse = React.lazy(() => import('./views/properties/Warehouse/Warehouse'))
const WarehouseList = React.lazy(() => import('./views/properties/Warehouse/List'))
const WarehouseDetails = React.lazy(() => import('./views/properties/Warehouse/Details'))
const WarehouseImages = React.lazy(() => import('./views/properties/Warehouse/Images'))
const AddWarehouseImage = React.lazy(() => import('./views/properties/Warehouse/Add'))
const CreateWarehouse = React.lazy(() => import('./views/properties/Warehouse/Create'))
const EditWarehouse = React.lazy(() => import('./views/properties/Warehouse/Edit'))
const InterestList = React.lazy(() => import('./views/properties/Interest/List'))
const InterestDetails = React.lazy(() => import('./views/properties/Interest/Details'))
const MaintenanceList = React.lazy(() => import('./views/properties/Maintenance/List'))
const MaintenanceDetails = React.lazy(() => import('./views/properties/Maintenance/Details'))
const SelectDevice = React.lazy(() => import('./views/properties/Notifications/Select'))
const AddImage = React.lazy(() => import('./views/properties/Gallery/Add'))

const routes = [
  { path: '/', exact: true, name: 'Welcome' },
  //{ path: '/home', name: 'Home', element: Home },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/user/create', name: 'Create User', element: Createuser },
  { path: '/user/list', name: 'List Users', element: ListUser },
  { path: '/user/edit', name: 'Edit User', element: EditUser },
  { path: '/user/update:id', name: 'Update User', element: UpdateUser },
  { path: '/user/details:id', name: 'User Details', element: UserDetails },

  { path: '/properties/all', name: 'All Properties', element: All },
  { path: '/properties/all/list', name: 'All Properties List', element: AllList },

  { path: '/properties/flat', name: 'Flat', element: Flat },
  { path: '/properties/flat/list', name: 'Flat List', element: FlatList },
  { path: '/properties/flat/details:id', name: 'Flat Details', element: FlatDetails },
  { path: '/properties/flat/images:id', name: 'Flat Gallery', element: FlatImages },
  { path: '/properties/flat/images/add:id', name: 'Add Flat Image', element: AddFlatImage },
  { path: '/properties/flat/create', name: 'Create Flat', element: CreateFlat },
  { path: '/properties/flat/edit:id', name: 'Edit Flat', element: EditFlat },

  { path: '/properties/office', name: 'Office', element: Office },
  { path: '/properties/office/list', name: 'Office List', element: OfficeList },
  { path: '/properties/office/details:id', name: 'Office Details', element: OfficeDetails },
  { path: '/properties/office/images:id', name: 'Office Gallery', element: OfficeImages },
  { path: '/properties/office/images/add:id', name: 'Add Office Image', element: AddOfficeImage },
  { path: '/properties/office/create', name: 'Create Office', element: CreateOffice },
  { path: '/properties/office/edit:id', name: 'Edit Office', element: EditOffice },

  { path: '/properties/shop', name: 'Shop', element: Shop },
  { path: '/properties/shop/list', name: 'Shop List', element: ShopList },
  { path: '/properties/shop/details:id', name: 'Shop Details', element: ShopDetails },
  { path: '/properties/shop/images:id', name: 'Shop Gallery', element: ShopImages },
  { path: '/properties/shop/images/add:id', name: 'Add Shop Image', element: AddShopImage },
  { path: '/properties/shop/create', name: 'Create Shop', element: CreateShop },
  { path: '/properties/shop/edit:id', name: 'Edit Shop', element: EditShop },

  { path: '/properties/villa', name: 'Villa', element: Villa },
  { path: '/properties/villa/list', name: 'Villa List', element: VillaList },
  { path: '/properties/villa/details:id', name: 'Villa Details', element: VillaDetails },
  { path: '/properties/villa/images:id', name: 'Villa Gallery', element: VillaImages },
  { path: '/properties/villa/images/add:id', name: 'Add Villa Image', element: AddVillaImage },
  { path: '/properties/villa/create', name: 'Create Villa', element: CreateVilla },
  { path: '/properties/villa/edit:id', name: 'Edit Villa', element: EditVilla },

  { path: '/properties/warehouse', name: 'Warehouse', element: Warehouse },
  { path: '/properties/warehouse/list', name: 'Warehouse List', element: WarehouseList },
  {
    path: '/properties/warehouse/details:id',
    name: 'Warehouse Details',
    element: WarehouseDetails,
  },
  { path: '/properties/warehouse/images:id', name: 'Warehouse Gallery', element: WarehouseImages },
  {
    path: '/properties/warehouse/images/add:id',
    name: 'Add Warehouse Image',
    element: AddWarehouseImage,
  },
  { path: '/properties/warehouse/create', name: 'Create Warehouse', element: CreateWarehouse },
  { path: '/properties/warehouse/edit:id', name: 'Edit Warehouse', element: EditWarehouse },

  { path: '/properties/interest/list', name: 'Interest List', element: InterestList },
  { path: '/properties/interest/details:id', name: 'Interest Details', element: InterestDetails },

  { path: '/properties/maintenance/list', name: 'Maintenance List', element: MaintenanceList },
  {
    path: '/properties/maintenance/details:id',
    name: 'Maintenance Details',
    element: MaintenanceDetails,
  },

  { path: '/notifications/create', name: 'Create Notification', element: SelectDevice },

  { path: '/properties/gallery/add', name: 'Add Images', element: AddImage },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
