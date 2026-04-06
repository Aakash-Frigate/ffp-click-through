# Gemini AI Agent Configuration

## Design & UI Guidelines

- **Aesthetic**: Minimalist design approach. Keep the interface clean and uncluttered.
- **Visual Effects**: Use a "liquid glass effect" (glassmorphism) for cards, navbars, and modals. This involves translucent backgrounds with backdrop blur (e.g., `bg-white/30 backdrop-blur-md border border-white/40`).
- **Color Scheme**: Light blue and white theme. Use soft, bright blues against white backgrounds for a refreshing, airy feel.
- **Components**: Prioritize using `@material-tailwind/react` components. Only build custom UI components if absolutely necessary when Material Tailwind falls short.

## Development & Tooling

- **Package Manager**: ALWAYS use `pnpm` for installing dependencies and running scripts. Avoid `npm` or `yarn`.

## Workflows

When instructed to build new pages or features:

1. Ensure the color palette (light blue, white and black) is respected.
2. Rely first on standard Material Tailwind props (like variants, colors) before appending custom Tailwind classes.
3. If creating glass effects, ensure there's enough text contrast against the background.
