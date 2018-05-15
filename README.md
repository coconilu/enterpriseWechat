# 企业微信API第三方

源码友好的，阅读门槛低
Promise编程风格，几乎所有API都会返回promise

API版本：2018.4.11

core：核心api，包括access-token管理
communication：通讯录，包括成员管理、部门管理、标签管理、邀请成员、异步批量接口、通讯录变更事件
outer-communication:外部通讯录，包括成员对外信息、获取企业客户列表、关联企业客户库
app-manage：应用管理，包括获取应用、设置应用、获取应用列表、自定义菜单
notification：消息推送，包括发送应用信息、接受消息与实践、发送消息到群聊会话
fodder-manage：素材管理
authentication：身份验证,包括网页授权登录、扫码授权登录
mobile-SDK：移动端SDK
OA-data：OA数据接口，包括获取打卡规则、获取打卡数据、获取审批数据
payment：企业支付
electronic-invoice：电子发票
third-api：第三方开放接口


## 身份验证
对于身份验证环节，说明一下网页授权登录和扫码授权登录的联系与区别。

网页授权登录指的是从企业微信终端（包括桌面版和手机版）打开的网页，可以获取成员的身份信息，实现免登录。

扫码授权登录指的是在各种平台的浏览器上打开的网页可以通过扫码授权的方式让网页获取成员的身份信息，实现免登录的另一种方式。

两种方式的区别是：
1. 网页授权登录的方式，员工访问的URL是一个由企业微信官方后台提供的链接：比如`https://open.weixin.qq.com/connect/oauth2/authorize?appid=CORPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&agentid=AGENTID&state=STATE#wechat_redirect`由企业微信官方后台验证相关信息后，会引导浏览器跳转到目标URL，也就是企业自己的网页应用，并携带了员工的相关信息，比如` redirect_uri?code=CODE&state=STATE`，可以通过code换取员工的userid，有了userid企业自己的网页应用便可以在后台获取员工的相关信息，并进行业务处理。
2. 扫码授权登录的方式，员工可以访问任何URL，只需要该URL网页上有一个二维码（该二维码可以通过官方的一个js库获取），员工扫码并授权后，浏览器会跳转到一个URL（由企业微信官方后台提供的链接），接下来的步骤基本跟网页授权登录是一样的了。

获取员工信息的时候，可以通过设置scope来获取基本信息或者敏感信息
![员工信息划分](https://p.qpic.cn/pic_wework/23479275/a1a780ad673ffee20722b8e791d5ef7bd2b3ad6cf8db197c/0)

## 素材管理