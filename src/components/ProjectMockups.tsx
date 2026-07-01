import type { ReactNode } from 'react'

function PhoneFrame({ children }: { children: ReactNode }) {
    return (
        <div className="relative mx-auto w-full max-w-[260px] aspect-[9/18.5] rounded-[2.25rem] border-[6px] border-[#0f1b3d] dark:border-[#fdf6f0] bg-[#fdf6f0] dark:bg-[#0f1b3d] overflow-hidden shadow-2xl shrink-0">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-[#0f1b3d] dark:bg-[#fdf6f0] z-10" />
            <div className="h-full w-full pt-8 px-3 pb-4 flex flex-col gap-2 text-[#0f1b3d] dark:text-[#fdf6f0]">
                {children}
            </div>
        </div>
    )
}

export function BidrTvMockup() {
    return (
        <PhoneFrame>
            <div className="flex items-center justify-between text-[10px] font-semibold">
                <span className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                </span>
                <span className="opacity-60">◉ 1.2k</span>
            </div>
            <div className="flex-1 rounded-xl bg-[#0f1b3d] dark:bg-black/40 flex items-center justify-center text-[10px] text-white/50">
                live stream
            </div>
            <div className="space-y-0.5 text-[9px] leading-tight opacity-80">
                <p><span className="font-semibold">fahad</span> nice piece! 🔥</p>
                <p><span className="font-semibold">sara_q</span> KD 420 going once...</p>
            </div>
            <div className="text-[9px]">
                <p className="font-semibold text-[10px]">Vintage Seiko Diver</p>
                <p className="opacity-60">Lot #214 · Kuwait City</p>
            </div>
            <div className="flex items-center justify-between border-t border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 pt-2">
                <div>
                    <p className="text-[8px] uppercase opacity-50">Bid</p>
                    <p className="text-sm font-bold">KD 420</p>
                </div>
                <p className="text-[10px] font-mono text-[#ff8a5b]">00:38</p>
            </div>
        </PhoneFrame>
    )
}

export function KooraQ8Mockup() {
    return (
        <PhoneFrame>
            <div className="flex items-center justify-between text-[11px] font-bold">
                <span>KooraQ8</span>
                <span className="bg-[#ff8a5b] text-white text-[8px] font-medium px-2 py-0.5 rounded-full">Kuwait City</span>
            </div>
            <div className="rounded-xl bg-emerald-500/80 h-20 flex flex-col items-center justify-center gap-1 relative">
                <div className="w-6 h-6 rounded-full border-2 border-white/70" />
                <div className="flex items-center gap-3 text-[8px] text-white font-medium">
                    <span className="flex flex-col items-center gap-0.5"><span className="w-3 h-3 rounded-full bg-emerald-200" />Falcons</span>
                    <span className="opacity-70">VS</span>
                    <span className="flex flex-col items-center gap-0.5"><span className="w-3 h-3 rounded-full bg-yellow-300" />Lions</span>
                </div>
            </div>
            <button className="bg-[#0f1b3d] dark:bg-[#fdf6f0] text-[#fdf6f0] dark:text-[#0f1b3d] text-[9px] font-semibold rounded-full py-1.5">
                Join match
            </button>
            <div className="space-y-1.5 mt-1">
                <div className="flex items-center justify-between text-[8px] border border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 rounded-lg px-2 py-1.5">
                    <span><span className="font-semibold">SAT</span> 5-a-side · Salmiya</span>
                    <span className="opacity-60">Open</span>
                </div>
                <div className="flex items-center justify-between text-[8px] border border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 rounded-lg px-2 py-1.5">
                    <span><span className="font-semibold">SUN</span> 7-a-side · Hawally</span>
                    <span className="opacity-60">Full</span>
                </div>
            </div>
        </PhoneFrame>
    )
}

export function AlltrueMockup() {
    const stories = [
        { name: 'you', color: 'bg-emerald-300' },
        { name: 'amira', color: 'bg-yellow-300' },
        { name: 'jonas', color: 'bg-pink-300' },
        { name: 'lena', color: 'bg-sky-300' },
    ]
    return (
        <PhoneFrame>
            <div className="flex items-center justify-between text-[11px] font-bold">
                <span>ALLTRUE</span>
                <span className="w-2 h-2 rounded-full bg-[#0f1b3d] dark:bg-[#fdf6f0]" />
            </div>
            <div className="flex items-center gap-2.5 mt-1">
                {stories.map((s) => (
                    <span key={s.name} className="flex flex-col items-center gap-1">
                        <span className={`w-6 h-6 rounded-full ${s.color}`} />
                        <span className="text-[7px] opacity-60">{s.name}</span>
                    </span>
                ))}
            </div>
            <div className="flex-1 rounded-xl bg-emerald-200 dark:bg-emerald-300/80 flex items-center justify-center text-[9px] text-[#0f1b3d]/60 mt-1">
                today's moment
            </div>
            <div className="flex items-center gap-3 text-[9px] opacity-70 pt-1">
                <span>♡ 248</span>
                <span>○ 34</span>
                <span>↑</span>
            </div>
        </PhoneFrame>
    )
}
