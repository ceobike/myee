import React from "react";

export interface News {
  id: string;
  title: string;
  summary: string;
  date: string;
}

const NewsCard: React.FC<{ news: News; onDetail?: () => void }> = ({ news, onDetail }) => (
  <div className="rounded-lg border bg-white p-6 hover:shadow-lg transition flex flex-col">
    <div className="font-semibold mb-2">{news.title}</div>
    <div className="text-gray-400 flex-1 mb-3">{news.summary}</div>
    <div className="text-[#747c7c] text-xs mb-2">發布時間 · {news.date}</div>
    {onDetail && (
      <button className="px-3 py-1 rounded bg-[#dd0c1b] text-white text-xs hover:bg-red-700 transition self-start" onClick={onDetail}>詳情</button>
    )}
  </div>
);

export default NewsCard;
