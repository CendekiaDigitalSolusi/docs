import React from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

const appCatalog = [
  {
    name: translate({
      message: 'SSO Cendekia',
      description: 'Homepage card title for the SSO product',
    }),
    tag: translate({
      message: 'Single Sign-On',
      description: 'Homepage card tag for the SSO product',
    }),
    description: translate({
      message: 'Satu akun untuk semua aplikasi Cendekia. Login sekali, akses semua layanan dengan mudah dan aman.',
      description: 'Homepage description for the SSO product',
    }),
    docsLinks: [
      {
        label: translate({
          message: 'Dokumentasi',
          description: 'Homepage link label to SSO docs',
        }),
        to: '/sso-cendekia',
      },
    ],
    accent: 'home-card--central',
    status: translate({
      message: 'Aktif',
      description: 'Homepage status label for active app',
    }),
  },
  {
    name: translate({
      message: 'Gradynex',
      description: 'Homepage card title for the Gradynex product',
    }),
    tag: translate({
      message: 'Sistem Informasi Sekolah',
      description: 'Homepage card tag for the Gradynex product',
    }),
    description: translate({
      message: 'Kelola data sekolah, pengguna, dan langganan dengan aplikasi utama yang terintegrasi penuh.',
      description: 'Homepage description for the Gradynex product',
    }),
    docsLinks: [
      {
        label: translate({
          message: 'Aplikasi Central',
          description: 'Homepage link label to Gradynex central docs',
        }),
        to: '/gradynex/central-app/intro',
      },
      {
        label: translate({
          message: 'Aplikasi Tenant',
          description: 'Homepage link label to Gradynex tenant docs',
        }),
        to: '/gradynex/tenant-app/intro',
      },
      {
        label: translate({
          message: 'FAQ',
          description: 'Homepage link label to Gradynex FAQ docs',
        }),
        to: '/gradynex/help-center/faq',
      },
    ],
    accent: 'home-card--central',
    status: translate({
      message: 'Aktif',
      description: 'Homepage status label for active app',
    }),
  },
];

export default function Home() {
  return (
    <Layout
      title={translate({
        message: 'Cendekia Docs',
        description: 'Homepage document title',
      })}
      description={translate({
        message: 'Dokumentasi PT Cendekia Digital Solusi',
        description: 'Homepage meta description',
      })}
    >
      <main className="home-shell">
        <section className="home-hero container">
          <p className="home-kicker">
            {translate({
              message: 'Dokumentasi Cendekia',
              description: 'Homepage kicker text',
            })}
          </p>
          <h1>
            {translate({
              message: 'Portal Dokumentasi Aplikasi Cendekia',
              description: 'Homepage hero heading',
            })}
          </h1>
          <p className="home-subtitle">
            {translate({
              message:
                'Satu pintu dokumentasi untuk seluruh aplikasi dalam ekosistem Cendekia Digital Solusi. Pilih aplikasi, buka panduan, dan jalankan operasional lebih cepat.',
              description: 'Homepage hero subtitle',
            })}
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
