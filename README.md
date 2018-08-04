# cocos-creator-wagame-loading

## 微信小游戏子包加载资源

原理：
原理很简单，就是在加载主场景之前，使用微信小游戏的接口，直接加载资源包。

## 使用方法:

**这里没有兼容分包代码，因为这个是临时用法，等之后官方更新更好的解决方案**

这里使用的 loading 和文字，请大家自行替换。

copy build-templates 文件夹 到你自己的项目根目录

然后修改 game.json 文件，我这里是分整个资源包

```
    "subpackages": [
        {
            "name": "res",
            "root": "res/raw-assets/"
        }
    ]
```

这里还兼容了 loading [官方教程](http://forum.cocos.com/t/topic/62296/34) 为了加载过程中，不至于黑屏。
