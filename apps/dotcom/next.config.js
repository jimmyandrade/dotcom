// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 *
 */
const nextConfig = {
  images: {
    domains: [
      "1.bp.blogspot.com",
      "culturalizabh.com.br",
      "jimmyandrade.com",
      "palcopop.com",
      "scontent-gru2-2.xx.fbcdn.net",
      "ufmg.br"
    ],
  },
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
