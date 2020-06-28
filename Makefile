# 发布到github
publish_to_github:
	./deploy.sh

# 发布: 先发布到github, 再发布到自己的服务器
publish: publish_to_github
	# 将静态文件引用地址改为github的cdn加速地址
	# find ./docs/.vuepress/dist -type f | xargs -I '{}' sed -i 's/\/assets/https:\/\/cdn.jsdelivr.net\/gh\/wangshibiaoFlytiger\/blog@gh-pages\/assets/g' {}
	# 上传程序到服务器
	scp -r ./docs/.vuepress/dist/* ntv_viyun_pro:/data/wangshibiao/blog/
