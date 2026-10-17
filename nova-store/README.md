# NOVA Goods — GitHub Pages Storefront

A polished, responsive, static e-commerce demo built with plain HTML, CSS, and JavaScript. It has no framework, build step, or server dependency, so it can be hosted directly on GitHub Pages.

## What's included

- Responsive storefront with editorial hero, curated product grid, benefits, brand story, newsletter, and footer
- Product search, category filters, sorting, quick-view product details, and wishlist
- Functional shopping bag: add/remove items, adjust quantities, subtotal, free-shipping progress, and a `NOVA10` discount code
- `localStorage` persistence for your bag and saved items
- Demo checkout form with required-field validation and an order confirmation screen
- Mobile navigation, keyboard shortcut (`Ctrl+K` / `⌘K`), accessible labels, reduced-motion support, and toast notifications

## Run it locally

1. Download and extract this project.
2. Open `index.html` in a modern browser. No installation is required.
3. For a local server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish to GitHub Pages

### Option A: Use a repository's main branch

1. Create a GitHub repository, for example `nova-store`.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root. Keep these filenames together in the same folder.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)`, then save.
6. Wait for GitHub Pages to finish publishing and open the URL shown in the Pages settings.

For a personal site, the repository name must be `<your-username>.github.io`. For a project site, the URL is normally `https://<your-username>.github.io/<repository-name>/`.

### Option B: Deploy from a `docs` folder

Place the four files inside a top-level `docs` folder and set GitHub Pages to publish the `main` branch's `/docs` directory.

## Customizing the store

- **Products and prices:** edit the `products` array near the top of `app.js`. Each item has an `id`, `name`, `category`, `price`, optional `compareAt`, `rating`, `reviews`, `badge`, `image`, `description`, `details`, and sort values.
- **Store appearance:** edit CSS variables at the top of `styles.css`, especially `--paper`, `--ink`, and `--lime`.
- **Branding:** search for `NOVA` in `index.html` to update the logo, title, description, and copy.
- **Product images:** currently loaded from Unsplash URLs, so images need an internet connection. Replace the `image` URLs in `app.js` with your own image URLs or local paths such as `images/product-01.jpg`.
- **Coupon code:** search for `NOVA10` in `app.js` and `index.html` to change the demo coupon code or discount percentage.
- **Currency:** the demo currently uses USD formatting. Update the `money()` function in `app.js` for your preferred currency.

## Important limitations

This is a **front-end demo**, not a production store. Cart and saved products persist in that browser only. The newsletter shows a local confirmation but does not collect email addresses. Checkout validates the form and creates a demo confirmation only; it does not take payment, save customer details on a server, send orders, calculate real tax/shipping, or manage inventory. For real sales, connect a trusted commerce backend and payment provider (for example, Shopify, Stripe, or another provider appropriate to your country) and never collect raw card details in this static page.

## External assets

Google Fonts and Unsplash images are loaded from their respective hosted services. For an entirely self-contained / offline copy, download licensed assets into the project and change the URLs to local paths.
