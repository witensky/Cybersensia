import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export function AnimatedShield3D() {
  return (
    <div className="relative h-[400px] w-full max-w-md mx-auto">
      {/* Main Shield - Center */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ 
          scale: 1, 
          rotateY: 0,
          y: [0, -10, 0],
        }}
        transition={{
          scale: { duration: 0.8, ease: "easeOut" },
          rotateY: { duration: 1, ease: "easeOut" },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-48 w-48">
          {/* Shield glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main shield body */}
          <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-500 p-1 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Shield className="h-24 w-24 text-cyan-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Lock - Top Right */}
      <motion.div
        className="absolute right-8 top-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{
          opacity: { delay: 0.3, duration: 0.5 },
          x: { delay: 0.3, duration: 0.5 },
          y: { 
            delay: 1,
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          },
          rotate: {
            delay: 1,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 backdrop-blur-sm border border-green-500/30">
          <Lock className="h-8 w-8 text-green-400" />
        </div>
      </motion.div>

      {/* Floating Eye - Bottom Left */}
      <motion.div
        className="absolute bottom-16 left-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -12, 0],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{
          opacity: { delay: 0.5, duration: 0.5 },
          x: { delay: 0.5, duration: 0.5 },
          y: { 
            delay: 1.2,
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          },
          rotate: {
            delay: 1.2,
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 backdrop-blur-sm border border-purple-500/30">
          <Eye className="h-8 w-8 text-purple-400" />
        </div>
      </motion.div>

      {/* Floating Alert - Top Left */}
      <motion.div
        className="absolute left-12 top-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { delay: 0.7, duration: 0.5 },
          scale: { delay: 0.7, duration: 0.5, type: "spring" },
          y: { 
            delay: 1.5,
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
      >
        <motion.div 
          className="rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 backdrop-blur-sm border border-red-500/30"
          animate={{
            boxShadow: [
              "0 0 20px rgba(239, 68, 68, 0.3)",
              "0 0 30px rgba(239, 68, 68, 0.5)",
              "0 0 20px rgba(239, 68, 68, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </motion.div>
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-400"
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            rotate: 360,
            x: Math.cos((i / 8) * Math.PI * 2) * 120,
            y: Math.sin((i / 8) * Math.PI * 2) * 120,
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            },
            x: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            },
            y: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <motion.line
          x1="50%"
          y1="50%"
          x2="70%"
          y2="20%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="60%"
          stroke="url(#gradient2)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
