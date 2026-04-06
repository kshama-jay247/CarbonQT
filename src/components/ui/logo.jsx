export function Logo({ size = 32 }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.jpeg"
        alt="CarbonQt Logo"
        width={size}
        height={size}
        className="object-contain"
      />
      <span className="font-bold text-xl">
        CarbonQt
      </span>
    </div>
  );
}