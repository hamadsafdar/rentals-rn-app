const bottomTabs = {
  children: [
    {
      stack: {
        children: [
          {
            component: {
              name: 'rentals.ExploreScreen',
            },
          },
        ],
        options: {
          bottomTab: {
            // icon: '',
            text: 'Explore',
          },
        },
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'rentals.InboxScreen',
            },
          },
        ],
        options: {
          bottomTab: {
            // icon: '',
            text: 'Inbox',
          },
        },
      },
    },
  ],
};

const authRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'rentals.LoginScreen',
          },
        },
      ],
    },
  },
};

//Tabs
const mainRoot = {
  root: {
    bottomTabs,
  },
};

export { authRoot, mainRoot };
