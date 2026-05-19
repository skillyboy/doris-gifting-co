# Doris Gifting Co. — Higgsfield Prompt Pack

Staged 2026-05-18. Ready to run as soon as the Higgsfield account has credits.

## Brand snapshot

- **Wordmark:** "Doris" in elegant serif with a ribbon-bow integrated into the "D"; "Gifting Co." in script; tagline "Thoughtful Gifting, Elevated."
- **Palette:** kraft brown, matte black, cream/ivory, mint, deep burgundy, with gold/champagne accents.
- **Aesthetic:** premium curated gift boxes, satin ribbons, wax seals, dried florals; warm cinematic lighting; corporate gifting + wedding/event tier (think Arhaus, Huxley, REFY).
- **Logo color picked:** black (matte black logo on packaging; gold/champagne foil for high-end variants).

## Reference URLs (already public via GitHub Pages)

| Role | URL |
| --- | --- |
| Wordmark (brown on white — use for shape; override color in prompt) | https://skillyboy.github.io/doris-gifting-co/img/logo.png |
| Kraft box style (Huxley) | https://skillyboy.github.io/doris-gifting-co/img/g-huxley.jpg |
| Hands + ribbon unboxing | https://skillyboy.github.io/doris-gifting-co/img/contact-hand.jpg |
| Matte black premium box | https://skillyboy.github.io/doris-gifting-co/img/g-happybday.jpg |
| Stacked gift wall (CTA) | https://skillyboy.github.io/doris-gifting-co/img/cta-wall.png |
| Cream paper bag w/ black ribbon (REFY) | https://skillyboy.github.io/doris-gifting-co/img/g-refy.jpg |
| Corporate tote arrangement (Arhaus) | https://skillyboy.github.io/doris-gifting-co/img/g-arhaus.jpg |
| VMO style wood + bottle gift kit | https://skillyboy.github.io/doris-gifting-co/img/g-vmo.jpg |
| Casa Nahua kraft mailers | https://skillyboy.github.io/doris-gifting-co/img/g-casa.jpg |

> **Black logo note:** to use the black wordmark, either commit `project/assets/black.png` to `docs/img/logo-black.png` (so the URL becomes `https://skillyboy.github.io/doris-gifting-co/img/logo-black.png`), or upload `black.png` via the Higgsfield web UI and swap the wordmark URL in each prompt for the returned media_id.

---

## IMAGES (7 total)

Recommended model: **`flux_2`** (precise prompt adherence) for the hero/product shots that need brand fidelity; **`marketing_studio_image`** for the CTA wall refresh. Both accept reference images via `medias[].role = "image"`.

### IMG-1 · Hero, landscape (16:9, web hero)
- model: `flux_2`
- aspect_ratio: `16:9`
- medias: `[ logo.png (image), cta-wall.png (image), g-huxley.jpg (image) ]`
- prompt:
  > Editorial luxury hero photograph for Doris Gifting Co. A curated arrangement of premium gift boxes on a dark walnut surface against a soft cream-to-charcoal gradient backdrop. Mix of textures: matte black hard-shell box with a hand-tied black satin bow and a small matte-gold "Doris" wordmark embossed on the lid, two kraft-brown boxes stacked with black grosgrain ribbon and dried eucalyptus, one ivory linen-wrapped box with a champagne-gold wax seal. Warm cinematic lighting from camera-left, long soft shadows, shallow depth of field. Tagline space on the left third of the frame. Style: high-end art direction reminiscent of Aesop / Loewe / Huxley packaging photography. 4K, photoreal, no text artifacts other than the logo wordmark.

### IMG-2 · Hero, portrait (9:16, mobile hero)
- model: `flux_2`
- aspect_ratio: `9:16`
- medias: `[ logo.png (image), g-happybday.jpg (image) ]`
- prompt:
  > Vertical mobile hero shot for Doris Gifting Co. Single signature matte-black gift box centered, hand-tied black silk ribbon falling naturally to the side, small embossed "Doris" wordmark in matte gold on the lid. Soft cream tulle and dried botanicals frame the bottom edge. Background: gentle warm gradient from cream to deep charcoal. Cinematic side light, gallery-quality product photograph. Negative space at top for headline copy. Photoreal, 4K, no extra text.

### IMG-3 · Signature product card (1:1)
- model: `flux_2`
- aspect_ratio: `1:1`
- medias: `[ logo.png (image), g-huxley.jpg (image) ]`
- prompt:
  > Square product image of a single Doris Gifting Co. signature kraft box on a warm oak surface. Box is rich cocoa-brown matte cardstock, lid slightly ajar revealing tissue paper and a folded handwritten note card. Hand-tied black satin ribbon with a small matte-gold tag stamped "Doris". Soft directional window light, gentle shadows, neutral cream wall in the soft-focus background. Editorial e-commerce style. No extra text, photoreal, 4K.

### IMG-4 · Signature product card · variant (1:1)
- model: `flux_2`
- aspect_ratio: `1:1`
- medias: `[ logo.png (image), g-refy.jpg (image) ]`
- prompt:
  > Square product image of a cream Doris Gifting Co. premium paper gift bag with twisted black satin handles, small matte-black "Doris" wordmark printed lower-left on the bag. Tissue paper peeking from the top, a tied black ribbon and a wax seal in deep burgundy. Soft seamless ivory background, single soft key light from upper-left, refined editorial product photography. Photoreal, 4K, no extra text.

### IMG-5 · Lifestyle · hands tying ribbon (4:3)
- model: `flux_2`
- aspect_ratio: `4:3`
- medias: `[ contact-hand.jpg (image) ]`
- prompt:
  > Lifestyle close-up of two well-manicured hands tying a black satin bow on a matte black Doris gift box, set on a textured cream linen tablecloth. Dried eucalyptus, a brass scissor, and a small "Doris" branded card visible in the soft-focus foreground. Warm window light from the right, soft natural shadows. Cinematic editorial styling, 35mm look, shallow depth of field. Photoreal, 4K, no on-image text other than the small Doris card.

### IMG-6 · Lifestyle · corporate gifting tablescape (4:3)
- model: `flux_2`
- aspect_ratio: `4:3`
- medias: `[ g-arhaus.jpg (image), logo.png (image) ]`
- prompt:
  > Corporate gifting tablescape: rows of identical cream canvas tote bags with a small matte-black "Doris" wordmark printed on the side, each tote holding a kraft gift box tied with black grosgrain ribbon. Set on a long ivory-clothed banquet table inside a softly-lit event venue, warm tungsten uplighting in the background. Editorial event photography, depth of field falling off into the back, photoreal, 4K, no extra signage text.

### IMG-7 · CTA wall refresh (21:9, replaces cta-wall.png)
- model: `marketing_studio_image` (or `flux_2` with `21:9`)
- aspect_ratio: `21:9`
- medias: `[ cta-wall.png (image), logo.png (image) ]`
- prompt:
  > Editorial wall arrangement of dozens of premium gift boxes stacked into a pyramid silhouette against a deep charcoal backdrop. Mix of kraft brown, matte black, cream linen, and deep burgundy wraps, each finished with black satin ribbons, gold wax seals, and dried floral sprigs. Warm rim lighting from the upper corners, cinematic chiaroscuro, soft glow on the center boxes. The overall composition leaves a clean horizontal band of negative space across the lower third for a call-to-action overlay. Photoreal, 4K, no on-image text.

---

## VIDEOS (2 total)

Recommended model: **`seedance_2_0`** (reference-driven, supports `start_image`/`end_image`, consistent identity). Falls back to `kling3_0` if needed.

### VID-1 · Hero loop, cinematic push-in (16:9, 5s)
- model: `seedance_2_0`
- aspect_ratio: `16:9`
- duration: 5
- resolution: `1080p`
- medias: `[ IMG-1 result job_id (start_image) ]` ← run AFTER IMG-1 completes; use the returned job_id
- prompt:
  > Very slow, smooth push-in (subtle zoom toward center). No rotation, no camera shake. Warm ambient lighting with gentle highlight shifts across the ribbons as if a slow breath of light passes over the arrangement. Faint particles of light catching the satin and gold accents. Cinematic, hushed, luxurious mood. No text, no logos appearing or disappearing, no people entering frame.

### VID-2 · Unboxing teaser, vertical social (9:16, 5s)
- model: `seedance_2_0`
- aspect_ratio: `9:16`
- duration: 5
- resolution: `1080p`
- medias: `[ IMG-5 result job_id (start_image) ]` ← run AFTER IMG-5 completes
- prompt:
  > Hands slowly pull one end of the black satin ribbon, the bow unties in a smooth elegant motion and falls softly to either side of the box. Camera holds steady on the box. Warm natural window light from the right, soft shadows, shallow depth of field. The lid stays closed — anticipation only. Cinematic, hushed, premium feel. No text, no captions.

---

## MARKETING STUDIO AD (1 total)

### MS-1 · Webproduct ad seeded from the live site
Two-step flow because Marketing Studio fetches the site first, then generates.

**Step A — fetch the site:**
- tool: `show_marketing_studio`
- params: `{ action: "fetch", type: "webproduct", url: "https://skillyboy.github.io/doris-gifting-co/" }`
- → wait for the fetch widget to finish, grab the resulting webproduct id and the `next_step` payload.

**Step B — generate the video:**
- tool: `generate_video`
- params: `{ model: "marketing_studio_video", ...next_step from Step A, aspect_ratio: "9:16", duration: 8, resolution: "720p" }`
- prompt (used inside the Marketing Studio preset):
  > Promote Doris Gifting Co. — premium, curated gift boxes for weddings, corporate events, and personal milestones. Tone: warm, refined, "thoughtful gifting, elevated." Show wrapped boxes, ribbon details, and the brand wordmark moments. End on a soft fade with the tagline.

---

## Run order (when credits land)

1. `balance` — confirm credits > ~80.
2. (Optional) For each image: `generate_image` with `get_cost: true` to preview spend.
3. Submit `IMG-1 … IMG-7` (can be done in parallel — separate tool calls).
4. After IMG-1 and IMG-5 return result job_ids, submit `VID-1` and `VID-2` with those job_ids as `start_image`.
5. Submit `MS-1` two-step flow.
6. As each job completes, download the result and save under `C:\Users\pc\Desktop\doris-gifting-co\higgsfield\out\` with names like `hero-landscape-16x9.png`, `hero-portrait-9x16.png`, etc.

## Credit cost estimate (rough)

| Asset | Model | Est. credits |
| --- | --- | --- |
| IMG-1…IMG-7 (7 images) | flux_2 / marketing_studio_image | ~2-5 each → 14-35 total |
| VID-1, VID-2 (2 × 5s 1080p) | seedance_2_0 | ~15-25 each → 30-50 total |
| MS-1 (1 × 8s 720p) | marketing_studio_video | ~15-20 |
| **Total** | | **~60-105 credits** |

Use `get_cost: true` on each call to confirm exact spend before submitting.
