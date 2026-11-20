// KonfHub Event & Ticketing Integration Utilities for .NET Conf 2026 Amravati

export const KONFHUB_SLUG = 'dnc26';
export const KONFHUB_EVENT_URL = 'https://konfhub.com/dnc26';
export const KONFHUB_WIDGET_URL = 'https://konfhub.com/widget/dnc26';
export const KONFHUB_TICKETS_API = 'https://api.konfhub.com/event/url/dnc26/tickets';

/**
 * Format UTC timestamp string from KonfHub (e.g. "2026-12-30 12:30:00")
 * into user-friendly localized date (e.g. "Available Till: 30th Dec 2026, 06:00 PM")
 */
export const formatAvailabilityDate = (timestampStr) => {
  if (!timestampStr) return null;
  try {
    const utcDate = new Date(timestampStr.replace(' ', 'T') + 'Z');
    if (isNaN(utcDate.getTime())) return null;

    const day = utcDate.getDate();
    const nth = (d) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    const month = utcDate.toLocaleString('en-US', { month: 'short' });
    const year = utcDate.getFullYear();
    const time = utcDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return `Available Till: ${day}${nth(day)} ${month} ${year}, ${time}`;
  } catch {
    return null;
  }
};

/**
 * 3 Official Passes kept for .NET Conf 2026:
 * - Early Bird Pass (₹200)
 * - Regular Ticket (₹250)
 * - VIP Pass / Premium (₹500)
 * Note: Scarcity counts (e.g. "Only X tickets left") are populated dynamically from the KonfHub API.
 */
export const DEFAULT_KONFHUB_TIERS = [
  {
    id: 127440,
    slug: 'early-bird',
    name: 'Early Bird Pass',
    badge: 'Phase 01 · Sold Out',
    tier: 'Early Bird',
    price: 200,
    currency: 'INR',
    currencySymbol: '₹',
    isSoldOut: true,
    status: 'Sold Out',
    urgencyText: 'Sold Out',
    availableTill: null,
    buttonId: null,
    description: `<ul>
<li><strong>Welcome Kit</strong> and event merchandise</li>
<li>Complimentary <strong>high tea, snacks and food</strong></li>
<li>Certificate of participation</li>
<li>Verifiable Digital Badge</li>
<li>Complimentary <a href="https://www.packtpub.com/en-in/subscribe-free-trial" target="_blank" rel="noopener noreferrer"><strong>1 year Packt subscription worth ₹8000</strong></a></li>
<li><strong>1-Year Free .xyz Domain (Worth $15)</strong> for building personal websites</li>
<li>Participation in <strong>contests, challenges, games, and quizzes</strong></li>
</ul>`,
    perks: [
      'Welcome Kit and event merchandise',
      'Complimentary high tea, snacks and food',
      'Certificate of participation',
      'Verifiable Digital Badge',
      'Complimentary 1 year Packt subscription worth ₹8000',
      '1-Year Free .xyz Domain (Worth $15) for building personal websites',
      'Participation in contests, challenges, games, and quizzes',
    ],
    isPopular: false,
    color: '#00F0FF',
  },
  {
    id: 127439,
    slug: 'regular',
    name: 'Regular Ticket',
    badge: 'Phase 02 · Most Popular',
    tier: 'Regular',
    price: 250,
    currency: 'INR',
    currencySymbol: '₹',
    urgencyText: null,
    availableTill: 'Available Till: 30th Dec 2026, 06:00 PM',
    buttonId: 'btn_43c35e9003f1',
    description: `<ul>
<li><strong>Welcome Kit</strong> and event merchandise</li>
<li>Complimentary <strong>high tea, snacks and food</strong></li>
<li>Certificate of participation</li>
<li>Verifiable Digital Badge</li>
<li>Complimentary <a href="https://www.packtpub.com/en-in/subscribe-free-trial" target="_blank" rel="noopener noreferrer"><strong>1 year Packt subscription worth ₹8000</strong></a></li>
<li><strong>1-Year Free .xyz Domain (Worth $15)</strong> for building personal websites</li>
<li>Participation in <strong>contests, challenges, games, and quizzes</strong></li>
</ul>`,
    perks: [
      'Welcome Kit and event merchandise',
      'Complimentary high tea, snacks and food',
      'Certificate of participation',
      'Verifiable Digital Badge',
      'Complimentary 1 year Packt subscription worth ₹8000',
      '1-Year Free .xyz Domain (Worth $15) for building personal websites',
      'Participation in contests, challenges, games, and quizzes',
    ],
    isPopular: true,
    color: '#512BD4',
  },
  {
    id: 127441,
    slug: 'premium',
    name: 'VIP Pass',
    badge: 'VIP All-Access',
    tier: 'VIP',
    price: 500,
    currency: 'INR',
    currencySymbol: '₹',
    urgencyText: null,
    availableTill: 'Available Till: 30th Dec 2026, 06:00 PM',
    buttonId: 'btn_5ae12750b185',
    description: `<ul>
<li><strong>Welcome Kit</strong> and event merchandise</li>
<li><strong>Front row accommodation &amp; keynote seating</strong></li>
<li><strong>Official Conference T-shirt</strong></li>
<li>Complimentary <strong>high tea, snacks and food</strong></li>
<li>Certificate of participation</li>
<li>Verifiable Digital Badge</li>
<li>Complimentary <a href="https://www.packtpub.com/en-in/subscribe-free-trial" target="_blank" rel="noopener noreferrer"><strong>1 year Packt subscription worth ₹8000</strong></a></li>
<li><strong>1-Year Free .xyz Domain (Worth $15)</strong> for building personal websites</li>
<li>Participation in <strong>contests, challenges, games, and quizzes</strong></li>
</ul>`,
    perks: [
      'Welcome Kit and event merchandise',
      'Front row accommodation & keynote seating',
      'Conference T-shirt included',
      'Complimentary high tea, snacks and food',
      'Certificate of participation',
      'Verifiable Digital Badge',
      'Complimentary 1 year Packt subscription worth ₹8000',
      '1-Year Free .xyz Domain (Worth $15) for building personal websites',
      'Participation in contests, challenges, games, and quizzes',
    ],
    isPopular: false,
    color: '#FFD13B',
  },
];

/**
 * Fetch live ticket details directly from KonfHub REST API.
 * Uses CORS-enabled GET https://api.konfhub.com/event/url/dnc26/tickets
 */
export const fetchKonfhubTickets = async () => {
  try {
    const res = await fetch(KONFHUB_TICKETS_API, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`KonfHub API responded with status ${res.status}`);
    }

    const data = await res.json();
    const rawTickets = [
      ...(data.uncategorized || []),
      ...(data.categorized ? data.categorized.flatMap((c) => c.tickets || []) : []),
    ];

    if (!rawTickets.length) {
      return { success: true, source: 'fallback', tickets: DEFAULT_KONFHUB_TIERS };
    }

    // Merge live data with our structured 3 tiers
    const mapped = DEFAULT_KONFHUB_TIERS.map((tier) => {
      const live = rawTickets.find(
        (t) =>
          t.ticket_id === tier.id ||
          (t.ticket_name && t.ticket_name.toLowerCase().includes(tier.slug.replace('-', ' '))) ||
          (t.ticket_name && t.ticket_name.toLowerCase().includes(tier.tier.toLowerCase()))
      );

      if (!live) return tier;

      // Dynamic availability & scarcity messaging directly from live KonfHub API
      const isSold = Boolean(live.sold_out) || (live.remaining_count !== undefined && live.remaining_count !== null && live.remaining_count <= 0);
      let dynamicUrgency = null;
      if (isSold) {
        dynamicUrgency = 'Sold Out';
      } else if (live.low_availability_message) {
        dynamicUrgency = live.low_availability_message;
      } else if (live.remaining_count !== undefined && live.remaining_count !== null && live.remaining_count > 0 && live.remaining_count <= 25) {
        dynamicUrgency = `Only ${live.remaining_count} tickets left`;
      }

      const dynamicAvailableTill = isSold
        ? null
        : (live.end_timestamp ? formatAvailabilityDate(live.end_timestamp) : tier.availableTill);

      return {
        ...tier,
        badge: isSold ? `${tier.tier} · Sold Out` : tier.badge,
        price: live.ticket_price !== undefined ? live.ticket_price : tier.price,
        isSoldOut: isSold,
        status: isSold ? 'Sold Out' : 'Available',
        urgencyText: dynamicUrgency,
        remainingCount: live.remaining_count,
        availableTill: dynamicAvailableTill,
        description: live.description || tier.description,
        liveRaw: live,
      };
    });

    return {
      success: true,
      source: 'live',
      tickets: mapped,
      rawTickets,
    };
  } catch (err) {
    console.warn('[KonfHub API] Live fetch error, using curated passes fallback:', err.message);
    return {
      success: false,
      source: 'fallback',
      tickets: DEFAULT_KONFHUB_TIERS,
      error: err.message,
    };
  }
};

