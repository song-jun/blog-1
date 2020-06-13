// 自动推送站点资源到百度, 仅在生产环境安装推送代码，以免造成多域名重复推送问题
if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
  // 如下为从站长平台复制的代码
  (function() {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  })();
}
