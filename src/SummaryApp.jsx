// src/SummaryApp.jsx
import { useState } from 'react';

export default function SummaryApp() {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSummarize = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://1i1uiey5s0.execute-api.ap-northeast-1.amazonaws.com/prod/summary',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        }
      )
      const data = await res.json()
      setSummary(data.summary || data.error)
    } catch (err) {
      setSummary('要約に失敗しました。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center items-start py-16 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* タイトルエリア */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide text-gray-800 mb-2">
            AI要約ツール
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            長い文章も貼り付けるだけで、AIがサクッと要約します！
          </p>
        </div>

        {/* テキストエリア */}
        <textarea
          className="
            w-full 
            h-48 
            px-4 py-3 
            border border-gray-300 
            rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-400 
            resize-none 
            text-gray-700 
            placeholder-gray-400 
            shadow-sm
            transition-all
            mb-6
          "
          placeholder="ここに要約したい文章を入力してください…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* ボタン */}
        <button
          className="
            w-full 
            py-3 
            bg-indigo-600 
            hover:bg-indigo-700 
            active:bg-indigo-800 
            text-white 
            font-semibold 
            text-lg 
            rounded-lg 
            shadow-md 
            transform hover:scale-[1.02] 
            transition 
            disabled:opacity-50 disabled:cursor-not-allowed 
            mb-8
          "
          onClick={handleSummarize}
          disabled={loading || !text.trim()}
        >
          {loading ? '要約中…' : '要約する'}
        </button>

        {/* 要約結果 */}
        {summary && (
          <div
            className="
              bg-gray-50 
              border border-gray-200 
              rounded-lg 
              p-6 
              shadow-inner
              text-gray-800 
              whitespace-pre-wrap 
              leading-relaxed 
              "
            aria-live="polite"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
              要約結果
            </h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </main>
  )
}
