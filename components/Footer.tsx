export default function Footer() {
  const date = new Date();
  return (
    <footer className="py-8 text-center">
      <div className="text-muted-foreground text-sm font-mono">
        <p data-testid="text-attribution">
          Franco Healy @{date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
