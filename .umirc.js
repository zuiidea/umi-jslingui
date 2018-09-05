export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
  ],
  extraBabelPresets: ['@lingui/babel-preset-react'],
}
