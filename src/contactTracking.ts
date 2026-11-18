declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      parameters: Record<string, string>,
    ) => void;
  }
}

export function initContactTracking() {
  const trackContactClick = (event: MouseEvent) => {
    // Include primary, keyboard and middle-click activation, excluding right-clicks.
    if (event.button > 1 || !(event.target instanceof Element)) return;

    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (!link) return;

    let destination: URL;
    try {
      destination = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    let method: string;
    if (destination.protocol === 'tel:') {
      method = 'phone';
    } else if (destination.protocol === 'mailto:') {
      method = 'email';
    } else if (
      destination.protocol === 'whatsapp:' ||
      (['https:', 'http:'].includes(destination.protocol) &&
        ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(destination.hostname))
    ) {
      method = 'whatsapp';
    } else {
      return;
    }

    const section = link.closest('section[id], header');
    try {
      // Send only the method and page section. Planner URLs can contain a guest's brief.
      window.gtag?.('event', `contact_${method}_click`, {
        contact_method: method,
        contact_location: section?.id || section?.tagName.toLowerCase() || 'other',
      });
    } catch {
      // Contact links still work if analytics is unavailable.
    }
  };

  // Delegation also covers links mounted later in service panels and the planner.
  document.addEventListener('click', trackContactClick, true);
  document.addEventListener('auxclick', trackContactClick, true);

  return () => {
    document.removeEventListener('click', trackContactClick, true);
    document.removeEventListener('auxclick', trackContactClick, true);
  };
}
