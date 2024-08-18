const menuLinks2=[
    { label: 'Dashboard', icon: 'dashboard', to: '/' },
    { label: 'CRM Dashboard', icon: 'dashboard', to: '/Dashboard2' },
    {
      label: 'Pages',
      icon: 'pages',
      children: [
        { label: 'Login-1', icon: 'email', to: '/Login-1' },
        { label: 'Lock Screen', icon: 'lock', to: '/Lock' },
        { label: 'Lock Screen - 2', icon: 'lock', to: '/Lock-2' },
        { label: 'Pricing', icon: 'list', to: '/Pricing' },
        { label: 'User Profile', icon: 'person', to: '/Profile' },
        { label: 'Maintenance', icon: 'settings', to: '/Maintenance' },
      ]
    },
    {
      label: 'Maps',
      icon: 'map',
      children: [
        { label: 'Map', icon: 'map', to: '/Map' },
        { label: 'Map Marker', icon: 'location_on', to: '/MapMarker' },
        { label: 'Street View', icon: 'streetview', to: '/StreetView' },
      ]
    },
    { label: 'Mail', icon: 'email', to: '/Mail' },
    { label: 'Directory', icon: 'card_giftcard', to: '/directory' },
    { label: 'TreeTable', icon: 'list', to: '/TreeTable' },
    { label: 'Charts', icon: 'insert_chart', to: '/Charts' },
    { label: 'Footer', icon: 'info', to: '/Footer' },
    { label: 'Card Header', icon: 'card_giftcard', to: '/CardHeader' },
    { label: 'Cards', icon: 'card_giftcard', to: '/Cards' },
    { label: 'Tables', icon: 'table_chart', to: '/Tables' },
    { label: 'Contact', icon: 'person', to: '/Contact' },
    { label: 'Checkout', icon: 'check_circle_outline', to: '/Checkout' },
    { label: 'Calendar', icon: 'date_range', to: '/Calendar' },
    { label: 'Pagination', icon: 'date_range', to: '/Pagination' },
    { label: 'Product Catalogues', icon: 'shopping_cart', to: '/Ecommerce' },
    {
      label: 'Menu Levels',
      icon: 'menu_open',
      children: [
        { label: 'Level 1', icon: '', to: '' },
        {
          label: 'Level 2',
          children: [
            { label: 'Level 2.1', icon: '', to: '' },
            {
              label: 'Level 2.2',
              children: [
                { label: 'Level 2.2.1', icon: '', to: '' },
                { label: 'Level 2.2.2', icon: '', to: '' }
              ]
            }
          ]
        }
      ]
    }
  ];
  const menuLinks=[
    { label: 'Dashboard', icon: 'dashboard', to: '/admin' },
    { label: 'Users', icon: 'people', to: '/admin/users' },
  ];
  export {
    menuLinks
  }