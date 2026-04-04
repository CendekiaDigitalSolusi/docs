import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gradynex',
    component: ComponentCreator('/gradynex', 'e3d'),
    routes: [
      {
        path: '/gradynex',
        component: ComponentCreator('/gradynex', '129'),
        routes: [
          {
            path: '/gradynex',
            component: ComponentCreator('/gradynex', '955'),
            routes: [
              {
                path: '/gradynex/',
                component: ComponentCreator('/gradynex/', '00e'),
                exact: true
              },
              {
                path: '/gradynex/central-app/autentikasi/lupa-kata-sandi',
                component: ComponentCreator('/gradynex/central-app/autentikasi/lupa-kata-sandi', '914'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/autentikasi/masuk',
                component: ComponentCreator('/gradynex/central-app/autentikasi/masuk', '3fd'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/dasar/berlangganan',
                component: ComponentCreator('/gradynex/central-app/dasar/berlangganan', '6c3'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/dasar/data-sekolah',
                component: ComponentCreator('/gradynex/central-app/dasar/data-sekolah', '55b'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/dasar/trial',
                component: ComponentCreator('/gradynex/central-app/dasar/trial', '1a6'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/intro',
                component: ComponentCreator('/gradynex/central-app/intro', '6d6'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/central-app/memulai',
                component: ComponentCreator('/gradynex/central-app/memulai', '11c'),
                exact: true,
                sidebar: "centralSidebar"
              },
              {
                path: '/gradynex/help-center/faq',
                component: ComponentCreator('/gradynex/help-center/faq', '27c'),
                exact: true,
                sidebar: "helpSidebar"
              },
              {
                path: '/gradynex/help-center/troubleshooting',
                component: ComponentCreator('/gradynex/help-center/troubleshooting', '255'),
                exact: true,
                sidebar: "helpSidebar"
              },
              {
                path: '/gradynex/intro',
                component: ComponentCreator('/gradynex/intro', '0b9'),
                exact: true
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/', 'e33'),
                exact: true
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/berita',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/berita', '852'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/halaman',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/halaman', 'a7b'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/kategori',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/kategori', '02f'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/komentar',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/komentar', 'b74'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/slider-gambar',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/slider-gambar', '6f4'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/blog/tag',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/blog/tag', 'd7d'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/dashboard-admin',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/dashboard-admin', '9ae'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/', '4e6'),
                exact: true
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/blog/',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/blog/', '6d7'),
                exact: true
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-diskusi',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-diskusi', 'b9e'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-membaca',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/blog/pengaturan-membaca', 'c16'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-server-email',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-server-email', '738'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-umum',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/pengaturan-umum', 'c9f'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengaturan/profil-sekolah',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengaturan/profil-sekolah', 'bec'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/pengguna',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/pengguna', 'c0e'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/peran',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/peran', 'efe'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/tampilan/',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/tampilan/', '94e'),
                exact: true
              },
              {
                path: '/gradynex/tenant-app/admin-panel/tampilan/menu',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/tampilan/menu', '7b9'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/tampilan/modul',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/tampilan/modul', '8f6'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/admin-panel/tampilan/tema',
                component: ComponentCreator('/gradynex/tenant-app/admin-panel/tampilan/tema', '6b7'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/autentikasi/lupa-kata-sandi',
                component: ComponentCreator('/gradynex/tenant-app/autentikasi/lupa-kata-sandi', 'd17'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/autentikasi/masuk',
                component: ComponentCreator('/gradynex/tenant-app/autentikasi/masuk', '942'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/intro',
                component: ComponentCreator('/gradynex/tenant-app/intro', '693'),
                exact: true,
                sidebar: "tenantSidebar"
              },
              {
                path: '/gradynex/tenant-app/user-panel/dashboard',
                component: ComponentCreator('/gradynex/tenant-app/user-panel/dashboard', '993'),
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
    path: '/sso-cendekia',
    component: ComponentCreator('/sso-cendekia', '632'),
    routes: [
      {
        path: '/sso-cendekia',
        component: ComponentCreator('/sso-cendekia', '3c1'),
        routes: [
          {
            path: '/sso-cendekia',
            component: ComponentCreator('/sso-cendekia', '2d9'),
            routes: [
              {
                path: '/sso-cendekia/',
                component: ComponentCreator('/sso-cendekia/', 'cdd'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/daftar',
                component: ComponentCreator('/sso-cendekia/pengguna/daftar', 'fc7'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/faq',
                component: ComponentCreator('/sso-cendekia/pengguna/faq', '05d'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/login-sosial',
                component: ComponentCreator('/sso-cendekia/pengguna/login-sosial', '15a'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/lupa-kata-sandi',
                component: ComponentCreator('/sso-cendekia/pengguna/lupa-kata-sandi', 'f7a'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/masuk',
                component: ComponentCreator('/sso-cendekia/pengguna/masuk', 'bc3'),
                exact: true,
                sidebar: "ssoCdsSidebar"
              },
              {
                path: '/sso-cendekia/pengguna/otorisasi-aplikasi',
                component: ComponentCreator('/sso-cendekia/pengguna/otorisasi-aplikasi', '512'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
