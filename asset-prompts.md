# Doris Gifting Co. — Locked Visual Prompt Set

Production prompts for Higgsfield generation. Status: **LOCKED** (approved set,
pending account credits). Do not run without preflighting `get_cost` first and
reporting the total.

## Measured cost (Higgsfield `get_cost`, preflighted)

| Asset | Model | Settings | Credits |
|---|---|---|---|
| Image | `nano_banana_2` | 2K, count 1 | 2 each |
| Hero clip (budget) | `kling3_0` | 5s, 16:9, std | 10 |
| Hero clip (premium, reference-locked) | `seedance_2_0` | 5s, 720p | 22.5 |

Set total: 11 images (22) + 1 video (10–22.5) = **~32–45 credits**;
budget ~40–55 with reroll headroom.

## Personalization step (do this first when credits exist)

Before generating, upload the client's real assets via `media_upload` and pass
them as `medias` reference inputs (role `image`) on every generation:

- Real product photos: `public/img/g-*.jpg`
- Logo: `public/img/logo.png`

This locks generated boxes/ribbon/palette to Doris's *actual* packaging — the
difference between generic AI and a personalized brand campaign.

## Shared brand style block (append to every prompt)

> Style: editorial luxury gifting brand. Warm cream (#E7E0D6) and bronze-brown
> (#8A6A4A) palette, soft natural daylight, shallow depth of field, generous
> negative space, refined and quiet, premium magazine photography. No text, no
> logos, no watermark, no visible faces unless specified.

---

## 1. Home hero strip — 4 images
Model `nano_banana_2` · 2K · aspect `3:2` · count 1 per prompt

- **H1** — A single closed kraft gift box with a wide eucalyptus-green silk ribbon on a warm oak surface, dried botanicals beside it, cream linen backdrop, soft top-down daylight.
- **H2** — An open luxury gift box revealing a candle, a folded silk scarf and a handwritten card nestled in cream tissue paper, styled on a pale marble table.
- **H3** — Three stacked premium gift boxes in cream and tan tones tied with bronze ribbon, beside dried pampas grass, against a warm plaster wall.
- **H4** — Close-up of hands (no face) tying a satin ribbon bow on a gift box, warm side light, softly blurred floral background.

## 2. About hero — 1 image + 1 video
- **A1-img** — `nano_banana_2` · 2K · aspect `21:9` — Wide cinematic still of a styled gifting workshop bench: kraft boxes, ribbon spools, scissors, dried flowers in cream and bronze tones, soft window light, shallow focus.
- **A1-vid** — `seedance_2_0` (reference-locked) · 5s · `16:9` — Slow cinematic push-in over a gifting workshop bench, ribbon spools and kraft boxes, dust motes drifting in warm window light, gentle, no camera shake, no people.

## 3. CTA / Services
- **C1** — `nano_banana_2` · 2K · aspect `2:1` — A refined wall of curated gift boxes in cream and tan with soft bronze accents and dried botanicals, even editorial lighting, generous empty space at top for a headline.
- **C2** — `nano_banana_2` · 2K · aspect `3:4` — Vertical flat-lay of gift wrapping in progress: scissors, twine, kraft paper, eucalyptus on a warm wood desk, top-down, soft shadow.

## 4. Gallery additions — 4 product stills
Model `nano_banana_2` · 2K · aspect `4:5` · count 1 per prompt

- **G1** — Editorial product shot of a one-of-one keepsake gift box, monochrome cream, ribbon detail, seamless beige backdrop, studio softbox.
- **G2** — Corporate gifting set: clean box with notebook, pen and coffee sachet arranged neatly, warm tones, top-down.
- **G3** — Wedding welcome box with candle, mini champagne and sugared almonds in tissue, soft romantic daylight.
- **G4** — Holiday gift box with a spiced candle and dried orange slices, warm cozy lighting, pine accent, cream palette.

## Delivery pipeline (per asset, once generated)

1. `get_cost` preflight → report total → confirm.
2. Generate → `show_generations` / `job_display` to fetch the result URL.
3. Download → `public/img/<name>` (clip → `public/img/about-bg.mp4`).
4. Wire into `src/constants.js` `IMG` map (or About video source).
5. `npm run build` → push → CI redeploys.
