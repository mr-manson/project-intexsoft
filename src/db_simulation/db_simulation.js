export const dbSimulation = {
    styles: [
        {
            id: 1,
            name: "Classical music",
            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/classical/classical.webp",
            artists: [
                {
                    id: 1,
                    name: "Ludwig van Beethoven",
                    img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/classical/artist/beethoven/Beethoven.webp",
                    album: [
                        {
                            id: 1,
                            title: "Violin concerto",
                            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/classical/artist/beethoven/album/beethoven-album.webp"
                        }]
                }
            ],
        },
        {
            id: 2,
            name: "Electronic music",
            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/electronic.webp",
            artists: [
                {
                    id: 2,
                    name: "Air",
                    img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/artist/air/air.jpg",
                    album: [
                        {
                            id: 2,
                            title: "10.000 hz legend",
                            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/artist/air/album/Air_10000.jpg",
                        },
                        {
                            id: 3,
                            title: "Moon safari",
                            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/artist/air/album/Air_Moon_Safari.webp",
                        }]
                },
                {
                    id: 3,
                    name: "Hocico",
                    img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/artist/hocico/hocico.jpg",
                    album: [
                        {
                            id: 4,
                            title: "Wrack And Ruin",
                            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/electronic/artist/hocico/album/Hocico_Wrack_And_Ruin.jpg",
                        }]
                },
            ]
        },
        {
            id: 3,
            name: "Func music",
            img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/funk/funk.webp",
            artists: [
                {
                    id: 4,
                    name: "Beck",
                    img: "https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/music/funk/artist/beck/3477.webp",
                    album: [{id: 5, title: "Sea Change"}, {id: 6, title: "Morning Phase"}]
                },
            ]
        },

    ],

    tracklist: [
        {num: 1, title: "Lorem, ipsum dolor", dur: "3:33"},
        {num: 1, title: "Amet consectetur", dur: "4:06"},
        {num: 1, title: "Enim tempore mollitia", dur: "3:12"},
        {num: 1, title: "Commodi", dur: "2:59"},
        {num: 1, title: "Hic vitae", dur: "6:48"},
    ]
}