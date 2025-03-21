// Using dynamic imports to ensure ESM compatibility
const { build } = await import('vite');

try {
  await build({
    configFile: './vite.config.js',
    mode: 'production'
  });
  console.log('Build completed successfully');
} catch (e) {
  console.error('Build failed:', e);
  process.exit(1);
}
