import { catalog } from "@/lib/catalog";

export function CatalogShowcase() {
  return (
    <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Featured catalog</h2>
          <p className="text-sm text-slate-500">
            These items will be highlighted whenever the agent finds a matching request.
          </p>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {catalog.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brand">
                ${item.price}
              </span>
            </div>
            <p className="text-sm text-slate-600">{item.description}</p>
            <ul className="grid gap-2 text-xs text-slate-600">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
