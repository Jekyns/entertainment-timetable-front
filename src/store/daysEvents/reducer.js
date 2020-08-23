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
            text: "Sleeper",
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
            text: "Kami-sama",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "numa-no-himemiko",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "Hajimemashita",
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
            text: "Kami-sama",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "Hajimemashita",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "numa-no-himemiko",
            bgColor: "Aquamarine",
            color: "#000",
          },
        ]
      },
      {
        title: "No game no life",
        bgImage: "https://i.ytimg.com/vi/6CBp4qylX6I/maxresdefault.jpg",
        tags: [
          {
            text: "Shiro",
            bgColor: "SlateBlue",
            color: "#fff"
          },
          {
            text: "Sora",
            bgColor: "#3ae6ca",
            color: "#fff",
          },
          {
            text: "Riku DOla",
            bgColor: "Violet",
            color: "Aquamarine",
          },
        ]
      },
      {
        title: "Kamisama Hajimemashita",
        bgImage: "https://pm1.narvii.com/6420/be212f0367b272ccd1c8c8a0a483478655b21762_hq.jpg",
        tags: [
          {
            text: "Kami-sama",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "Hajimemashita",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "numa-no-himemiko",
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
            text: "Hajimemashita",
            bgColor: "aqua",
            color: "#fff"
          },
          {
            text: "Kami-sama",
            bgColor: "blue",
            color: "#000",
          },
          {
            text: "numa-no-himemiko",
            bgColor: "Aquamarine",
            color: "#000",
          },
        ]
      },
    ]
  },
  {
    number: 0,
    row: 1,
    column: 3,
    events: [
      {
        title: "Spice and Wolf",
        bgImage: "https://ru5.anyfad.com/items/t1@ed3f9985-8d67-4aed-b70f-498b68f9b56f/Krasivye-Anime-Plakaty-1.jpg",
        tags: [
          {
            text: "Holo",
            bgColor: "#000",
            color: "#fff"
          },
          {
            text: "Tote Col",
            bgColor: "yellow",
            color: "#000",
          }
        ]
      },
      {
        title: "My Neighbor Totoro",
        bgImage: "https://ru1.anyfad.com/items/t1@a6e9bfa7-d969-46eb-8f6b-89f7db482c08/Krasivye-Anime-Plakaty-1.jpg",
        tags: [
          {
            text: "My Neighbor",
            bgColor: "gray",
            color: "#fff"
          },
          {
            text: "Totoro ",
            bgColor: "white",
            color: "#000",
          }
        ]
      }
    ]
  },
  {
    number: 0,
    row: 0,
    column: 3,
    events: [
      {
        title: "Beyond the Boundary",
        bgImage: "https://i2.wp.com/www.yogomi.com/wp-content/uploads/2016/11/Beyond-the-Boundary-2.jpg?resize=1024%2C580&ssl=1",
        tags: [
          {
            text: "Kyoto Animation",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "The Garden of Words",
        bgImage: "https://i1.wp.com/www.yogomi.com/wp-content/uploads/2016/11/Garden-of-Words-Main.jpg?resize=1024%2C593&ssl=1",
        tags: [
          {
            text: "CoMix Wave films",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Death Parade",
        bgImage: "https://i0.wp.com/www.yogomi.com/wp-content/uploads/2016/11/Death-Parade-2.jpg?resize=1024%2C576&ssl=1",
        tags: [
          {
            text: "Madhouse",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "GIRL",
        bgImage: "https://i0.wp.com/www.yogomi.com/wp-content/uploads/2016/11/GIRL-main.jpg?resize=1024%2C576&ssl=1",
        tags: [
          {
            text: "Studio Khara",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
    ]
  },
  {
    number: 0,
    row: 3,
    column: 3,
    events: [
      {
        title: "Sen to Chihiro no Kamikakushi",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1450627638-807553f61fa6d8b9ed9ab9e7f1b27d05.jpeg",
        tags: [
          {
            text: "Studio Ghibli",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Haibane Renmei",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1451786040-29320c1d87d2cc505df8cc0cc6d0471b.jpeg",
        tags: [
          {
            text: "Radix",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Toki wo Kakeru Shoujo",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1450627203-d3159d4137b09d01c688309e7453a04c.jpeg",
        tags: [
          {
            text: "Madhouse",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Majo no Takkyuubin",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1451785862-eb3d80b73a8860cbac963c58ff302de6.jpeg",
        tags: [
          {
            text: "Studio Ghibli",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Evangelion 2.0 You Can (Not) Advance",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1451787320-9e606006c16c534ef08e6a803135de00.jpeg",
        tags: [
          {
            text: "Studio Khara",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Ghost in the Shell 2: Innocence",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1450627142-d67dd74786b4e55e12913abd67d89875.jpeg",
        tags: [
          {
            text: "Production I.G",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
      {
        title: "Tekkon Kinkreet",
        bgImage: "https://cdn.myanimelist.net/s/common/uploaded_files/1451785608-bfaa87feb121d7ac42ac925dbebdbe46.jpeg",
        tags: [
          {
            text: "Aniplex",
            bgColor: "#fff",
            color: "#000"
          },
        ]
      },
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
