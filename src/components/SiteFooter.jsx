export function SiteFooter() {
  return (
    <footer className="bg-pink-soft pt-10 pb-12 px-6 text-center">
      <div className="text-4xl mb-3" aria-hidden>
        🍵
      </div>
      <p className="font-display font-bold text-pink-ink text-lg">Body Like Tea</p>
      <p className="text-pink-ink/80 text-sm mt-2 max-w-md mx-auto">
        Made with love for gym girlies. Numbers are estimates — listen to your body, eat the
        snacks, lift the weights.
      </p>
      <p className="text-pink-ink/60 text-xs mt-5">
        © {new Date().getFullYear()} Body Like Tea
      </p>
    </footer>
  );
}
