/** @type {import('next').NextConfig} */
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  reactStrictMode: true,
  //  security config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              //  TODO - see why below takes content and style away from page
              // defaultSrc: ["'self'"],
              // styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'"],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: 'same-origin',
        }),
      },
    ];
  },
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.output.crossOriginLoading = 'anonymous';
    config.plugins.push(
      new SubresourceIntegrityPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        // enabled: 'auto' means only in production
        enabled: 'auto',
      }),
    );

    return config;
  },
};
