const blacklist = require("./blacklist.json");
const startTime = new Date("2021-05-09 16:00:00 GMT");
function join(s) {
  return s
    .split(/\n/)
    .filter(Boolean)
    .map((v) => String.prototype.trim.call(v));
}
const tobeIdentified = [
  "hillsonziqiu",
  // "Xeraphinite",
  // "rjhot",
  "Forschers",
  "ssxgit",
  "sumukeio",
  "ziwh",
  "JasonQiu",
  "yeanli95",
  "yunli2015",
  "linearindep",
  "liandmin",
  "sunshineliu6",
  "Huzhixin00",
  "LeahLuo0903",
  "HackBL",
  "mozro0327",
  "liucy0417",
  "watermelonDrip",
  "wonderful1234",
  "SWUFEzyf",
  "suffocatingly0",
  "christ36",
  "evil-lin",
  "NchuYJ",
  "zc-githubs",
  "paopaohua",
  "Critsu",
  "Placeholder",
  "Levix",
  "newVincentFong",
  "cyaoyao",
  "cengjingeng",
  "hengyi666",
  "fzzfgbw",
  "Erika2001",
  "1998yyh",
  "LexieLiu01",
  "javanlu123",
  "chelseachen007",
  "yuris304",
  "fangyinghua",
  "fyyjyx-github",

  "littlesugarman",
  "LASIWan",
  "gitigor107",

  "DADAHUI",
  "yangjiahao106",
  "He1xin",

  "okbug",
  // "sichenguo",
  "zliu1413",
  "BeBraveBeCurious",
  "lzcyx",
  "suikataro",
  "464244812",
  "DIUDIU110",
  // "frostjsy",
  "DAXIAdaxia",
  "tongxw",
  "lingquan02",
  "taojin1992",
  "size-of",
  "ARe99s",
  "agentzzz",

  "longlonglu",
  "lanceli424",
  "Saberfish",
  "zyycode",

  "911gt5",
  "MangoJuicy",
  "yourspeace",

  "physicshi",
  "SeventeenCui",
  "KevinWorkSpace",
  "Cartie-ZhouMo",

  "fenglei110",

  "Kuroky-Chen",

  "liuhl06",
  "absent1353",
  "doubelejjyy",

  "andyyxw",

  "pkuphy",
  "zhangjihu0",
  "w-z-hub",
  "bmxbmx3",
  "Lizhao-Liu",

  "terrylijiayang",
  "shizukanaskytree",
  "taozi-taozi",
  "wanyongtao1988",

  "lzdFeiFei",

  "angusgenius",
  "lilyzhaoyilu",
  "FlorenceLLL",
  "zjsj",
  "andyyxw",
  "pkuphy",
  "zhangjihu0",
  "wz-hub",
  "bmxbmx3",
  "Lizhao-Liu ",
  "terrylijiayang",
  "shizukanaskytree",
  "taozi-taozi",
  "wanyongtao1988",
  "LzdFeiFei",
  "angusgenius",
  "lilyzhaoyilu",
  "ningali",
  "WIN0624",
  "Gjts",
  "CoreJa",
  "FontEndArt",
  "surahe",
  "flagyk5",
  "QiYang03101994",
  "cecilia-vu",
  "keepchasing",
  "Davont",
  "Jolins",
  "cicihou",
  "Yueqi-19",
  "Xeraphinite",
  "rfhklwt",
  "Liuqibaa",
  "Mvbbb",
  "nanwy",
  "zengwmFE",
  "XiaoY0324",
  "aouos",
  "15399618796",
  "LeiLeiW825",
  "CurrrryChen",
  "DoubleW2w",
  "yaofaqian",
  "fakerbaby",
  "ezrealcong",
  "PeopleWhoListenToStories",
  "heartinn",
  "XUHUIisxh",
  "peterolive",
  "bowlofnoodles",
  "coke420",
  "Forschers",
  "LeiLeiW825",
  "joriscai",
  "miqpalzm",
  "sitequ",
  "dorothyDing",
  "BraveSage",
  "edge-wzw",
  "dublue24",
  "Xyxy1722",
  "mystoryshine",
  ...join(`wangyi123456
  mittacy
  Nicenonecb
  LangqiZhao
  wangpengzhen
  falconruo
  mokinzhao
zhangyong-hub
125110072@qq.com
wsgouwan
johanazhu
HTian1997
Bochengwan
shuo0314
peacejoylove86
joe-the-plumber
QiuhaoLi
xiaotuanzi999
eachless
simplezhao
suukii
JohnVSD
AutumnDeSea
yulecc
devil-lin
dmlseeing
UCASHurui
naomiwufzz
dopufol
yinfenglin
wu529778790
15209356689
kofzhang
jerry9926
BryanMiracle
sichenguo
Endeavor-Gcl
Syan115
xiongyujie
qycoder
Hazelnuttt
S-T-D
wangzqnb
LS-King
gjm12345
yanjyumoso
YuanWenLai
linzeliang1222
MellonGuan
Size-of
oborc
Liuxy94
PearlCoastal
Daniel-Zheng
thisisandy
Yvonne1231-Wang
Gentlemancj
bolunzhang2021
superFlowerLiao
boy-new-2019
rufengnanren
minuet-red
jmaStella
caoyuyuyu
yolo-jane
xmlb88
Auto-SK
mengwwww
st2yang
kiritoyuan
a20170602
xixi-jiu
supermeohh
Nbambi
p76
melody789
HouHao1998
mxdpoqt
Talent-Rain
cyk1337
daidaidashixiong666
hannahliu-github
ImSingee
QiZhongdd
AmuroPeng
ShunzWu012
LiangZheCoder
SunStrongChina
jawn-ha
Serrust
Siomarry
q815101630
xuanaxuan
CruiseYuGH
yxq1997
sun-unc
jennny06
youyoumx
tipshal
jennny06
klaus0323
liuajingliu
AMANKB
Rainjoy66
zsjlovelike
renziao
threedayAAAAA
XinlingQiu
winterdogdog
xiaoyuhai
AnnabellHyx
luckyyangrun
Nina1031
tr0ublemaker
hyhz000
sumray
raoshuang
Ben-Lee95
YanFaFa
mm12344
a-enll
breadfruit
zhaowrhelen
prince805962788
shmilywh
JadeQi
xqmmy
zfaye
nweass
LambertCao
YuetongYu
kernelSue
RMsboy
ZiyangZ
baoqin87
RealDuxy
NealChristmas
zibinanhai
flashyy
ysy0707
luoluomo
mayu0007
caimaoy
CelesteXiong
maqianxiong
mosihan
dpgirl
jz1433
Panruihua
theonebemine 
Moin-Jer
Peg-008
Dark-volute
wangyifan2018
ninghuang456
jueran
52HzEcho
unclegem
feikerwu
x-joey
ChampionNeverTurnBack
zbqnb
ZZWHU
kendj-staff
scarydemon2
JianXinyu
zeningc
syymo
Christina-Soda
DANG-PingBo
terryxing
liuyangqiQAQ
Tomtao626
jimengchao
lsxlsxxslxsl
kelh93
Epic-lu
lvhaohua
ThreeGold-yxh
7971128
zhengxinshuo
for123s
HaoOneBin
learnprogram2
BUBBLEbubbleBUBBLEbubble
jz1433
sszqdz
brodxie
Jackielj
SunStrongChina
vincentLW
for123jth
Jenny08
rjoudrey
lujiaoa
a1285771357
MarsPen
MASIJUN99
jsyxiaoba
pingyuoo
koihoo
zhajiahe
29728
maggiexie00
clairexia123
yamftod
RigoYao
yiwchen
bugMarker
wlsqhydfy
fdy696
seyvoue
tuntuncat
guangsizhongbin
kbfx1234
wlsqhydfy
czwLoveCode
hamish66889
NorthSeacoder`),
];

const userList = [
  {
    login: "azl397985856",
  },
].concat(
  tobeIdentified.map((name) => ({
    login: name,
  }))
);

const leetcodeConfig = {
  baseUrl: "https://leetcode-cn.com",
  submitUrl: "https://leetcode-cn.com/problems/$slug/submit/",
  loginUrl: "https://leetcode-cn.com/accounts/login/",
  _91UsernameCookieName: "login", // 在91网站中存lc用户名的cookie的键名
  _91PwdCookieName: "password", // 在91网站中存lc密码的cookie的键名
  lcSeesionCookieName: "LEETCODE_SESSION", // lc存seesionid的 cookie键名
  lcCsrftokenCookieName: "csrftoken", // lc存csrf的 cookie键名
};

module.exports = {
  leetcodeConfig,
  owner: "leetcode-pp",
  repo: "91alg-4",
  startTime: startTime.getTime(),
  secret: process.env.secret,
  clientId: "c16b80e7b58a5a007157",
  db: userList.reduce((acc, curr) => {
    if (blacklist.includes(curr.login)) return acc;
    acc[curr.login] = curr;
    return acc;
  }, {}),
};
