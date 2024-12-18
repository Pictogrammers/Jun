# Jun Mono & Jun Sans

https://pictogrammers.github.io/@pictogrammers/jun/

- Jun Mono
  - 20pt Monospace Pixel Font
- Jun Regular (Work in Progress)
  - 20pt Sans Serif Pixel Font
- Jun Condensed (Work in Progress)
  - 20pt Sans Serif Pixel Font

## Usage

The fonts can be used by installing them locally or embedding them into a website.

### Desktop

- Jun Mono - [Download Desktop](./JunMono.otf)
- Jun Sans - [Download Desktop](./JunSans.otf)

### Web

The webfont is only supported in the `.woff2` format.

- Jun Mono Webfont - [Download Webfont](./jun-mono.woff2)
- Jun Sans Webfont - [Download Webfont](./jun-sans.woff2)

```css
@font-face {
    font-family: 'Jun Mono Webfont';
    src: url('jun-mono.woff2') format("woff2");
}

html {
    font-family: 'Jun Mono Webfont';
    line-height: 22px;
    font-size: 20px;
    font-smooth: never;
    -webkit-font-smoothing: none;
}
```

## Contribution

Please create an issue if you run into issues with the font files or to request a missing character.

## Development

- Build `npm run build`

This repo is purely for distribution. The `jun_mono/*` folder contents are generated by the Pictogrammers tooling.
