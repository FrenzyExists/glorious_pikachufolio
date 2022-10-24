// This is where All the info of my projects is written

function Enum(values){
    for( var i = 0; i < values.length; ++i ){
        this[values[i]] = i;
    }
    return this;
}

let EnumStatus  = ['Finished', 'Developing', 'Hiatus', 'Rolling']


const projectObj = [
    {
        projectName: "Dotfiles",
        tags: [ 'Bash', 'Scripting', 'Linux', 'Ricing' ],
        projectStatus: EnumStatus[3],
        description:
            'My dotfiles, includes theming and a couple of scripts that are keyboard binded to function as media control keys, screenshot, emoji picker, finder and screen recorder, notifications, and much more!'
        ,
        repoURL: "https://github.com/FrenzyExists/dotfiles",
        picture: "https://raw.githubusercontent.com/FrenzyExists/dotfiles/master/screenshots/screenshot_2.png"

    },
    {
        projectName: "Meteora - A simple Block Game",
        tags: ['Python', 'Pygame', 'GUI', 'Game'],
        projectStatus: EnumStatus[0],
        description:
            "Created a game in Python where you shoot little blocks and evade them as they come. Used Pygame as the framework and GUI toolkit",
        repoURL: "https://github.com/FrenzyExists/Meteora-python",
        picture: null
    },
    {
        projectName: "Memory Game - JS",
        tags: ['Javascript', 'Web Dev', 'Codepath'],
        description:
            "Designed a Memory game based on the famous game \"Simon Says\" as part of a pre-work on the Codepath program. I used Figma to design the UI and broke in an event-driven program to ease development",
        projectStatus: EnumStatus[0],
        repoURL: "https://github.com/FrenzyExists/CodePathSITE-Prework",
        picture: "https://github.com/FrenzyExists/CodePathSITE-Prework/raw/master/Documentation/prev_1.gif"
    },
    {
        projectName: "Scoreboard - JS",
        tags: ['Javascript', 'Web Dev'],
        projectStatus: EnumStatus[0],
        description:
            "Created a scoreboard as part of a university crash bootcamp I took.",
        repoURL: "https://github.com/FrenzyExists/OneDayBootCampScoreboard",
        picture: "https://github.com/FrenzyExists/OneDayBootCampScoreboard/raw/master/scoreboard_screenshot.png"
    },
    {
        projectName: "Media Control with Arduino",
        tags: ['Arduino', 'Electronics', 'Keyboards', 'Python', '3D Print'],
        projectStatus: EnumStatus[3],
        description:
            "Built 4-button keypad with an Arduino Uno that controls media control and virtually anything you want in your desktop, as long as your desktop is unix based. 3D case designed with Freecad and used lubed Gateron Brown switches :)",
        repoURL: "https://github.com/FrenzyExists/media-stuff-with-uno",
        picture: "https://github.com/FrenzyExists/media-stuff-with-uno/raw/master/board-fritz.png"
    },
    {
        projectName: "RGB Control with IR",
        tags: ['Arduino', 'Electronics', 'Remote Control'],
        projectStatus: EnumStatus[0],
        description:
            "Designed a small RGB lamp that is controlled with a generic IR remote control. Currently can change to a variety of colors, includes two timers to set the light off and lights can dim by using a counter.",
        repoURL: "https://github.com/FrenzyExists/rgb-control-thing",
        picture: null
    },
    {
        projectName: "Porfolio (this website!)",
        tags: ['Vue 3', 'Tailwind', 'Web Dev'],
        projectStatus: EnumStatus[3],
        description:
            "This very website! Designed with VueJs with tailwind. I utilized Aquarium colors, which is my own theme. Feel free to contact me, I'm open for interships and coop",
        repoURL: "https://github.com/FrenzyExists/glorious_pikachufolio",
        picture: null
    },
    {
        projectName: "Biological Sequence Alignment",
        tags: ['Python', 'Bioinformatics', 'Algorithms'],
        projectStatus: EnumStatus[0],
        description:
            "Part of an Algorithm course project, I implemented the the Needleman-Wunsch algorithm which compares the a series RNAs with some unknown RNA sequence, allowing to identify the unknown sequence.",
        repoURL: "https://github.com/FrenzyExists/Biological-Sequence-Alignments",
        picture: null
    },
    {
        projectName: "Aquarium Theme",
        tags: ['Lua', 'Ricing', 'Theme', 'Neovim'],
        projectStatus: EnumStatus[3],
        description:
            "A simple dark and light theme for neovim made to please the eyes while being colorful. Inspired by the many awesome themes shared in r/linuxporn",
        repoURL: "https://github.com/FrenzyExists/aquarium-vim",
        picture: "https://raw.githubusercontent.com/FrenzyExists/aquarium-vim/develop/screenshots/banner.png"
    }
]


const projectObjOLD = [
        {
        projectName: "Tiny Pokedex",
        tags: ['Databases', 'Prisma', 'REST API', 'Typescript'],
        projectStatus: EnumStatus[3],
        description:
            "Inspired by pokeapi.co, this is my own implementation of a simple pokedex API, perfect for CLI apps.",
        repoURL: "https://github.com/FrenzyExists/tiny-pokedex",
        picture: null
    },

    {
        projectName: "Flexscript",
        tags: ['C', 'Language'],
        description:
            "A scripting language originally made in Java, re-written in C. Inspired by modern languages, flexibility comes first",
        projectStatus: EnumStatus[1],
        repoURL: "",
        picture: null
    },
    {
        projectName: "Digital Electronics Labs",
        tags: ['Electronics', 'University'],
        description:
            "Digital Electronics (INEL []) Lab reports from my university during fall 2022. In these labs I learned about the operation and use of CMOS transistors as well as different arrangements that would allow me to create logical gates.",
        projectStatus: EnumStatus[1],
        repoURL: "",
        picture: null
    },
        {
        projectName: "Scoreboard - JS",
        tags: ['Javascript', 'Web Dev'],
        projectStatus: EnumStatus[0],
        description:
            "Created a scoreboard as part of a scrimba course I took.",
        repoURL: "",
        picture: null
    },
    {
        projectName: "TicTacToe - JS",
        tags: [],
        projectStatus: EnumStatus[1],
        description:
            "",
        repoURL: "",
        picture: null
    },
    {
        projectName: "TicTactoe CLI",
        tags: [''],
        projectStatus: EnumStatus[0],
        description:
            "",
        repoURL: "",
        picture: null
    },
    {
        projectName: "Booking Planner",
        tags: ['Databases', 'REST API', 'Fullstack', 'React'],
        projectStatus: EnumStatus[3],
        description:
            "Developed a fullstack booking planner app with a team as part of a Databases course. I contributed mostly on the backend side of the app using PosgreSQL in Python, while my classmates worked on the frontend writen in React.",
        repoURL: "https://github.com/FrenzyExists/booking-system",
        picture: null
    },
    {
        projectName: "Media Control with Arduino",
        tags: ['Arduino', 'Electronics', 'Keyboards', 'Python', '3D Print'],
        projectStatus: null,
        description:
            "Built 4-button keypad with an Arduino Uno that controls media control and virtually anything you want in your desktop, as long as your desktop is unix based. 3D case designed with Freecad and used lubed Gateron Brown switches :)",
        repoURL: "https://github.com/FrenzyExists/media-stuff-with-uno",
        picture: null
    },
    {
        projectName: "RGB Control with IR",
        tags: ['Arduino', 'Electronics', 'Remote Control'],
        projectStatus: EnumStatus[0],
        description:
            "Designed a small RGB lamp that is controlled with a generic IR remote control. Currently can change to a variety of colors, includes two timers to set the light off and lights can dim by using a counter.",
        repoURL: "https://github.com/FrenzyExists/rgb-control-thing",
        picture: null
    },
    {
        projectName: "Porfolio (this website!)",
        tags: ['Vue 3', 'Tailwind', 'Web Dev'],
        projectStatus: EnumStatus[3],
        description:
            "This very website! Designed with VueJs with tailwind. I utilized Aquarium colors, which is my own theme. Feel free to contact me, I'm open for interships and coop",
        repoURL: "https://github.com/FrenzyExists/glorious_pikachufolio",
        picture: null
    },
    {
        projectName: "Biological Sequence Alignment",
        tags: ['Python', 'Bioinformatics', 'Algorithms'],
        projectStatus: EnumStatus[0],
        description:
            "Part of an Algorithm course project, I implemented the the Needleman-Wunsch algorithm which compares the a series RNAs with some unknown RNA sequence, allowing to identify the unknown sequence.",
        repoURL: "https://github.com/FrenzyExists/Biological-Sequence-Alignments",
        picture: null
    },
    {
        projectName: "Aquarium Theme",
        tags: ['Lua', 'Ricing', 'Theme', 'Neovim'],
        projectStatus: EnumStatus[3],
        description:
            "A simple dark and light theme for neovim made to please the eyes while being colorful. Inspired by the many awesome themes shared in r/linuxporn",
        repoURL: "https://github.com/FrenzyExists/aquarium-vim",
        picture: "https://raw.githubusercontent.com/FrenzyExists/aquarium-vim/develop/screenshots/banner.png"
    }
]

export {
    EnumStatus,
    projectObj
}
