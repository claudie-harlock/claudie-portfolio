import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CreditCard, BarChart3, Shield, Zap, Globe, Bot } from 'lucide-react'

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax effect - video moves slower than scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.3, 0])

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0c]/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-xl font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="text-emerald-400 text-2xl"
              animate={{ 
                textShadow: ['0 0 20px rgba(16,185,129,0.5)', '0 0 40px rgba(16,185,129,0.8)', '0 0 20px rgba(16,185,129,0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              △
            </motion.span>
            <span>Zenith</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors relative"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors hidden sm:block">Log in</a>
            <motion.a 
              href="#" 
              className="px-4 py-2 bg-emerald-500 text-black text-sm font-medium rounded-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16,185,129,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started →</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen pt-40 pb-24 px-6 z-10 overflow-hidden">
        {/* Video Background - Hero only with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: videoY, scale: videoScale, opacity: videoOpacity }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/zenith-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient overlay - Hero only */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            한국 최초 MoR 결제 플랫폼
          </motion.div>

          {/* Title */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Accept payments
              </motion.span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 font-['Fraunces',serif] italic"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                without limits.
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/50 mb-12 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            사업자 등록 없이, 복잡한 설정 없이.<br />
            크리에이터를 위한 올인원 결제 솔루션.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href="#" 
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-semibold rounded-xl text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10">Start for free</span>
            </motion.a>
            <motion.a 
              href="#" 
              className="px-8 py-4 text-white/60 hover:text-white transition-colors text-lg flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Watch demo 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div 
            className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl max-w-2xl shadow-2xl shadow-emerald-500/10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ 
              boxShadow: '0 25px 50px -12px rgba(16,185,129,0.25)',
              borderColor: 'rgba(16,185,129,0.3)'
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
              <div className="flex gap-2">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <span className="text-xs text-white/30 font-['JetBrains_Mono',monospace] ml-2">zenith-cli</span>
            </div>
            <div className="p-5 font-['JetBrains_Mono',monospace] text-sm space-y-3">
              <TerminalLine command="zenith init my-store" delay={0.8} />
              <TerminalOutput text="✓ Store created successfully" delay={1.2} />
              <TerminalLine command='zenith product add "Premium Template"' delay={1.6} />
              <TerminalOutput text="✓ Product added: ₩49,000" delay={2.0} />
              <TerminalLine command="zenith publish" delay={2.4} />
              <TerminalOutput text="✓ Live at zenith.to/my-store" delay={2.8} highlight />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { value: '₩0', label: 'upfront cost' },
              { value: '5분', label: 'to launch' },
              { value: '195+', label: 'countries' },
              { value: '24/7', label: 'support' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  borderColor: 'rgba(16,185,129,0.3)',
                  backgroundColor: 'rgba(16,185,129,0.05)'
                }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-emerald-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/40 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-white/50 text-lg">크리에이터 비즈니스를 위한 완벽한 인프라</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: 'Global Payments', desc: '카드, 계좌이체, 간편결제. 전 세계 어디서든.', color: 'from-emerald-400 to-cyan-400' },
              { icon: BarChart3, title: 'Analytics', desc: '실시간 판매 현황과 인사이트.', color: 'from-cyan-400 to-blue-400' },
              { icon: Shield, title: 'Security', desc: 'PCI DSS 인증. 엔터프라이즈급 보안.', color: 'from-blue-400 to-purple-400' },
              { icon: Zap, title: 'Instant Payouts', desc: '판매 대금 즉시 정산.', color: 'from-purple-400 to-pink-400' },
              { icon: Globe, title: '195+ Countries', desc: '자동 환율 변환 및 현지화.', color: 'from-pink-400 to-orange-400' },
              { icon: Bot, title: 'AI Ready', desc: 'MCP 네이티브. AI 에이전트 연동.', color: 'from-orange-400 to-emerald-400' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -10,
                  borderColor: 'rgba(16,185,129,0.4)',
                  boxShadow: '0 20px 40px -20px rgba(16,185,129,0.3)'
                }}
              >
                <motion.div 
                  className={`w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] relative`}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0c] flex items-center justify-center">
                    <feature.icon size={26} strokeWidth={1.5} className="text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl -z-10`} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple pricing
          </motion.h2>
          <motion.p 
            className="text-white/50 mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            월 고정 비용 없음. 판매할 때만 수수료.
          </motion.p>

          <motion.div 
            className="p-12 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: '0 0 80px rgba(16,185,129,0.2)' }}
          >
            {/* Animated glow line */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div 
              className="text-8xl font-bold mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">5%</span>
            </motion.div>
            <p className="text-white/50 mb-10 text-lg">거래당 수수료 · 원천징수 3.3% 포함</p>
            
            <motion.a 
              href="#" 
              className="inline-block px-12 py-5 bg-white text-black font-semibold rounded-xl text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              무료로 시작하기
            </motion.a>
            
            <p className="text-white/30 text-sm mt-8">신용카드 불필요 · 언제든 취소 가능</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/30">
            <span className="text-emerald-400">△</span>
            <span>Zenith</span>
            <span>© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Terminal components with typing animation
const TerminalLine = ({ command, delay }: { command: string; delay: number }) => (
  <motion.div 
    className="flex gap-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <span className="text-emerald-400">$</span>
    <span className="text-white/80">{command}</span>
  </motion.div>
)

const TerminalOutput = ({ text, delay, highlight }: { text: string; delay: number; highlight?: boolean }) => (
  <motion.div 
    className={`pl-4 ${highlight ? 'text-emerald-400' : 'text-white/40'}`}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
  >
    {text}
  </motion.div>
)

export default App
