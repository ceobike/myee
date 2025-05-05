import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect } from "react";

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center text-2xl text-muted-foreground">
    {title}
    <div className="mt-4 text-base text-gray-400">（此为占位页面，可补充/跳转）</div>
  </div>
);

function App() {
  useEffect(() => {
    document.body.classList.add("bg-[#fbfbfb]");
    return () => document.body.classList.remove("bg-[#fbfbfb]");
  }, []);

  return (
    <Router>
      {/* TODO: 导航栏、底部、右侧悬浮等全局元素将在后续实现 */}
      <Routes>
        <Route path="/" element={<PagePlaceholder title="首页 Home" />} />
        <Route path="/about" element={<PagePlaceholder title="关于我们 About" />} />
        <Route path="/about/history" element={<PagePlaceholder title="发展历程 History" />} />
        <Route path="/about/development" element={<PagePlaceholder title="企业发展 Development" />} />
        <Route path="/about/honor" element={<PagePlaceholder title="公司荣誉 Honor" />} />
        <Route path="/about/culture" element={<PagePlaceholder title="企业文化 Culture" />} />
        <Route path="/products" element={<PagePlaceholder title="产品中心 Products" />} />
        <Route path="/products/:id" element={<PagePlaceholder title="产品详情 Product Detail" />} />
        <Route path="/solution" element={<PagePlaceholder title="解决方案 Solutions" />} />
        <Route path="/solution/:id" element={<PagePlaceholder title="解决方案详情 Solution Detail" />} />
        <Route path="/news" element={<PagePlaceholder title="新闻中心 News" />} />
        <Route path="/news/:id" element={<PagePlaceholder title="新闻详情 News Detail" />} />
        <Route path="/service" element={<PagePlaceholder title="服务支持 Service" />} />
        <Route path="/service/technical" element={<PagePlaceholder title="技术服务 Technical Support" />} />
        <Route path="/service/aftersale" element={<PagePlaceholder title="售后服务 After-sale" />} />
        <Route path="/service/aftersale2" element={<PagePlaceholder title="售后支持2 After-sale 2" />} />
        <Route path="/contact" element={<PagePlaceholder title="联系我们 Contact" />} />
        <Route path="/contact/recruit" element={<PagePlaceholder title="招聘信息 Recruit" />} />
        {/* 默认未知页面重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
