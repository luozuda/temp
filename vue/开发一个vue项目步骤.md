1.node官网下载安装node
查看node版本：
node -v   // v10.14.1
查看npm版本：
npm -v   // 6.5.0

2.安装vue-cli3.x(如果以前安装了2.x版本，使用npm install vue-cli -g删除后，再安装3.x版本)
安装vue-cli3.x：
npm install -g @vue/cli
查看vue-cli版本:
vue -V  3.5.3

3.新建vue项目
使用vue-cli3.x创建vue项目：
vue create project-name
或使用webpack创建vue项目：
vue init webpack project-name

4.在开发环境中运行vue项目(以package.json中的scripts中的配置为准)
使用vue-cli3.x创建的vue项目：
npm run serve
或使用webpack创建的vue项目：
npm run dev

5.打包成生产环境中运行的文件夹(以package.json中的scripts中的配置为准)
使用vue-cli3.x和webpack创建的vue项目都是使用
npm run build
运行上面的命令后，默认会生成dist文件夹，里面包括了index.html和静态资源