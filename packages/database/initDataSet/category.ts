export const category: { [key: string]: string[] } = {
  flowers: [
    "alyssum",
    "aster",
    "azalea",
    "barberton daisy",
    "begonia",
    "carnation",
    "china aster",
    "chrysanthemum",
    "daffodil",
    "freesia",
    "geranium",
    "gerbera daisy",
    "gladiolus",
    "iris",
    "marigold",
    "nasturtium",
    "pansy",
    "peony",
    "primrose",
    "rhododendron",
    "snapdragon",
    "sunflower",
    "sweet pea",
    "transvaal daisy",
    "various flowers",
    "verbena",
    "violet",
    "zinnia",
  ],
  fruits: [
    "almond",
    "apple",
    "apricot",
    "pear",
    "plum",
    "prune",
    "quince",
    "stone fruit",
    "strawberry",
    "various fruits and nuts",
    "walnut",
  ],
  lawns: [
    "all lawn grasses",
    "annual bluegrass",
    "bentgrasses",
    "bermudagrass",
    "bluegrass",
    "dichondra",
    "fescues",
    "fine fescues",
    "kentucky bluegrass",
    "kikuyugrass",
    "ryegrasses",
    "seashore paspalum",
    "st. augustine grass",
    "zoysiagrass",
  ],
  trees: [
    "ash",
    "aspen",
    "boxwood",
    "buckthorn",
    "california hazel",
    "camellia",
    "coffeeberry",
    "conifers",
    "cottonwood",
    "crape myrtle",
    "cryptomeria",
    "dogwood",
    "douglas fir",
    "elm",
    "filbert",
    "forsythia",
    "hackberry",
    "hazlenut",
    "hemlock",
    "juniper",
    "laurel",
    "live oak",
    "london plane tree",
    "oak",
    "oleander",
    "olive tree",
    "palm tree",
    "pine",
    "poplar",
    "redberry",
    "rhamnus",
    "rose",
    "sweet gum/liquidambar",
    "sycamore",
    "various trees and shrubs",
  ],
  vegs: [
    "artichoke",
    "asparagus",
    "avocado",
    "beans",
    "beet",
    "black-eyed pea",
    "broccoli",
    "brussel sprouts",
    "cabbage",
    "cantaloupe",
    "carrot",
    "cauliflower",
    "cole crops",
    "corn",
    "cucumber",
    "cucurbits",
    "eggplant",
    "endive",
    "lettuce",
    "melon",
    "okra",
    "onions and garlic",
    "parsley",
    "parsnip",
    "pea",
    "pepper",
    "potato",
    "pumpkin",
    "radicchio",
    "radish",
    "spinach",
    "squash",
    "tomatillo",
    "tomato",
    "turnip",
    "various vegetables and melons",
    "watermelon",
  ],
};

export const allCat = [...category.flowers, ...category.fruits, ...category.lawns, ...category.trees, ...category.vegs];

export const alias2 = {
  "onions and garlic": ["onion", "garlic"],
  "stone fruit": [
    "coconut",
    "olive",
    "plum",
    "peach",
    "cherry",
    "nectarine",
    "apricot",
    "mango",
    "lychee",
    "raspberry",
    "blackberry",
    "mulberry",
    "date",
  ],
  "london plane tree": ["london plane"],
  "california hazel": ["beaked hazelnut"],
  "barberton daisy": ["daisy"],
  "gerbera daisy": ["daisy"],
  "transvaal daisy": ["daisy"],
};
export const alias = {
  daisy: ["transvaal daisy", "gerbera daisy", "barberton daisy"],
  "beaked hazelnut": "california hazel",
  "london plane": "london plane tree",
  coconut: "stone fruit",
  olive: "stone fruit",
  plum: "stone fruit",
  peach: "stone fruit",
  cherry: "stone fruit",
  nectarine: "stone fruit",
  apricot: "stone fruit",
  mango: "stone fruit",
  lychee: "stone fruit",
  raspberry: "stone fruit",
  blackberry: "stone fruit",
  mulberry: "stone fruit",
  date: "stone fruit",
};

export const TracheophytaClass: { [key: string]: string } = {
  Polypodiopsida: "lawns",
  // Magnoliopsida: ["flowers", "fruits", "vegs"],
  // Liliopsida: ["flowers", "fruits", "vegs"],
  Pinopsida: "trees",
  Lycopodiopsida: "trees",
  Gnetopsida: "trees",
  Cycadopsida: "trees",
};

export const MagnoliopsidaOrder: { [key: string]: string[] } = {
  Lamiales: ["flowers", "trees"],
  Oxalidales: ["flowers"],
  Ranunculales: ["flowers"],
  Boraginales: ["flowers"],
  Ericales: ["flowers", "fruits"],
  Nymphaeales: ["flowers"],
  Malpighiales: ["flowers", "fruits"],
  Piperales: ["flowers", "fruits"],
  Fabales: ["flowers", "vegs"],
  Caryophyllales: ["flowers", "vegs"],
  Saxifragales: ["flowers", "fruits"],
  Dipsacales: ["flowers", "fruits"],
  Asterales: ["flowers"],
  Gentianales: ["flowers"],
  Brassicales: ["flowers", "fruits", "vegs"],
  Rosales: ["flowers"],
  Geraniales: ["flowers"],
  Apiales: ["flowers", "vegs"],
  Fagales: ["trees"],
  Garryales: ["flowers"],
  Malvales: ["flowers", "fruits"],
  Solanales: ["flowers", "vegs"],
  Sapindales: ["trees", "fruits", "vegs"],
  Cornales: ["flowers"],
  Myrtales: ["flowers", "fruits"],
  Vitales: ["fruits"],
  Santalales: ["trees"],
  Cucurbitales: ["fruits", "vegs"],
  Laurales: ["trees", "vegs"],
  Zygophyllales: ["trees", "flowers"],
  Celastrales: ["trees", "flowers"],
  Proteales: ["flowers"],
  Magnoliales: ["flowers", "fruits"],
  Ceratophyllales: [],
  Aquifoliales: ["trees", "fruits"],
  Austrobaileyales: ["trees", "fruits"],
  Crossosomatales: ["trees"],
  Gunnerales: ["trees"],
  Buxales: ["trees"],
  Picramniales: ["trees"],
  Dilleniales: ["flowers"],
  Metteniusales: ["trees"],
  Canellales: ["trees"],
};

export const LiliopsidaOrder: { [key: string]: string[] } = {
  Asparagales: ["flowers", "vegs"],
  Liliales: ["flowers"],
  Dioscoreales: ["trees", "vegs"],
  Poales: ["vegs"],
  Commelinales: ["flowers"],
  Alismatales: ["flowers"],
  Zingiberales: ["flowers"],
  Arecales: ["trees", "vegs"],
  Pandanales: ["trees"],
  Acorales: ["flowers"],
};

const flowerIds = [
  { id: "clds7h54b00a67ko0vrlyqo9b" },
  { id: "clds7ha6j00a87ko0chcjqnq5" },
  { id: "clds7h3js00a47ko01qj0bfsl" },
  { id: "clds7hdnc00aa7ko0gk4dt7r2" },
  { id: "clds7hfcs00ac7ko0b09nj26l" },
  { id: "clds7hgwb00ae7ko0n8znyeoz" },
  { id: "clds7higr00ag7ko0jr1bcivj" },
  { id: "clds76bl000167ko0u0zw0c4a" },
  { id: "clds78h0h003a7ko0cl4c9x6o" },
  { id: "clds78ilo003c7ko0k57888m1" },
  { id: "clds790ai003w7ko0qki0pw81" },
  { id: "clds793un00407ko0mvo3dan3" },
  { id: "clds7bk3u005y7ko01xci7qb2" },
  { id: "clds7bn9k00627ko0lqia7jhl" },
  { id: "clds7bloo00607ko0wqgonymu" },
  { id: "clds7bova00647ko0na26lz75" },
  { id: "clds7bqlk00667ko09pzzga6o" },
  { id: "clds7bs6100687ko0g8kflewj" },
  { id: "clds7btqt006a7ko04dpqtqzk" },
  { id: "clds780xj002u7ko0izui7rd8" },
  { id: "clds7d85p007i7ko0g08trfkq" },
  { id: "clds7d9qm007k7ko0s7h975t8" },
  { id: "clds7dbbm007m7ko0dsayxyp5" },
  { id: "clds7fn2s009c7ko0nzy63roe" },
  { id: "clds7fono009e7ko05xzkod5k" },
  { id: "clds7b89b005q7ko0vw96kuqi" },
  { id: "clds7flhp009a7ko077kyjwo0" },
  { id: "clds7ict600b67ko01rgt0ola" },
  { id: "clds7iedz00b87ko04nplqfzu" },
  { id: "clds7lcky00d27ko0dlsvwb18" },
  { id: "clds7mov200dk7ko0h27v2mf9" },
  { id: "clds7nv2500e87ko0bbqwas6o" },
  { id: "clds78fim00387ko0n9xi17yc" },
  { id: "clds7929p003y7ko0ituyihn5" },
  { id: "clds7r50q00fm7ko0guishfxd" },
  { id: "clds7r6lm00fo7ko0znj9bii5" },
  { id: "clds7r89j00fq7ko0jqj3e4um" },
  { id: "clds769xh00147ko0jzl8826o" },
  { id: "clds7sbdi00g67ko0eg4ecj74" },
  { id: "clds7scyl00g87ko0oecsfka8" },
  { id: "clds7soq900gi7ko0mdvglugw" },
  { id: "clds7shup00gc7ko0ch34a91c" },
  { id: "clds7sjfm00ge7ko0p6h6c6uf" },
  { id: "clds7smwn00gg7ko0jvqufp8s" },
  { id: "clds77sd6002o7ko0pic4fjsm" },
  { id: "clds7sqb400gk7ko03wnuut3w" },
  { id: "clds75p5b000e7ko0h8wl654y" },
  { id: "clds7sej900ga7ko03gm2m1bl" },
  { id: "clds760dh000s7ko0d628lsrf" },
  { id: "clds7vjrf00io7ko0xf02h307" },
  { id: "clds782fu002w7ko08uf8fd35" },
  { id: "clds7jlj900bs7ko0k4xpkt59" },
  { id: "clds7wh0s00j27ko0j5vxhasr" },
];

const fruitsId = [
  { id: "clds75ymu000q7ko0br8f7vop" },
  { id: "clds778rp00247ko0c4u1wehv" },
  { id: "clds7qhjz00f67ko03cb60noz" },
  { id: "clds7qj9a00f87ko0w195a884" },
  { id: "clds7qkvp00fa7ko0ggsq527o" },
  { id: "clds7qmgm00fc7ko0hjmrsbsi" },
  { id: "clds7qo1h00fe7ko01gis3aq1" },
  { id: "clds7qpm100fg7ko0cttqfcab" },
  { id: "clds75tw2000k7ko03ht7kdvv" },
  { id: "clds75vgo000m7ko0tr36dfab" },
  { id: "clds75x20000o7ko0y5q5i5mj" },
  { id: "clds766om00107ko059kzynxo" },
  { id: "clds7653v000y7ko0rhvbuwba" },
  { id: "clds76osn001m7ko0yazjal9i" },
  { id: "clds76qd1001o7ko07j44763v" },
  { id: "clds76u2g001q7ko02zkuaek9" },
  { id: "clds76vnc001s7ko09kt07jfs" },
  { id: "clds76x8o001u7ko0vfwqv769" },
  { id: "clds76yt9001w7ko0z3i8di6p" },
  { id: "clds772ab001y7ko0u0qv2fz1" },
  { id: "clds7777z00227ko07qapg6ad" },
  { id: "clds77acd00267ko0yrb3qhxg" },
  { id: "clds775lx00207ko0rh7pxb8u" },
  { id: "clds77gze002c7ko06zoqmybb" },
  { id: "clds77fej002a7ko0lr0a51wf" },
  { id: "clds77lst002g7ko06s76w0zg" },
  { id: "clds7b3a0005m7ko0swinns0z" },
  { id: "clds75qq3000g7ko0m500ny4a" },
  { id: "clds7ctje007a7ko0nxlxh0li" },
  { id: "clds7cv7p007c7ko03ti6fhy1" },
  { id: "clds7cn2500727ko0sp8dnq42" },
  { id: "clds7b89b005q7ko0vw96kuqi" },
  { id: "clds77dtv00287ko0aqa8drwd" },
  { id: "clds768ci00127ko06q13upio" },
  { id: "clds7mk4n00de7ko0akf1hg61" },
  { id: "clds7mlpi00dg7ko0rjt9jocs" },
  { id: "clds7mn8m00di7ko0hz1pd0n0" },
  { id: "clds7pw2k00eo7ko03azdyevn" },
  { id: "clds7qct900f07ko057zhy16w" },
  { id: "clds7qeeg00f27ko060s752xa" },
  { id: "clds7qfz100f47ko0qd76aomy" },
  { id: "clds7q14d00eq7ko0rm6997hv" },
  { id: "clds7q2sa00es7ko0upl0kii4" },
  { id: "clds77kb0002e7ko0v3nmllni" },
  { id: "clds7q63r00eu7ko0akcmcp2b" },
  { id: "clds7q7u400ew7ko0hp3ovmem" },
  { id: "clds7qb8e00ey7ko0sn2q9r48" },
  { id: "clds7qsxi00fi7ko0at96pvrk" },
  { id: "clds7quir00fk7ko0gli4mcek" },
  { id: "clds769xh00147ko0jzl8826o" },
  { id: "clds7sxcc00gm7ko0b076hhdd" },
  { id: "clds7t0i100gq7ko02jeixjml" },
  { id: "clds7t22w00gs7ko0ktq4w95q" },
  { id: "clds7t3ny00gu7ko07t7y7t9t" },
  { id: "clds7t58m00gw7ko0lg3llnqw" },
  { id: "clds7syx000go7ko0rnd3pc2q" },
  { id: "clds7th6400h47ko0e10e6kwn" },
  { id: "clds760dh000s7ko0d628lsrf" },
  { id: "clds7voz900iq7ko0za2kjm7v" },
  { id: "clds75sax000i7ko0pcaay9kb" },
  { id: "clds7vsah00is7ko05ax9pczm" },
  { id: "clds7vtvi00iu7ko09lzu50pt" },
  { id: "clds7vx7600iw7ko0ya2dwdqs" },
  { id: "clds761xu000u7ko0bm7uuq12" },
  { id: "clds7u9ba00hq7ko00fhyzf1i" },
  { id: "clds763iq000w7ko00m2j3opm" },
  { id: "clds7w5vv00iy7ko0txqa2tui" },
  { id: "clds7wbyr00j07ko0wqzqwhoz" },
];

const lawnsId = [
  { id: "clds75dae00007ko0ihx5nn0s" },
  { id: "clds75f6n00027ko02ut8w4fg" },
  { id: "clds75h3p00047ko0q9opy67k" },
  { id: "clds75int00067ko0zyq0yz1b" },
  { id: "clds75k8z00087ko04yyqblhy" },
  { id: "clds75ltp000a7ko0udto1ttt" },
  { id: "clds75nes000c7ko0ly27ekhc" },
  { id: "clds7973600447ko0ju82l40e" },
  { id: "clds76gq2001c7ko041gdo7qk" },
  { id: "clds76dk500187ko0rhfrwlck" },
  { id: "clds76n1f001k7ko0hd041fs2" },
  { id: "clds76lgp001i7ko05kc983w9" },
  { id: "clds76jwx001g7ko08d2zyi84" },
  { id: "clds76iar001e7ko0gkldfc7a" },
  { id: "clds79ywc004a7ko0ticwdi0g" },
  { id: "clds795fb00427ko0wn5b35y6" },
  { id: "clds79e1w00467ko06xco78fb" },
  { id: "clds7ihpg00bc7ko0w6hwmz0o" },
  { id: "clds7ijaj00be7ko0cse2tuv1" },
  { id: "clds7fq8f009g7ko05t11an6y" },
  { id: "clds7gdqw009u7ko0p7958afd" },
  { id: "clds76f4z001a7ko0ukhb6zrf" },
  { id: "clds75p5b000e7ko0h8wl654y" },
  { id: "clds79j9q00487ko0un3zyjt1" },
];

const treesId = [
  { id: "clds75ymu000q7ko0br8f7vop" },
  { id: "clds778rp00247ko0c4u1wehv" },
  { id: "clds7n0re00do7ko06fir1j5b" },
  { id: "clds7t6th00gy7ko09fvf1b0i" },
  { id: "clds7ftjm009k7ko0zwfbl87m" },
  { id: "clds7gzze00a27ko0i0q2mywk" },
  { id: "clds7a27s004e7ko07rhg1381" },
  { id: "clds7alfa00507ko0e21sie3p" },
  { id: "clds7ajr9004y7ko0hd4vo7on" },
  { id: "clds7a0h8004c7ko0faqego3b" },
  { id: "clds77p4w002k7ko0bvnf6mqh" },
  { id: "clds77qp9002m7ko02rucuk06" },
  { id: "clds7af0l004s7ko03z0cck8e" },
  { id: "clds7atmz005a7ko04zwrk7ld" },
  { id: "clds7cqe400767ko0oxij0c2e" },
  { id: "clds7ctje007a7ko0nxlxh0li" },
  { id: "clds7cv7p007c7ko03ti6fhy1" },
  { id: "clds7cyiv007e7ko00lwmzct1" },
  { id: "clds7dl74007u7ko05072bktf" },
  { id: "clds7cn2500727ko0sp8dnq42" },
  { id: "clds7eh6x008g7ko04fxvhjuz" },
  { id: "clds7eiuf008i7ko0afgbr6hj" },
  { id: "clds7ekfo008k7ko00a096qyy" },
  { id: "clds7f0y3008y7ko0voq8iwrx" },
  { id: "clds7f2j800907ko041w7qxmi" },
  { id: "clds7frz7009i7ko0bkjyivce" },
  { id: "clds7b89b005q7ko0vw96kuqi" },
  { id: "clds7g3oe009q7ko0n816rf3l" },
  { id: "clds7i7wr00b27ko0derfms0u" },
  { id: "clds7ib8c00b47ko0xf9asoey" },
  { id: "clds7ig5500ba7ko0da3p9v0w" },
  { id: "clds768ci00127ko06q13upio" },
  { id: "clds7jez100bk7ko0bpz170al" },
  { id: "clds7jgq500bm7ko0dnq5ud1a" },
  { id: "clds7jjvb00bq7ko03mmzoofr" },
  { id: "clds7k9qo00by7ko00kpphv0b" },
  { id: "clds7kd1f00c07ko0n1u3ngzf" },
  { id: "clds7kem300c27ko0rygpq132" },
  { id: "clds7ki0400c47ko0qlkndp48" },
  { id: "clds7kjlj00c67ko0vwu1src3" },
  { id: "clds7kmwq00c87ko05obhce3a" },
  { id: "clds7l99t00d07ko0m9rtiwkm" },
  { id: "clds7ocfs00ec7ko08vfc6epv" },
  { id: "clds7oe0t00ee7ko0kfqdon5b" },
  { id: "clds7ofo900eg7ko06miux1pq" },
  { id: "clds7okw700ei7ko0871auice" },
  { id: "clds7omh000ek7ko05wxlpi4j" },
  { id: "clds7i6er00b07ko0c2e9mils" },
  { id: "clds7g1xf009o7ko0ms8p1djx" },
  { id: "clds7g58w009s7ko0zxqfx0lq" },
  { id: "clds7r9u700fs7ko0mrif65uw" },
  { id: "clds7jiaq00bo7ko0lii4q7dp" },
  { id: "clds7soq900gi7ko0mdvglugw" },
  { id: "clds7smwn00gg7ko0jvqufp8s" },
  { id: "clds77sd6002o7ko0pic4fjsm" },
  { id: "clds7t22w00gs7ko0ktq4w95q" },
  { id: "clds7t3ny00gu7ko07t7y7t9t" },
  { id: "clds7t58m00gw7ko0lg3llnqw" },
  { id: "clds7syx000go7ko0rnd3pc2q" },
  { id: "clds7sej900ga7ko03gm2m1bl" },
  { id: "clds7tdxr00h07ko0xy2n3rao" },
  { id: "clds7tfif00h27ko0ph3br6fn" },
  { id: "clds7th6400h47ko0e10e6kwn" },
  { id: "clds760dh000s7ko0d628lsrf" },
  { id: "clds7tknv00h67ko0vnmvsh2e" },
  { id: "clds7tm8900h87ko0frmran8c" },
  { id: "clds7tnt800ha7ko018uj0ols" },
  { id: "clds7tpei00hc7ko00xitqhvu" },
  { id: "clds7tqz100he7ko04dpcy74r" },
  { id: "clds7tznt00hg7ko04367kz8p" },
  { id: "clds7u2tu00hi7ko03c1k524z" },
  { id: "clds7u4g400hk7ko04qo9bh7u" },
  { id: "clds7u5z700hm7ko0qriprkno" },
  { id: "clds7u7ka00ho7ko0kyrxeov0" },
  { id: "clds7ucp200hs7ko0q3ogp798" },
  { id: "clds7uea400hu7ko0dpwagfz0" },
  { id: "clds7ufuv00hw7ko0w48ivfzv" },
  { id: "clds782fu002w7ko08uf8fd35" },
  { id: "clds7uj6j00hy7ko0bonf6gw8" },
  { id: "clds7ukre00i07ko0kgzw4lfa" },
  { id: "clds7uo8g00i27ko00efb0nlz" },
  { id: "clds7upqf00i47ko0q6ieeao1" },
  { id: "clds7ut1t00i67ko0epd0b8af" },
  { id: "clds7v1tv00i87ko01kx5rey0" },
  { id: "clds7v3bu00ia7ko0ky6d5xu1" },
  { id: "clds75sax000i7ko0pcaay9kb" },
  { id: "clds761xu000u7ko0bm7uuq12" },
  { id: "clds7u9ba00hq7ko00fhyzf1i" },
];

const vegsId = [
  { id: "clds7loa500da7ko0au0zeayo" },
  { id: "clds7lrls00dc7ko04p4r2t8y" },
  { id: "clds7fwv9009m7ko0a6vxfb7p" },
  { id: "clds7feay00987ko06rxvp4w7" },
  { id: "clds77txu002q7ko0w1u81yhs" },
  { id: "clds77vlp002s7ko0wy4u13oh" },
  { id: "clds76bl000167ko0u0zw0c4a" },
  { id: "clds77ne2002i7ko01i3nnvp9" },
  { id: "clds77lst002g7ko06s76w0zg" },
  { id: "clds783z4002y7ko0itfktw3w" },
  { id: "clds785k600307ko0pt2kax4t" },
  { id: "clds7875200327ko0cgilng50" },
  { id: "clds788q300347ko00s5kw1kg" },
  { id: "clds78c1j00367ko0td77wtjw" },
  { id: "clds78k65003e7ko0gojqctfh" },
  { id: "clds78nc3003i7ko0o0x8jl7z" },
  { id: "clds78p0a003k7ko0u8ljh3zs" },
  { id: "clds78qky003m7ko0xrfjkwh4" },
  { id: "clds78lr9003g7ko0tqdw4ado" },
  { id: "clds78vbf003s7ko0tibb7m0e" },
  { id: "clds78s5k003o7ko0ij6ene5v" },
  { id: "clds78wz9003u7ko0v84yotud" },
  { id: "clds7a3sv004g7ko03hnkiq5b" },
  { id: "clds7a6w1004k7ko0t3nv50cd" },
  { id: "clds7aa1d004o7ko076qp21av" },
  { id: "clds7adgb004q7ko0mhnnamql" },
  { id: "clds7aglh004u7ko0ny3h2x96" },
  { id: "clds7ai6n004w7ko08b55squq" },
  { id: "clds7bbho005u7ko06ebd5ucr" },
  { id: "clds7bgpk005w7ko034bufcca" },
  { id: "clds7bvek006c7ko0ooavvrgy" },
  { id: "clds7bwzp006e7ko05x8nx89p" },
  { id: "clds7bykl006g7ko0bodtlznp" },
  { id: "clds7c05a006i7ko0cfcx3rec" },
  { id: "clds7c1qb006k7ko0wgqllxv5" },
  { id: "clds7c3gn006m7ko08u86dk4a" },
  { id: "clds7c502006o7ko0ril7tz6n" },
  { id: "clds7c6jv006q7ko0djeibcnv" },
  { id: "clds7c836006s7ko0mauo5wps" },
  { id: "clds78tqd003q7ko0klczlf2t" },
  { id: "clds7ccvc006w7ko0t356sawe" },
  { id: "clds7a8gi004m7ko042kuoop3" },
  { id: "clds7e8ts008a7ko0qtjxbov9" },
  { id: "clds7eael008c7ko00ee8mo5i" },
  { id: "clds7efm8008e7ko01dh5sdit" },
  { id: "clds7a5be004i7ko0vru3y2ub" },
  { id: "clds7enra008m7ko09cyrzvua" },
  { id: "clds7epbz008o7ko087o39eog" },
  { id: "clds7esnj008s7ko0jmcnlusm" },
  { id: "clds7eu8h008u7ko0tw4720sg" },
  { id: "clds7evtc008w7ko0bs9x777b" },
  { id: "clds7f7l100947ko0bervtvqz" },
  { id: "clds7fcq500967ko0v53qitjn" },
  { id: "clds7b89b005q7ko0vw96kuqi" },
  { id: "clds7f49g00927ko0prfl78lm" },
  { id: "clds7iz0s00bg7ko0m49ww1df" },
  { id: "clds7j2c200bi7ko0dkhe6tfr" },
  { id: "clds7ljdq00d67ko0ka2i17wn" },
  { id: "clds7koho00ca7ko0ecm01fhx" },
  { id: "clds7kq2i00cc7ko0zuyg9cmw" },
  { id: "clds7krn500ce7ko04e4mdbqn" },
  { id: "clds7ktdx00cg7ko0e60i7dn2" },
  { id: "clds7kuyz00ci7ko0yef5bc45" },
  { id: "clds7kwjv00ck7ko06oe34ejs" },
  { id: "clds7ky4r00cm7ko0dghugsy1" },
  { id: "clds7kzpf00co7ko0siyvc2ho" },
  { id: "clds7l17r00cq7ko05v5yt0pt" },
  { id: "clds7l2vg00cs7ko0yw7go4fr" },
  { id: "clds7pej000em7ko0b5fcw7ck" },
  { id: "clds77kb0002e7ko0v3nmllni" },
  { id: "clds7rgn000fu7ko0rhslhtpw" },
  { id: "clds7ri8300fw7ko0gxonbank" },
  { id: "clds7nhgl00dy7ko0eldi3tlv" },
  { id: "clds7rqu200fy7ko0seia999l" },
  { id: "clds7rsez00g07ko0y6khnxww" },
  { id: "clds7rxmc00g27ko09h1j1fq0" },
  { id: "clds7rz7r00g47ko05moseyuc" },
  { id: "clds769xh00147ko0jzl8826o" },
  { id: "clds77sd6002o7ko0pic4fjsm" },
  { id: "clds7v6ni00ic7ko00a5hmm72" },
  { id: "clds7v88700ie7ko0b6yk8lbp" },
  { id: "clds7v9z500ig7ko05zxy2kcz" },
  { id: "clds7vbjp00ii7ko0ayb88ovh" },
  { id: "clds7er32008q7ko0157alb5f" },
  { id: "clds7vev200ik7ko0k46f0jxw" },
  { id: "clds7vgfx00im7ko0yo5mf604" },
  { id: "clds763iq000w7ko00m2j3opm" },
];

export const categoryIds: { [key: string]: { id: string }[] } = {
  flowers: flowerIds,
  fruits: fruitsId,
  lawns: lawnsId,
  trees: treesId,
  vegs: vegsId,
};
