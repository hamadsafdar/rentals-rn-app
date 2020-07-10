const bottomTabs = {
  children: [
    {
      stack: {
        children: [
          {
            component: {
              name: '',
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: '',
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: '',
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: '',
            },
          },
        ],
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
