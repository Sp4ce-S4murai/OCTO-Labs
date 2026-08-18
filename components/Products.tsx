import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/content";

export function Products() {
  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-petrol-950 sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-4 text-lg text-petrol-600">{products.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6">
          {products.items.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-petrol-100 bg-white p-8 shadow-softer transition-colors hover:border-coral-300"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-petrol-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-petrol-600">
                    {product.status}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-petrol-950">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-petrol-500">{product.tagline}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-petrol-400 transition-colors group-hover:text-coral-500" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-petrol-600">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
