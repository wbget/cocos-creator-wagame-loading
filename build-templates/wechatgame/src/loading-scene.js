
var scene = new cc.Scene();

var root = new cc.Node();
var canvas = root.addComponent(cc.Canvas);
root.parent = scene;

const node = new cc.Node();
node.y = -230;
const loading = node.addComponent(cc.Label);
loading.fontSize = 18;
node.parent = root;

const logo = new cc.Node();
logo.width = 384;
logo.height = 384;
const icon = logo.addComponent(cc.Sprite);
cc.loader.load('src/portrait.png', (err, texture) => {
  if (err) {
    console.log(err);
    return;
  }
  icon.spriteFrame = new cc.SpriteFrame(texture);
})
logo.parent = root;

let ln0 = new cc.Node();
ln0.y = -142;
ln0.color = cc.color('#EBDC32');
const label0 = ln0.addComponent(cc.Label);
label0.string = '乐趣值得分享';
label0.fontSize = 25;
label0.lineHeight = 25;
ln0.parent = logo;


let ln1 = new cc.Node();
ln1.y = -171;
ln1.color = cc.color('#EBDC32');
const label1 = ln1.addComponent(cc.Label);
label1.string = '西安趣分享';
label1.fontSize = 15;
label1.lineHeight = 15;
ln1.parent = logo;

exports = module.exports = scene;
exports.setLoading = (str) => loading.string = str;