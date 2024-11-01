export interface legendType {
  title: string;
  img: string;
  country: string;
  date: string;
  origin: string;
  coords: number[];
  icon: string;
}

export const legends: legendType[] = [
  {
    title: "La Llorona",
    img: "/hauntedImgs/llorona.jpg",
    country: "Mexico",
    date: "15th Century",
    origin:
      "The legend tells of a woman who, after murdering her children in a fit of madness, wanders rivers and lakes crying and searching for them in regret. It’s said that her cries can be heard at night, and those who hear them may suffer misfortunes.",
    coords: [-96.71346214, 17.04176233],
    icon: "/markerIcons/ghostMark.ico",
  },
  {
    title: "Sleepy Hollow",
    img: "/hauntedImgs/sleepyHollow.jpg",
    country: "USA",
    date: "18th Century",
    origin:
      "This legend tells of a headless ghost, a soldier who lost his head in battle, seeking revenge or haunting the inhabitants of Sleepy Hollow. It became widely known through the story The Legend of Sleepy Hollow.",
    coords: [-73.858768, 41.0751],
    icon: "/markerIcons/deathMark.ico",
  },
  {
    title: "El Chupacabras",
    img: "/hauntedImgs/chupacabras.jpg",
    country: "Puerto Rico",
    date: "1995",
    origin:
      "The Chupacabra is a mythical creature supposedly attacking livestock and drinking their blood. Sightings have been reported in various parts of Latin America, where the monster is described as having red eyes and an alien-like appearance.",
    coords: [-65.91249830753179, 18.393570763235285],
    icon: "/markerIcons/halloweenMark.ico",
  },
  {
    title: "El Silbón",
    img: "/hauntedImgs/whistler.webp",
    country: "Venezuela",
    date: "19th Century",
    origin:
      "This legend describes a wandering spirit with a distinctive whistle. He is the soul of a young man who killed his father and now roams with a sack of bones. It is said that if you hear the whistle sounding distant, he’s nearby, and vice versa.",
    coords: [-69.1933966406558, 8.695874863807623],
    icon: "/markerIcons/killMark.ico",
  },
  {
    title: "Slender Man",
    img: "/hauntedImgs/slenderman.jpg",
    country: "USA",
    date: "2009",
    origin:
      "Slender Man is a tall, impossibly thin figure clad in a dark suit, with limbs unnaturally elongated and a face devoid of features—no eyes, no mouth, only a blank, pale shape. He lingers at the edges of forests and deserted areas, silently stalking his victims.",
    coords: [-88.668555, 45.553842],
    icon: "/markerIcons/halloweenMark.ico",
  },
  {
    title: "La Catrina",
    img: "/hauntedImgs/catrina.webp",
    country: "Mexico",
    date: "1910",
    origin:
      "They say that those who catch a glimpse of her on Halloween night may feel a sudden chill—a reminder that death’s embrace is closer than it seems. Unhurried, she drifts among gravestones and moonlit paths, an unspoken symbol that wealth, beauty, and power all fade in the face of eternity.",
    coords: [-102.72142205364213, 21.842811054995895],
    icon: "/markerIcons/deathMark.ico",
  },
  {
    title: "The Vanishing Hitchhiker",
    img: "/hauntedImgs/vanishHitch.jpg",
    country: "Germany",
    date: "20th Century",
    origin:
      "A driver picks up a young woman dressed in white, who gives directions to a location. Upon arrival, the driver discovers she has vanished, only to learn later that she died in a tragic accident at that spot years ago.",
    coords: [9.895099, 51.153008],
    icon: "/markerIcons/ghostMark.ico",
  },
  {
    title: "The Black-Eyed Children",
    img: "/hauntedImgs/blackchild.jpg",
    country: "USA",
    date: "1990",
    origin:
      "Eerie children with pale skin and pitch-black eyes appear at night, asking to be let into homes or cars. People report feeling an overwhelming sense of dread in their presence.",
    coords: [-99.64306300764791, 32.507499829901036],
    icon: "/markerIcons/ghostMark.ico",
  },
  {
    title: "Kuchisake-onna",
    img: "/hauntedImgs/kuchisake.jpg",
    country: "Japan",
    date: "Edo Period",
    origin:
      "A spirit wearing a mask asks people if they think she is beautiful. If they say yes, she reveals her gruesome, slit mouth; if they say no, she may kill them; if they say yes, she will slit their mouth to resemble hers.",
    coords: [139.707763, 35.700193],
    icon: "/markerIcons/killMark.ico",
  },
  {
    title: "De Vliegende Hollander",
    img: "/hauntedImgs/dutchman.jpg",
    country: "Netherlands",
    date: "17th Century",
    origin:
      "A ghost ship doomed to sail the seas forever. Sightings of the ship are said to be omens of disaster for sailors.",
    coords: [5.161691, 53.147183],
    icon: "/markerIcons/ghostMark.ico",
  },
  {
    title: "The Bunyip",
    img: "/hauntedImgs/bunyip.jpg",
    country: "Australia",
    date: "???",
    origin:
      "Is said to inhabit swamps, creeks, and waterholes. Descriptions vary, but it is often depicted as a large, fearsome animal. Indigenous Australians tell stories of the Bunyip as a protector of the water and a warning against venturing too close to dangerous areas.",
    coords: [148.77582, -20.27132],
    icon: "/markerIcons/halloweenMark.ico",
  },
  {
    title: "Nessie",
    img: "/hauntedImgs/nessie.webp",
    country: "Scotland",
    date: "1930",
    origin:
      "Nessie is said to be a large, long-necked creature that resides in Loch Ness. Witnesses often describe it as having one or more humps above the water, resembling a plesiosaur.",
    coords: [-4.42278, 57.349],
    icon: "/markerIcons/halloweenMark.ico",
  },
  {
    title: "Jack O' Lantern",
    img: "/hauntedImgs/jack.jpg",
    country: "Hallow",
    date: "¿¿¿",
    origin:
      "Surely, you didn’t think I would pass up the chance to be here, did you?",
    coords: [-31.1, 10.31],
    icon: "/markerIcons/jack.ico",
  },
  {
    title: "The Death Itself",
    img: "/hauntedImgs/death.jpg",
    country: "???",
    date: "¿¿¿",
    origin:
      "Each heartbeat is a gift, a fleeting moment in the dance of life. Embrace it! Live fully, love fiercely, and create memories that linger even after you’re gone.",
    coords: [-66.6, 66.6],
    icon: "/markerIcons/theReaper.ico",
  },
];
