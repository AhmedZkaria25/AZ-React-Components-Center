import React, { useState } from 'react';
import GridCards from './GridCards';
import TemplatesCards from './TemplatesCards';
import styles from './TabsPage.module.css';

const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'atoms' | 'molecules' | 'organisms' | 'templates' | 'pages' | 'form' | 'list' | 'cards'>('form');

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>AZ React Components Center</h1>

      <nav className={styles.nav}>
                  
        <button
          className={activeTab === 'atoms' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('atoms')}
        >
          Atoms
        </button>
        <button
          className={activeTab === 'molecules' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('molecules')}
        >
          Molecules
        </button>
        <button
          className={activeTab === 'organisms' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('organisms')}
        >
          Organisms
        </button>
        <button
          className={activeTab === 'templates' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('templates')}
        >
          Templates
        </button>
        <button
          className={activeTab === 'pages' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('pages')}
        >
          Pages
        </button>
        
        <button
          className={activeTab === 'form' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('form')}
        >
          Form
        </button>
        <button
          className={activeTab === 'list' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('list')}
        >
          List
        </button>
        <button
          className={activeTab === 'cards' ? styles.activeNavButton : styles.navButton}
          onClick={() => setActiveTab('cards')}
        >
          Cards
        </button>
      </nav>

      <div className={styles.content}>
        {activeTab === 'templates' && (
          <section className={styles.section}>
            <TemplatesCards />
          </section>
        )}

        {activeTab === 'form' && (
          <section className={styles.section}>
            {/* <h2 className={styles.sectionTitle}>Form</h2>
            <form className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} placeholder="Your name" />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="you@example.com" />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Comments</label>
                <textarea className={styles.textarea} placeholder="Write something..." />
              </div>
              <div className={styles.actions}>
                <button type="button" className={styles.primaryButton}>
                  Submit
                </button>
                <button type="button" className={styles.secondaryButton}>
                  Reset
                </button>
              </div> */}

              {/* <div className={styles.subSection}> */}
                {/* <h3 className={styles.subTitle}>Component Preview</h3> */}
                <GridCards />
              {/* </div>
            </form> */}
          </section>
        )}

        {activeTab === 'list' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>List</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Home</li>
              <li className={styles.listItem}>Components</li>
              <li className={styles.listItem}>Documentation</li>
              <li className={styles.listItem}>Settings</li>
            </ul>
          </section>
        )}

        {activeTab === 'cards' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cards</h2>
            <div className={styles.cardsGrid}>
              <div className={styles.cardBox}>
                <h3 className={styles.cardTitle}>Box Card 1</h3>
                <p className={styles.cardText}>A simple box card with space for a short description.</p>
              </div>
              <div className={styles.cardBox}>
                <h3 className={styles.cardTitle}>Box Card 2</h3>
                <p className={styles.cardText}>Use this area to show status, stats, or quick actions.</p>
              </div>
              <div className={styles.cardBox}>
                <h3 className={styles.cardTitle}>Box Card 3</h3>
                <p className={styles.cardText}>Cards can contain any UI element or layout.</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TabsPage;
