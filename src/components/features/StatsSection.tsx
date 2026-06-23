import React from 'react';

interface StatsSectionProps {
  t: (key: string) => string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ t }) => {
  return (
    <section style={{ backgroundColor: 'var(--bg-card)', padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>15,400+</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t('stat_practitioners')}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>100%</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t('stat_digital')}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>07 Days</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t('stat_processing')}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>24 / 7</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t('stat_support')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
