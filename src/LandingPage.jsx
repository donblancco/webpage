import { useEffect } from 'react'

export default function LandingPage() {
  useEffect(() => {
    // 画像の遅延読み込み設定
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))

    return () => {
      images.forEach(img => imageObserver.unobserve(img))
    }
  }, [])

  return (
    <main className="font-sans" style={{ color: '#3b6754', background: '#e8ebf1' }}>
      {/* ヒーローセクション */}
      <section
        className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: 'url("/img/header-tech-grow.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(76, 130, 107, 0.4)' }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-xl">
            夫婦エンジニアによる<br className="hidden md:block" />システム開発・MVP開発
          </h1>
          <p className="text-xl mb-8 text-white drop-shadow-lg max-w-3xl">
            フルスタック開発からクラウド移行まで、<br className="hidden md:block" />
            10年の現場経験でアイデアを最速リリース
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded shadow hover:opacity-90 transition"
            style={{ background: '#fee30a', color: '#3b6754' }}
            aria-label="30分の無料相談を申し込む"
          >
            30 分の無料相談
          </a>
        </div>
      </section>

      {/* 私たちについて */}
      <section id="about" className="py-20 px-6 md:px-16 bg-white" style={{ background: '#e8ebf1' }}>
        <h2 className="text-3xl font-semibold text-center mb-10">私たちについて</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            alt="長嶋夫婦 - 約10年の現場経験を持つフルスタック夫婦エンジニア。優貴はクラウドインフラ構築とPM、遥香は業務自動化とUI/UXデザインを担当"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            src="/img/couple-photo.png"
            loading="lazy"
            width="400"
            height="300"
            decoding="async"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4c826b' }}>
              システム開発のプロフェッショナル
            </h3>
            <p className="leading-relaxed md:text-left">
              私たちは<strong>約 10 年の現場経験</strong>を持つフルスタック夫婦エンジニアです。<br />
              <strong>優貴</strong>：AWS・GCP等のクラウドインフラ構築、Django・Rails等のWeb開発、PM。<br />
              <strong>遥香</strong>：Python・GASによる業務自動化、データ分析、UI/UXデザイン。<br />
              小回りの利くユニットだからこそのスピード感と密なコミュニケーションで、<br />
              <strong>要件定義 → 設計 → 実装 → テスト → 運用</strong> まで一気通貫で伴走します。
            </p>
            <div className="mt-6 flex items-center justify-start space-x-2">
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.091-.647.349-1.087.634-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.68-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.697 1.028 1.589 1.028 2.68 0 3.842-2.337 4.687-4.566 4.935.359.309.679.918.679 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.481A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
              </svg>
              <a
                href="https://github.com/donblancco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-[var(--primary)]"
                style={{ color: '#3b6754' }}
              >
                GitHub: donblanco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: '#4c826b' }}>システム開発サービス</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
          MVP開発からレガシーシステムの現代化まで、<br className="hidden md:block" />
          フルスタック夫婦エンジニアが一気通貫でサポート
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'MVP伴走開発', desc: 'Django・Rails等でプロトタイプ構築、AWS・GCPへのCI/CD環境構築まで完全サポート' },
            { title: 'レガシーリプレース', desc: '古いPHPシステムをモダンなフレームワーク&クラウドへ安全に移行' },
            { title: '業務自動化開発', desc: 'Python・GAS等で定例作業を自動化、工数削減と品質向上を実現' },
            { title: 'API連携開発', desc: 'Slack・LINE・その他外部サービスとの連携システム構築' },
            { title: 'データ分析基盤', desc: 'Python・Pandas等で集計・可視化ダッシュボード構築、意思決定を支援' },
            { title: 'クラウド移行', desc: 'ECS・Lambda・Terraform等を活用したクラウドインフラ自動化' }
          ].map((service, idx) => (
            <article
              key={idx}
              className="shadow-lg border rounded-2xl p-6 flex flex-col h-full"
              style={{ borderColor: 'rgba(160, 177, 205, 0.333)' }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#4c826b' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed flex-grow">{service.desc}</p>
              <a
                href="#contact"
                className="mt-auto inline-block w-full text-center bg-[var(--accent)] hover:bg-opacity-90 text-[var(--primary-dark)] font-medium px-4 py-3 rounded transition"
                style={{ background: '#fee30a', color: '#3b6754' }}
                aria-label={`${service.title}について問い合わせる`}
              >
                お問い合わせ
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* 全体の流れ */}
      <section id="process" className="py-20 px-6 md:px-16 bg-white" style={{ background: '#e8ebf1' }}>
        <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: '#4c826b' }}>システム開発の流れ</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
          無料相談から運用まで、透明性の高いプロセスで進行
        </p>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['無料相談', '要件定義', '設計', '実装', 'テスト', 'リリース'].map((step, idx) => (
            <li
              key={idx}
              className="bg-white px-4 py-6 rounded-2xl shadow border text-center flex flex-col items-center"
              style={{ borderColor: 'rgba(160, 177, 205, 0.333)' }}
            >
              <span
                className="inline-block w-10 h-10 mb-3 rounded-full font-bold flex items-center justify-center"
                style={{ background: '#fee30a', color: '#3b6754' }}
                aria-hidden="true"
              >
                {idx + 1}
              </span>
              <p className="font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-white" style={{ background: '#e8ebf1' }}>
        <h2 className="text-3xl font-semibold text-center mb-8" style={{ color: '#4c826b' }}>お問い合わせ</h2>
        <p className="text-center mb-6">以下の Google フォームよりご連絡ください。</p>
        <div className="max-w-2xl mx-auto w-full aspect-video shadow-lg border" style={{ borderColor: 'rgba(160, 177, 205, 0.333)' }}>
          <iframe
            title="お問い合わせフォーム - システム開発に関するご相談"
            src="https://forms.gle/SDwXR5AtFBe6vVvK9"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            loading="lazy"
          >
            読み込んでいます…
          </iframe>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-6 text-center text-white text-sm" style={{ background: '#3b6754' }}>
        <p>© 2025 Yuki & Haruka Nagashima - どんぶらっこ</p>
      </footer>
    </main>
  )
}