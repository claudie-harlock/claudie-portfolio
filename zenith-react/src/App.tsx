import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans">
      {/* ASCII Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03] z-0">
        <pre className="text-[10px] leading-tight text-emerald-500 whitespace-pre">
          {Array(20).fill('△ ZENITH △ ZENITH △ ZENITH △ ZENITH △ ZENITH △ ZENITH △ ZENITH △ ZENITH △\n').join('')}
        </pre>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-emerald-400 text-2xl">△</span>
            <span>Zenith</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#creators" className="hover:text-white transition-colors">Creators</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Log in</a>
            <motion.a 
              href="#" 
              className="px-4 py-2 bg-emerald-500 text-black text-sm font-medium rounded-lg hover:bg-emerald-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting creators
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sell globally,<br />
            <span className="text-emerald-400 italic font-serif">without the paperwork.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            사업자 등록 없이 전 세계에 판매하세요.<br />
            Zenith가 결제, 세금, 법률을 모두 처리합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="#" 
              className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start selling free →
            </motion.a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-lg">
              See how it works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex items-center justify-center gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <div className="text-3xl font-bold text-emerald-400">₩0</div>
              <div className="text-sm text-white/40">upfront</div>
            </div>
            <div className="text-white/20">·</div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">5min</div>
              <div className="text-sm text-white/40">to launch</div>
            </div>
            <div className="text-white/20">·</div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">195+</div>
              <div className="text-sm text-white/40">countries</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need to <span className="text-emerald-400">sell online</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '💳',
                title: 'One-click payments',
                desc: '카드, 계좌이체, 간편결제 모두 지원. 전 세계 어디서든 결제 가능.'
              },
              {
                icon: '📊',
                title: 'Real-time analytics',
                desc: '판매 현황을 실시간으로 확인. 데이터 기반 의사결정.'
              },
              {
                icon: '🔒',
                title: 'Enterprise security',
                desc: 'PCI DSS 인증. 업계 최고 수준의 보안으로 안심 거래.'
              },
              {
                icon: '🌍',
                title: 'Global reach',
                desc: '195개국 이상 지원. 자동 환율 변환 및 현지화.'
              },
              {
                icon: '⚡',
                title: 'Instant payouts',
                desc: '판매 대금 즉시 정산. 복잡한 절차 없이.'
              },
              {
                icon: '🤖',
                title: 'AI-powered',
                desc: 'MCP 네이티브 지원. AI 에이전트와 완벽 연동.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p 
            className="text-white/60 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            월 고정 비용 없음. 판매할 때만 수수료.
          </motion.p>

          <motion.div 
            className="p-8 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl font-bold mb-2">
              <span className="text-emerald-400">5%</span>
              <span className="text-lg text-white/60 font-normal"> + 결제수수료</span>
            </div>
            <p className="text-white/60 mb-8">거래당. 원천징수 3.3% 포함.</p>
            
            <motion.a 
              href="#" 
              className="inline-block px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              무료로 시작하기
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/40">
            <span className="text-emerald-400">△</span>
            <span>Zenith</span>
            <span>© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
