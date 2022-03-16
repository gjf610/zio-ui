module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest', {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript' // 新增
        ],
        plugins: ['@vue/babel-plugin-jsx'],
      }
    ]
  },
};