declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackBookingClick(location: string): void {
  const url = window.location.href;
  const timestamp = new Date().toISOString();

  // GA4 via GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'booking_click',
    click_location: location,
    click_url: url,
    click_timestamp: timestamp,
  });

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'booking_click',
      content_category: location,
    });
  }
}
