/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ssoCdsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Panduan Pengguna',
      items: [
        'pengguna/masuk',
        'pengguna/daftar',
        'pengguna/lupa-kata-sandi',
        'pengguna/login-sosial',
        'pengguna/otorisasi-aplikasi',
        'pengguna/faq',
      ],
    },
  ],
};

module.exports = sidebars;
