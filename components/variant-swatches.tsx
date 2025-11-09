interface VariantSwatchesProps {
  variants: { name: string; color: string; hex: string }[];
}

export function VariantSwatches({ variants }: VariantSwatchesProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {variants.map((variant) => (
        <li key={variant.name} className="flex items-center gap-2 text-sm text-neutral">
          <span className="block h-5 w-5 rounded-full border border-white/10" style={{ backgroundColor: variant.hex }} />
          {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
        </li>
      ))}
    </ul>
  );
}
