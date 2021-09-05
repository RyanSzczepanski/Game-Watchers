const { Game } = require('../models');

const gamedata = [
  {
    game_title: 'Call Of Duty: Cold War',
    list_id: 0,
    game_image_url: "https://i.pcmag.com/imagery/reviews/05C0yBOQyhHZX8Im2M2pjnT-1..1603475053.png"
  },
  {
    game_title: 'Battlefield V',
    list_id: 0,
    game_image_url: "https://media.contentapi.ea.com/content/dam/bf/images/2020/10/bfv-web-1920x1080-definitiveedition.jpg.adapt.crop191x100.628p.jpg"
  },
  {
    game_title: 'Due Process',
    list_id: 0,
    game_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/753650/capsule_616x353.jpg?t=1629750998"
  },
  {
    game_title: 'Counter Strike: Global Offensive',
    list_id: 0,
    game_image_url: "https://i.ytimg.com/vi/p5VD49suIUw/maxresdefault.jpg"
  },
  {
    game_title: "Tom Clancy's Rainbow Six: Siege",
    list_id: 0,
    game_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1623951529"
  },
  {
    game_title: 'Escape From Tarkov',
    list_id: 1,
    game_image_url: "https://cdn.vox-cdn.com/thumbor/SwUUYaICJUr5b0kILRLQeotmQS4=/0x0:1231x692/1200x800/filters:focal(518x248:714x444)/cdn.vox-cdn.com/uploads/chorus_image/image/66045673/content_thumb_22578373032ee61704432f5eae87c611.0.jpg"
  },
  {
    game_title: 'Rust',
    list_id: 1,
    game_image_url: "https://cdn.mos.cms.futurecdn.net/9LYHPZ22BX6ERzjs9pmyYM-1200-80.jpg"
  },
  {
    game_title: 'Astroneer',
    list_id: 1,
    game_image_url: "https://cdn.akamai.steamstatic.com/steam/apps/361420/capsule_616x353.jpg?t=1617998091"
  },
  {
    game_title: 'Minecraft',
    list_id: 1,
    game_image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
  },
  {
    game_title: 'STALKER 2',
    list_id: 2,
    game_image_url: "https://compass-ssl.xbox.com/assets/ea/b2/eab23209-a59c-4d30-9b21-647253525b31.jpg?n=827936_GLP-Page-Hero-1084_1920x1080_04.jpg"
  },
  {
    game_title: 'Battlefield 2042',
    list_id: 2,
    game_image_url: "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg"
  },
  {
    game_title: 'Call of Duty: Vangaurd',
    list_id: 2,
    game_image_url: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/vgd/VGD_SEE_THEM_RISE.jpg"
  },
  {
    game_title: 'Factorio',
    list_id: 3,
    game_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg?t=1620730652"
  },
  {
    game_title: 'City Skylines',
    list_id: 3,
    game_image_url: "https://cdn2.unrealengine.com/egs-citiesskylines-colossalorder-s5-1920x1080-689706625.jpg"
  },
  {
    game_title: 'Satisfactory',
    list_id: 3,
    game_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/ss_969cc0ee250048267ba4cbd6187dbeb93cfd285b.1920x1080.jpg?t=1623335458"
  },
  {
    game_title: 'F1 2021',
    list_id: 4,
    game_image_url: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/06/news-standardedition-featuredimage-1920.jpg.adapt.crop191x100.1200w.jpg"
  },
  {
    game_title: 'DiRT 5',
    list_id: 4,
    game_image_url: "https://compass-ssl.xbox.com/assets/27/d3/27d36d9a-2aac-48d1-9891-742b3ac414ea.jpg?n=Dirt-5_GLP-Page-Hero-1084_1920x1080_04.jpg"
  },
  {
    game_title: 'Wreckfest',
    list_id: 4,
    game_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/228380/header.jpg?t=1629097817"
  },
];

const seedGames = () => Game.bulkCreate(gamedata, {individualHooks: true});

module.exports = seedGames;
