import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const flow = {
  welcome: {
    message: 'Welcome to Phoenux Studio. How can we help you today?',
    options: [
      { label: 'Hire us', next: 'hire' },
      { label: 'View work', next: 'viewWork' },
      { label: 'Ask a question', next: 'question' },
    ],
  },
  hire: {
    message: 'Perfect. Share your email and we will contact you with a premium project brief.',
    inputPlaceholder: 'your@email.com',
    inputType: 'email',
    next: 'thanks',
  },
  viewWork: {
    message: 'Our best work is ready when you are. We can send a curated case study or let you explore the portfolio.',
    options: [
      { label: 'Send me a sample', next: 'emailRequest' },
      { label: 'I want to browse', next: 'browse' },
    ],
  },
  emailRequest: {
    message: 'Leave your email and we will send a subtle, curated portfolio preview.',
    inputPlaceholder: 'your@email.com',
    inputType: 'email',
    next: 'thanks',
  },
  browse: {
    message: 'Excellent. Scroll the page or return to the top menu to explore our latest digital design narratives.',
    options: [
      { label: 'Back to start', next: 'welcome' },
    ],
  },
  question: {
    message: 'Tell us what you need and we will suggest the best creative path.',
    inputPlaceholder: 'I need a brand refresh…',
    inputType: 'text',
    next: 'thanks',
  },
  thanks: {
    message: 'Thank you. We saved your note locally and will follow up with a tailored response. Ready for anything else?',
    options: [
      { label: 'Start again', next: 'welcome' },
      { label: 'Close chat', next: 'close' },
    ],
  },
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [stepKey, setStepKey] = useState('welcome')
  const [inputValue, setInputValue] = useState('')
  const [history, setHistory] = useState([])
  const [capturedEmail, setCapturedEmail] = useState('')

  const currentStep = flow[stepKey] || flow.welcome

  const appendMessage = (type, text) => {
    setHistory((prev) => [...prev, { id: prev.length + 1, type, text }])
  }

  const handleOption = (next, label) => {
    appendMessage('user', label)
    if (next === 'close') {
      setIsOpen(false)
      return
    }
    setStepKey(next)
    appendMessage('bot', flow[next]?.message || flow.welcome.message)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanValue = inputValue?.trim()
    if (!cleanValue) return

    appendMessage('user', cleanValue)
    setInputValue('')

    if (currentStep.inputType === 'email') {
      setCapturedEmail(cleanValue)
    }

    const nextKey = currentStep.next || 'thanks'
    setStepKey(nextKey)
    appendMessage('bot', flow[nextKey]?.message || flow.welcome.message)
  }

  const startChat = () => {
    setIsOpen(true)
    setStepKey('welcome')
    setHistory([{ id: 1, type: 'bot', text: flow.welcome.message }])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 text-studioDark">
      <div className="hidden sm:block">
        <div className="pointer-events-none absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-studioDark/5 blur-2xl" />
      </div>

      {isOpen ? (
        <div className="w-[min(360px,calc(100vw-2rem))] rounded-[2rem] border border-studioDark/10 bg-cream-100/95 shadow-[0_40px_120px_-40px_rgba(30,27,24,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between rounded-t-[2rem] bg-cream-50 px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-studioDark/90">
            <span>Studio chat</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-studioDark/10 bg-white text-studioDark transition hover:border-studioDark/20"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[340px] space-y-4 overflow-y-auto px-5 py-4 text-sm leading-6 text-studioDark/85">
            {history?.map((message) => (
              <div
                key={message.id}
                className={`max-w-[92%] ${message.type === 'bot' ? 'rounded-[1.5rem] bg-white/90 px-4 py-3 text-studioDark shadow-sm' : 'ml-auto rounded-[1.5rem] bg-studioDark/5 px-4 py-3 text-studioDark/95'}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t border-studioDark/10 px-5 py-4 bg-cream-50 rounded-b-[2rem]">
            {currentStep.options ? (
              <div className="grid gap-3">
                {currentStep.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleOption(option.next, option.label)}
                    className="rounded-3xl border border-studioDark/10 bg-white px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] text-studioDark transition hover:border-studioDark/20 hover:bg-cream-50"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label className="sr-only">Chat input</label>
                <input
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  type={currentStep.inputType || 'text'}
                  placeholder={currentStep.inputPlaceholder || 'Write a message...'}
                  className="w-full rounded-3xl border border-studioDark/10 bg-white/95 px-4 py-3 text-sm text-studioDark outline-none transition focus:border-studioDark/30 focus:ring-2 focus:ring-studioDark/10"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-3xl bg-studioDark px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream-50 transition hover:bg-studioDark/90"
                >
                  Send <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
            {capturedEmail ? (
              <div className="rounded-3xl bg-cream-50 px-4 py-3 text-xs text-studioDark/75">
                Captured email: <span className="font-semibold text-studioDark">{capturedEmail}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={startChat}
          className="inline-flex h-14 items-center gap-3 rounded-full border border-studioDark/10 bg-cream-50 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-studioDark shadow-lg shadow-studioDark/5 transition hover:border-studioDark/20 hover:bg-white"
        >
          <MessageCircle className="h-5 w-5" />
          Chat with us
        </button>
      )}
    </div>
  )
}
