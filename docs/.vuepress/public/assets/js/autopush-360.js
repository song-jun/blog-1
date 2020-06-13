// 自动推送站点资源到360, 仅在生产环境安装推送代码，以免造成多域名重复推送问题
if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
  // 如下为从站长平台复制的代码
  (function() {
    var src =
      "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
    document.write('<script src="' + src + '" id="sozz"></script>');
  })();
}
