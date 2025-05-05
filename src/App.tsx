import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import clsx from "clsx";

function Header() {
  return (
    <header className="bg-[#16161b] h-16 flex items-center justify-between px-8">
      <div className="flex items-center">
        <img src="https://ext.same-assets.com/3813459479/1079158493.png" alt="LIMYEE Logo" className="h-8" />
      </div>
      <nav className="flex gap-8 text-white text-sm">
        <Link to="/" className="hover:text-[#dd0c1b]">首頁</Link>
        <Link to="/about" className="hover:text-[#dd0c1b]">關於我們</Link>
        <Link to="/products" className="hover:text-[#dd0c1b]">產品中心</Link>
        <Link to="/solution" className="hover:text-[#dd0c1b]">解決方案</Link>
        <Link to="/news" className="hover:text-[#dd0c1b]">新聞中心</Link>
        <Link to="/service" className="hover:text-[#dd0c1b]">服務中心</Link>
        <Link to="/contact" className="hover:text-[#dd0c1b]">聯繫我們</Link>
        <span className="ml-6">🔍</span>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#16161b] py-10 text-white mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src="https://ext.same-assets.com/3813459479/1079158493.png" alt="LIMYEE logo" className="h-8 mb-3" />
          <div>0755-83650405</div>
          <div className="text-xs mt-3">深圳市福田區深南大道萬科金融中心A座</div>
        </div>
        <div className="grid grid-cols-3 gap-8 text-xs mt-8 md:mt-0">
          <div>
            <div className="font-bold mb-2">關於我們</div>
            <div className="text-gray-400">公司簡介</div>
            <div className="text-gray-400">發展歷程</div>
            <div className="text-gray-400">企業榮譽</div>
          </div>
          <div>
            <div className="font-bold mb-2">產品中心</div>
            <div className="text-gray-400">工業主板</div>
            <div className="text-gray-400">嵌入式主板</div>
            <div className="text-gray-400">平板電腦</div>
          </div>
          <div>
            <div className="font-bold mb-2">服務中心</div>
            <div className="text-gray-400">技術支持</div>
            <div className="text-gray-400">聯繫我們</div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 border-t border-[#2a2a32] pt-4 text-xs text-gray-500 text-center">
        Copyright © 2024 深圳市凌壹科技有限公司 | <a href="https://beian.miit.gov.cn/" className="underline">ICP16119867-1</a>
      </div>
    </footer>
  );
}

// 首頁主內容細化
function Home() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-[#16161b] to-[#29292f] flex items-center justify-center min-h-[320px] relative">
        <div className="text-white text-center py-16">
          <h1 className="font-black text-4xl md:text-5xl tracking-widest mb-3">專注工控主板 · 打造國產智造核心</h1>
          <p className="text-xl mb-8 text-[#dd0c1b] font-medium">凌壹科技——創新賦能 · 擁抱未來</p>
          <button className="px-8 py-3 rounded bg-[#dd0c1b] text-lg font-semibold hover:bg-red-800 shadow transition">了解更多</button>
        </div>
        {/* 搭配SVG點綴等元素可擴展 */}
      </section>
      {/* 優勢指標條 */}
      <section className="w-full bg-[#16161b] py-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center text-white text-center">
          {[{"指標":"上市時間","值":"13+年"},{"指標":"核心專利","值":"27件"},{"指標":"合作品牌","值":"80+"},{"指標":"出貨量","值":"1萬+"}].map((d, i) => (
            <div key={i} className="flex-1 min-w-[80px]">
              <div className="text-2xl font-bold mb-1">{d.值}</div>
              <div className="text-sm text-gray-300">{d.指標}</div>
            </div>
          ))}
        </div>
      </section>
      {/* 主業務 */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-[#16161b] flex items-center">
            <span className="w-2 h-6 bg-[#dd0c1b] mr-2 inline-block rounded-sm" /> 業務板塊
          </h2>
          <div className="mb-2 text-gray-500">賦能產業升級，專注國產x86板卡與嵌入式系統</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-6">
            {[1,2].map(j => (
              <div key={j} className="rounded-lg bg-[#19191f] text-white flex flex-col md:flex-row items-center hover:shadow-xl transition">
                <img src={`https://ext.same-assets.com/3813459479/3141711843.png`} alt="工業主板" className="w-full md:w-56 h-40 object-cover rounded-l-lg" />
                <div className="p-7 flex-1">
                  <div className="text-xl font-semibold">工業主板</div>
                  <div className="text-gray-400 mb-3">穩定可靠，定制靈活，適用多種工控場景</div>
                  <button className="px-4 py-2 rounded bg-[#dd0c1b] text-white text-sm hover:bg-red-700 transition">查看詳情</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 解決方案 */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 border-b">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-2 h-6 bg-[#dd0c1b] mr-2 inline-block rounded-sm" /> 解決方案
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['智慧零售','智能交通','醫療健康','金融自助'].map(s => (
              <div key={s} className="bg-white hover:shadow-lg border rounded-lg flex flex-col md:flex-row items-center">
                <img src="https://ext.same-assets.com/3813459479/1177579164.jpeg" alt={s} className="w-full md:w-64 h-40 object-cover rounded-l-lg" />
                <div className="p-6 flex-1">
                  <div className="text-lg font-semibold mb-2">{s}</div>
                  <div className="text-gray-500 mb-4">針對{s}行業定制嵌入式主板和系統方案，實現智慧變革。</div>
                  <button className="px-4 py-2 rounded border border-[#dd0c1b] text-[#dd0c1b] hover:bg-[#dd0c1b] hover:text-white transition">查看更多</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 公司簡介 */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src="https://ext.same-assets.com/3813459479/1668576495.jpeg" alt="公司簡介" className="w-full md:w-80 h-52 object-cover rounded shadow" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-[#16161b]">
              <span className="w-2 h-6 bg-[#dd0c1b] mr-2 inline-block rounded-sm" /> 公司簡介 <span className="text-[#dd0c1b]">中科凌壹</span>
            </h2>
            <p className="mb-5 text-gray-500 max-w-[38em]">凌壹科技是一家集研發、製造、銷售為一體的高新科技企業，專注於國產x86架構工業級主板、嵌入式方案和AI智能終端，產品廣泛應用於多個行業智慧升級。</p>
            <button className="px-5 py-2 rounded bg-[#dd0c1b] text-white hover:bg-red-700 transition">查看詳情</button>
          </div>
        </div>
      </section>
      {/* 新聞中心 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8 justify-between">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="w-2 h-6 bg-[#dd0c1b] mr-2 inline-block rounded-sm" /> 新聞中心
            </h2>
            <button className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">查看全部</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(k => (
              <div key={k} className="rounded-lg border bg-white p-6 hover:shadow-lg transition flex flex-col">
                <div className="font-semibold mb-2">新聞標題 {k}</div>
                <div className="text-gray-400 flex-1 mb-3">這裡可展示新聞摘要或內容預覽 ...</div>
                <div className="text-[#747c7c] text-xs">發布時間 · 2024-05-01</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// 關於我們二級與下屬三級範例
function About() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">關於我們</h1>
      <ul className="mb-6 flex gap-8">
        <li><Link className="text-[#dd0c1b] underline" to="company">公司簡介</Link></li>
        <li><Link to="history">發展歷程</Link></li>
        <li><Link to="honor">企業榮譽</Link></li>
        <li><Link to="culture">企業文化</Link></li>
      </ul>
      <Routes>
        <Route path="company" element={<AboutCompany />} />
        <Route path="history" element={<AboutHistory />} />
        <Route path="honor" element={<AboutHonor />} />
        <Route path="culture" element={<AboutCulture />} />
      </Routes>
    </div>
  );
}
function AboutCompany() {return <div><h2 className="text-xl font-bold mb-2">公司簡介</h2><p>公司簡介內容...</p></div>;}
function AboutHistory() {return <div><h2 className="text-xl font-bold mb-2">發展歷程</h2><p>發展歷程內容...</p></div>;}
function AboutHonor() {return <div><h2 className="text-xl font-bold mb-2">企業榮譽</h2><p>企業榮譽內容...</p></div>;}
function AboutCulture() {return <div><h2 className="text-xl font-bold mb-2">企業文化</h2><p>企業文化內容...</p></div>;}

// 產品中心 -- 二級與三級（詳情）
function Products() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">產品中心</h1>
      <ul className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        <li><Link className="block p-4 bg-white rounded shadow hover:bg-gray-100" to="1">產品 1</Link></li>
        <li><Link className="block p-4 bg-white rounded shadow hover:bg-gray-100" to="2">產品 2</Link></li>
        <li><Link className="block p-4 bg-white rounded shadow hover:bg-gray-100" to="3">產品 3</Link></li>
        <li><Link className="block p-4 bg-white rounded shadow hover:bg-gray-100" to="4">產品 4</Link></li>
      </ul>
      <Routes>
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
function ProductDetail() {
  return <div className="p-6 bg-gray-50 rounded"><h2 className="text-xl font-bold mb-2">產品詳情</h2><p>這裡展示產品詳情內容...</p></div>;
}

// 解決方案二級
function Solution() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">解決方案</h1>
      <p>解決方案頁內容...</p>
    </div>
  );
}

// 新聞中心二級及詳情
function News() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">新聞中心</h1>
      <ul className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <li><Link to="1" className="block p-4 bg-white rounded shadow hover:bg-gray-100">新聞標題 1</Link></li>
        <li><Link to="2" className="block p-4 bg-white rounded shadow hover:bg-gray-100">新聞標題 2</Link></li>
        <li><Link to="3" className="block p-4 bg-white rounded shadow hover:bg-gray-100">新聞標題 3</Link></li>
      </ul>
      <Routes>
        <Route path=":id" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}
function NewsDetail() {
  return <div className="p-6 bg-gray-50 rounded"><h2 className="text-xl font-bold mb-2">新聞詳情</h2><p>這裡展示新聞詳情內容...</p></div>;
}

// 服務中心
function Service() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">服務中心</h1>
      <p>服務中心頁內容...</p>
    </div>
  );
}
function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">聯繫我們</h1>
      <p>這裡是聯繫方式與表單佔位頁...</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#fbfbfb] min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
