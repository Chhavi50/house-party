import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-pad flex min-h-screen items-center justify-center">
      <div className="glass max-w-lg rounded-sm p-8 text-center">
        <p className="text-xs tracking-[0.28em] text-neon uppercase">404</p>
        <h1 className="mt-3 font-display text-5xl text-white">NOT FOUND</h1>
        <p className="mt-3 text-muted">
          That page or registration could not be found.
        </p>
        <Link
          href="/"
          className="glow-btn mt-8 inline-flex rounded-sm px-6 py-3 text-sm tracking-[0.16em] text-white"
        >
          BACK TO PARTY
        </Link>
      </div>
    </main>
  );
}
