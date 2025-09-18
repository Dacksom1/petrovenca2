'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([])

  useEffect(() => {
    // Animate progress bar
    setTimeout(() => {
      setProgress(50)
    }, 500)

    // Create particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${Math.random() * 10 + 10}s`
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 via-red-600 to-red-500 relative overflow-hidden">
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-black/60 rounded-full shadow-lg shadow-black/80 animate-float"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-5">
        <div className="text-center max-w-2xl w-full">
          {/* Logo */}
          <div className="mb-10 animate-fadeInUp">
            <div className="relative inline-block">
              <Image
                src="/petrovenca grande1.png"
                alt="Petrovenca Logo"
                width={280}
                height={200}
                className="max-w-[280px] h-auto drop-shadow-[0_0_30px_rgba(255,255,255,1)] drop-shadow-[0_0_60px_rgba(192,0,0,0.8)] drop-shadow-[0_0_90px_rgba(255,0,0,0.4)] drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:drop-shadow-[0_0_40px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_80px_rgba(192,0,0,1)] hover:drop-shadow-[0_0_120px_rgba(255,0,0,0.6)]"
              />
              {/* Pulsing background effect */}
              <div className="absolute inset-0 bg-gradient-radial from-red-500/20 to-transparent rounded-full animate-pulse-slow scale-110 -z-10" />
            </div>
          </div>

          {/* Main Content Panel */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-600 rounded-3xl p-16 shadow-2xl shadow-black/60 relative backdrop-blur-sm">
            {/* Subtle red overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 rounded-3xl pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_30px_rgba(192,0,0,0.6)] animate-fadeInUp">
                Página en Construcción
              </h1>
              
              <p className="text-xl text-gray-200 mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] animate-fadeInUp">
                Trabajando para brindarte la mejor experiencia
              </p>

              {/* Progress Bar */}
              <div className="mb-6 animate-fadeInUp">
                <div className="w-full h-2 bg-gray-700 border border-gray-500 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-800 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
                <p className="text-gray-300 mt-3 text-sm font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                  {progress}% Completado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}