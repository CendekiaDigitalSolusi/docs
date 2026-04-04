import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const appCatalog = [
  {
    name: 'SSO Cendekia',
    tag: 'Single Sign-On',
    description:
      'Satu akun untuk semua aplikasi Cendekia. Login sekali, akses semua layanan dengan mudah dan aman.',
    docsLinks: [
      { label: 'Dokumentasi', to: '/sso-cendekia' },
    ],
    accent: 'home-card--central',
    status: 'Aktif',
  },
  {
    name: 'Gradynex',
    tag: 'Sistem Informasi Sekolah',
    description:
      'Kelola data sekolah, pengguna, dan langganan dengan aplikasi utama yang terintegrasi penuh.',
    docsLinks: [
      { label: 'Aplikasi Central', to: '/gradynex/central-app/intro' },
      { label: 'Aplikasi Tenant', to: '/gradynex/tenant-app/intro' },
      { label: 'FAQ', to: '/gradynex/help-center/faq' },
    ],
    accent: 'home-card--central',
    status: 'Aktif',
  },
];

export default function Home() {
  return (
    <Layout
      title="Cendekia Docs"
      description="Dokumentasi PT Cendekia Digital Solusi"
    >
      <main className="home-shell">
        <section className="home-hero container">
          <p className="home-kicker">Dokumentasi Cendekia</p>
          <h1>Portal Dokumentasi Aplikasi Cendekia</h1>
          <p className="home-subtitle">
            Satu pintu dokumentasi untuk seluruh aplikasi dalam ekosistem Cendekia Digital Solusi. Pilih aplikasi,
            buka panduan, dan jalankan operasional lebih cepat.
          </p>
        </section>

        <section className="container home-catalog">
          {appCatalog.map((app) => (
            <article key={app.name} className={`home-card ${app.accent}`}>
              <div className="home-card-head">
                <span className="home-tag">{app.tag}</span>
                <span className="home-status">{app.status}</span>
              </div>
              <h2>{app.name}</h2>
              <p>{app.description}</p>
              <div className="home-card-actions">
                {app.docsLinks.map((docLink) => (
                  <Link key={`${app.name}-${docLink.label}`} className="button button--outline button--sm" to={docLink.to}>
                    {docLink.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
