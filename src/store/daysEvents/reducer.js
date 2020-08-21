import { daysEvents } from '../actionTypes';

const initialState = [
  {
    number: 0,
    row: 1,
    column: 5,
    events: [
      {
        title: "HotLine Miami 2: Wrong Number",
        bgImage: "https://gamemag.ru/images/cache/News/News112659/7898e18229-2_1390x600.jpg",
        tags: [
          {
            text: "You",
            bgColor: "#fff",
            color: "#333",
          },
          {
            text: "Dead",
            bgColor: "#cb0b0e",
            color: "#fff",
          }
        ]
      }
    ]
  },
  {
    number: 0,
    row: 2,
    column: 5,
    events: [
      {
        title: "HotLine Miami",
        bgImage: "https://i.ytimg.com/vi/3GG3LCbkj1s/maxresdefault.jpg",
        tags: [
          {
            text: "Hello",
            bgColor: "#000",
            color: "#fff"
          },
          {
            text: "Vizit",
            bgColor: "yellow",
            color: "#000",
          }
        ]
      }
    ]
  },
  {
    number: 0,
    row: 2,
    column: 3,
    events: [
      {
        title: "Kamisama Hajimemashita",
        bgImage: "https://pm1.narvii.com/6420/be212f0367b272ccd1c8c8a0a483478655b21762_hq.jpg",
        tags: [
          {
            text: "Hi",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "I am",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "Godddddnessss",
            bgColor: "Aquamarine",
            color: "#000",
          },
        ]
      },
      {
        title: "Kamisama Hajimemashita season 2",
        bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
        tags: [
          {
            text: "Hi",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "I am",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "god 2",
            bgColor: "Aquamarine",
            color: "#000",
          },
        ]
      }
    ]
  },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 0,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 1,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 2,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 3,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 4,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 5,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   number: 0,
  //   row: 0,
  //   column: 6,
  //   events: [
  //     {
  //       title: "Kamisama Hajimemashita",
  //       bgImage: "https://i.pinimg.com/736x/80/b0/1c/80b01c2ed79afc7c484e81198f736696--the-princess-kamisama-kiss.jpg",
  //       tags: [
  //         {
  //           text: "Hi",
  //           bgColor: "aqua",
  //           color: "#fff"
  //         },
  //         {
  //           text: "I am",
  //           bgColor: "blue",
  //           color: "#000",
  //         },
  //         {
  //           text: "Godddddnessss",
  //           bgColor: "Aquamarine",
  //           color: "#000",
  //         },
  //       ]
  //     }
  //   ]
  // },
];

const deleteUser = (state) => {
  const newUser = initialState;
  return {
    ...state,
    daysEvents: newUser,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case daysEvents.SET_EVENTS:
      return {
        ...initialState
      };

    case daysEvents.DELETE_USER:
      return deleteUser(state, action);
    default:
      return state;
  }
};
export default reducer;
