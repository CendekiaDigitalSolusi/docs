import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '62b'),
    exact: true
  },
  {
    path: '/en/gradynex',
    component: ComponentCreator('/en/gradynex', '4e7'),
    routes: [
      {
        path: '/en/gradynex',
        component: ComponentCreator('/en/gradynex', '69f'),
        routes: [
          {
            path: '/en/gradynex',
            component: ComponentCreator('/en/gradynex', '80b'),
            routes: [
              {
                path: '/en/gradynex/',
                component: ComponentCreator('/en/gradynex/', '5c5'),
                exact: true
              },
              {
                path: '/en/gradynex/central-app/autentikasi/lupa-kata-sandi',
                component: ComponentCreator('/en/gradynex/central-app/autentikasi/lupa-kata-sandi', 'd12'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/autentikasi/masuk',
                component: ComponentCreator('/en/gradynex/central-app/autentikasi/masuk', 'eb5'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/dasar/berlangganan',
                component: ComponentCreator('/en/gradynex/central-app/dasar/berlangganan', 'cf7'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/dasar/data-sekolah',
                component: ComponentCreator('/en/gradynex/central-app/dasar/data-sekolah', '6b6'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/dasar/trial',
                component: ComponentCreator('/en/gradynex/central-app/dasar/trial', '746'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/intro',
                component: ComponentCreator('/en/gradynex/central-app/intro', 'c19'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/central-app/memulai',
                component: ComponentCreator('/en/gradynex/central-app/memulai', 'fc6'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/en/gradynex/help-center/faq',
                component: ComponentCreator('/en/gradynex/help-center/faq', 'd93'),
                exact: true,
                sidebar: "helpSidebar"
              },
              {
                path: '/en/gradynex/help-center/troubleshooting',
                component: ComponentCreator('/en/gradynex/help-center/troubleshooting', '540'),
                exact: true,
                sidebar: "helpSidebar"
              },
              {
                path: '/en/gradynex/intro',
                component: ComponentCreator('/en/gradynex/intro', '128'),
                exact: true
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/', 'a3b'),
                exact: true
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/berita',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/berita', '324'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/halaman',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/halaman', 'bc5'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/kategori',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/kategori', '153'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/komentar',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/komentar', 'ff2'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/slider-gambar',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/slider-gambar', '375'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/blog/tag',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/blog/tag', 'da1'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/dashboard-admin',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/dashboard-admin', '6ff'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/', '527'),
                exact: true
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/blog/',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/blog/', 'cbf'),
                exact: true
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-diskusi',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-diskusi', '476'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-membaca',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-membaca', 'f98'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-server-email',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-server-email', 'd93'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-umum',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-umum', 'b45'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengaturan/profil-sekolah',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengaturan/profil-sekolah', 'da0'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/pengguna',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/pengguna', 'dc0'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/peran',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/peran', '685'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/tampilan/',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/tampilan/', '1da'),
                exact: true
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/tampilan/menu',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/tampilan/menu', 'd86'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/tampilan/modul',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/tampilan/modul', 'bc4'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/admin-panel/tampilan/tema',
                component: ComponentCreator('/en/gradynex/tenant-app/admin-panel/tampilan/tema', 'f96'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/autentikasi/lupa-kata-sandi',
                component: ComponentCreator('/en/gradynex/tenant-app/autentikasi/lupa-kata-sandi', '676'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/autentikasi/masuk',
                component: ComponentCreator('/en/gradynex/tenant-app/autentikasi/masuk', 'eef'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/intro',
                component: ComponentCreator('/en/gradynex/tenant-app/intro', '779'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/en/gradynex/tenant-app/user-panel/dashboard',
                component: ComponentCreator('/en/gradynex/tenant-app/user-panel/dashboard', '79d'),
                exact: true,
                sidebar: "tenantSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/sso-cendekia',
    component: ComponentCreator('/en/sso-cendekia', '4a9'),
    routes: [
      {
        path: '/en/sso-cendekia',
        component: ComponentCreator('/en/sso-cendekia', '24a'),
        routes: [
          {
            path: '/en/sso-cendekia',
            component: ComponentCreator('/en/sso-cendekia', '946'),
            routes: [
              {
                path: '/en/sso-cendekia/',
                component: ComponentCreator('/en/sso-cendekia/', '958'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/daftar',
                component: ComponentCreator('/en/sso-cendekia/pengguna/daftar', '6c3'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/faq',
                component: ComponentCreator('/en/sso-cendekia/pengguna/faq', '37c'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/login-sosial',
                component: ComponentCreator('/en/sso-cendekia/pengguna/login-sosial', 'f47'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/lupa-kata-sandi',
                component: ComponentCreator('/en/sso-cendekia/pengguna/lupa-kata-sandi', '333'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/masuk',
                component: ComponentCreator('/en/sso-cendekia/pengguna/masuk', '37d'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/en/sso-cendekia/pengguna/otorisasi-aplikasi',
                component: ComponentCreator('/en/sso-cendekia/pengguna/otorisasi-aplikasi', '7ad'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
