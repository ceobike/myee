import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initData: FormData = { name: "", phone: "", email: "", message: "" };

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initData);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  function validate(f: FormData) {
    if (!f.name.trim() || !f.phone.trim() || !f.email.trim()) {
      return "請填寫姓名、電話與郵箱";
    }
    if (!/^\S+@\S+\.\S+$/.test(f.email)) {
      return "郵箱格式有誤";
    }
    return "";
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate(form);
    if (err) {
      setError(err);
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("提交成功，我們會盡快與您聯繫！");
    setForm(initData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-8 max-w-xl mx-auto grid gap-4"
      autoComplete="off"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          姓名 <span className="text-[#dd0c1b]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-[#dd0c1b]"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          聯繫電話 <span className="text-[#dd0c1b]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-[#dd0c1b]"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          郵箱 <span className="text-[#dd0c1b]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-[#dd0c1b]"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">留言內容</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border rounded px-3 py-2 resize-none focus:outline-none focus:border-[#dd0c1b]"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
      <button
        type="submit"
        className="px-8 py-2 rounded bg-[#dd0c1b] text-white font-semibold hover:bg-red-700 transition mt-4"
      >提交</button>
    </form>
  );
};

export default ContactForm;
