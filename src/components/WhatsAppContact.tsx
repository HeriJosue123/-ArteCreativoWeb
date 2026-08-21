export default function WhatsAppContact() {
  const phone = '50369831429';
  const message = encodeURIComponent('Hola Arte Creativo, me gustaría hacer una consulta.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a Arte Creativo por WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M19.11 17.21c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.89 1.08-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1.01 2.72 1.15 2.91c.14.19 1.99 3.04 4.82 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33ZM16.03 5.33c-5.89 0-10.68 4.79-10.68 10.68 0 1.88.49 3.71 1.43 5.32L5.25 26.67l5.46-1.43a10.65 10.65 0 0 0 5.32 1.43h.01c5.89 0 10.68-4.79 10.68-10.68S21.92 5.33 16.03 5.33Zm0 19.38h-.01a8.7 8.7 0 0 1-4.43-1.22l-.32-.19-3.24.85.87-3.16-.21-.33a8.7 8.7 0 1 1 7.34 4.05Z" />
      </svg>
    </a>
  );
}
