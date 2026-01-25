export const generateGreenParticles = () => [
  // 25 small particles (50%)
  ...Array.from({ length: 25 }).map(() => ({
    size: 1 + Math.random(),
    baseOpacity: 0.3 + Math.random() * 0.1,
    twinkleDelay: Math.random() * 3,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 10
  })),
  // 20 medium particles (40%)
  ...Array.from({ length: 20 }).map(() => ({
    size: 2 + Math.random() * 2,
    baseOpacity: 0.5 + Math.random() * 0.1,
    twinkleDelay: Math.random() * 3,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 10
  })),
  // 5 large particles (10%) - very bright!
  ...Array.from({ length: 5 }).map(() => ({
    size: 4 + Math.random() * 4,
    baseOpacity: 0.7 + Math.random() * 0.1,
    twinkleDelay: Math.random() * 3,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 10
  }))
];

export const generateWhiteParticles = () => Array.from({ length: 50 }).map(() => ({
  size: 1 + Math.random(),
  opacity: 0.1 + Math.random() * 0.1,
  left: Math.random() * 100,
  animationDelay: Math.random() * 30,
  animationDuration: 45 + Math.random() * 45,
  color: 'white'
}));
