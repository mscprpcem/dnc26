/**
 * Sponsorship Configuration for .NET Conf 2026 Amravati
 * 
 * Set your deployed Google Apps Script URL in your local `.env` file:
 * VITE_SPONSORSHIP_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 */
export const SPONSORSHIP_API_ENDPOINT = 
  import.meta.env.VITE_SPONSORSHIP_SCRIPT_URL || 
  import.meta.env.VITE_WEBHOOK_URL || 
  '';

export const SPONSORSHIP_TIER_OPTIONS = [
  {
    value: 'TITLE SPONSOR (₹2,00,000)',
    label: 'Title Sponsor — ₹2,00,000 (1-2 Exclusive Slots)',
    shortLabel: 'Title Sponsor',
    price: '₹2,00,000',
    dotColor: '#D97706',
    textColor: '#B45309',
    badgeBg: '#FEF3C7',
    hoverBg: '#FFFBEB'
  },
  {
    value: 'PLATINUM SPONSOR (₹1,00,000)',
    label: 'Platinum Sponsor — ₹1,00,000',
    shortLabel: 'Platinum Sponsor',
    price: '₹1,00,000',
    dotColor: '#00A4EF',
    textColor: '#0284C7',
    badgeBg: '#E0F2FE',
    hoverBg: '#F0F9FF'
  },
  {
    value: 'GOLD SPONSOR (₹50,000)',
    label: 'Gold Sponsor — ₹50,000',
    shortLabel: 'Gold Sponsor',
    price: '₹50,000',
    dotColor: '#F59E0B',
    textColor: '#D97706',
    badgeBg: '#FEF3C7',
    hoverBg: '#FFFBEB'
  },
  {
    value: 'SILVER SPONSOR (₹25,000)',
    label: 'Silver Sponsor — ₹25,000',
    shortLabel: 'Silver Sponsor',
    price: '₹25,000',
    dotColor: '#64748B',
    textColor: '#475569',
    badgeBg: '#F1F5F9',
    hoverBg: '#F8FAFC'
  },
  {
    value: 'BRONZE SPONSOR (₹15,000)',
    label: 'Bronze Sponsor — ₹15,000',
    shortLabel: 'Bronze Sponsor',
    price: '₹15,000',
    dotColor: '#EA580C',
    textColor: '#C2410C',
    badgeBg: '#FFEDD5',
    hoverBg: '#FFF7ED'
  },
  {
    value: 'IN-KIND SUPPORT (Cloud/Tooling/Swag)',
    label: 'In-Kind Support (Cloud credits, Developer Tools, Swag)',
    shortLabel: 'In-Kind Support',
    price: 'Tools & Cloud',
    dotColor: '#06B6D4',
    textColor: '#0891B2',
    badgeBg: '#CFFAFE',
    hoverBg: '#ECFEFF'
  },
  {
    value: 'COMMUNITY PARTNER',
    label: 'Community Dev Chapter / Student Club',
    shortLabel: 'Community Partner',
    price: 'Grassroots',
    dotColor: '#E0199E',
    textColor: '#DB2777',
    badgeBg: '#FCE7F3',
    hoverBg: '#FDF2F8'
  },
  {
    value: 'CUSTOM / EXHIBITION BOOTH',
    label: 'Custom Exhibition Booth / Tailored Package',
    shortLabel: 'Custom Package',
    price: 'Custom',
    dotColor: '#512BD4',
    textColor: '#512BD4',
    badgeBg: '#EDE9FE',
    hoverBg: '#FAF8FF'
  },
];

