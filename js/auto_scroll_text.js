var binft = function (r) {
    function t() {
      return b[Math.floor(Math.random() * b.length)]
    }  
    function e() {
      return String.fromCharCode(94 * Math.random() + 33)
    }
    function n(r) {
      for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
        var l = document.createElement("span");
        l.textContent = e(), l.style.color = t(), n.appendChild(l)
      }
      return n
    }
    function i() {
      var t = o[c.skillI];
      c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }

    var l = "",
    o = ["《无可救药》 夏尔·波德莱尔", "一个观念，一个形式，一个存在，始于蓝天，", "跌进冥河，泥泞如铅，天之眼亦不能透视；","一个天使，鲁莽旅者，受到诱惑，喜欢畸形，", "淹没于骇人的噩梦，如游泳者挣扎拼搏，","阴郁焦灼，苦战一个","疯子一样不断歌唱、在黑暗中回环激荡、","巨大而雄伟的漩涡；","一个不幸的中邪人，为逃出爬虫的栖息地，","在他徒劳的摸索里，寻找钥匙，寻找光明；","一个没有灯的亡魂，身旁是一个无底洞，","又深又潮气味浓重，无遮无靠阶梯无尽，","粘滑的怪物警觉着，一双巨眼磷光闪闪，","照得什么也看不见，只剩下更黑的黑夜；","一艘困在极地的船，像落入水晶的陷阱，","哪条海峡命中注定，让它进入这座牢监？","——画面完美，象征明确，这无可救药的命运","让人想到，魔鬼之君，无论做啥总是出色！","忧郁诚挚的关照中，心变成自己的明镜！","真理之井，既黑且明，有苍白的星辰颤动，","有地狱之灯在讥刺，有火炬魔鬼般妖娆，","有独特的慰籍和荣耀，","——这就是那恶的意识"].map(function (r) {
    return r + ""
    }),
    a = 2,
    g = 1,
    s = 5,
    d = 75,
    b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
    c = {
      text: "",
      prefixP: -s,
      skillI: 0,
      skillP: 0,
      direction: "forward",
      delay: a,
      step: g
    };
    i()
};

binft(document.getElementById('binft'));
