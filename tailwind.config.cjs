// tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{html,svelte,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulseColor: {
          '0%, 100%': { backgroundColor: '#AECB35' }, // amarillo
          '50%': { backgroundColor: '#0A6644' }       // verde oscuro
        },
        spin3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        fallRotate: {  // 👈 OJO: keyframes deben estar aquí
          '0%': { opacity: '0', transform: 'translateY(-50px) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0)' },
        },
      },
      animation: {
        'color-pulse': 'pulseColor 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-3d': 'spin3d 3s linear infinite',
        'fall-rotate': 'fallRotate 1s ease-out forwards', // 👈 aquí debe coincidir con keyframes
      },
      colors: {
        amarillo: '#AECB35',
        verde: '#0A6644',
        verdeclaro: '#C8FF96',
        verdeclaro2: '#64C864',
        verdeclaro3: '#326432',
      }
    },
  },
}
