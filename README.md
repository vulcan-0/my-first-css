# my-first-css

[Learn CSS][def]

[def]: https://web.dev/learn/css

## Box Model

1. content sizing

   - min-content
   - max-content

2. areas

   - margin (contains outline & shadow)
   - border
   - padding (contains scrollbar)
   - content

3. box-sizing

   - border-box
   - content-box

## Selectors

[CSS Diner](https://flukeout.github.io/)
[Selectors Explained](https://kittygiraudel.github.io/selectors-explained)

1. Universal selector (\*)
2. Type selector (section)
3. Class selector (.my-class)
4. ID selector (#rad)
5. Attribute selector ([data-type='primary']，[data-type])
6. Grouping selectors (strong, em, .my-class, [lang])
7. Pseudo-classes (a:hover，p:nth-child(even))
8. Pseudo-element (.my-element::before，li::marker，::selection)
9. Child combinator (p > strong) `仅子节点`
10. Descendant combinator (p strong) `全部子孙节点`
11. Next sibling combinator (.top h1 + p) `紧接着的第一个兄弟节点`
12. Subsequent-sibling combinator (.top h1 ~ p) `随后的全部兄弟节点`
13. Compound selectors (a.my-class)

## The cascade

[The CSS Cascade](https://2019.wattenberger.com/blog/css-cascade)

1. Importance: transition > !important > animation > normal
2. Origin: website > user (os, browser extension) > browser
3. Specificity: inline > layer > id > class|attribute|pseudo-class > type|pseudo-element
4. Position: n > ... > 1

## Specificity

[Specificity Calculator](https://specificity.keegan.st)
[CSS Selector Specificity](https://polypane.app/css-specificity-calculator)

1. !important rule (10000)
2. Inline style attribute (1000)
3. ID selector (100)
4. Classes, attributes or pseudo-classes selector (10)
5. Elements or pseudo-elements selector (1)
6. Universal selector (0)

## Inheritance

1. inherit
2. initial
3. unset
4. revert

## Color

1. Hex Colors: #000000，#00000080
2. rgb: rgb(255, 255, 255)，rgb(100%, 100%, 100%)，rgb(0 0 0 / 50%)，rgb(0 0 0 / 0.5)
3. rgba: rgba(0, 0, 0, 50%)，(0, 0, 0, 0.5)
4. hsl: hsl(0 0% 0%)，hsl(0deg 0% 0%)，hsl(0turn 0% 0%)，hsl(0rad 0% 0%)，hsl(0 0% 0% / 50%)，hsl(0 0% 0% / 0.5)
5. hsla: hsla(0, 0%, 0%, 50%)，hsla(0, 0%, 0%, 0.5)
6. Color Keywords: purple，tomato，goldenrod

## Sizing Units

1. Numbers

   - line-height: 1.5 `字体高度的1.5倍`
   - filter: sepia(0.5) `将图像转为棕褐色，50%`
   - opacity: 0.5 `不透明度50%`
   - rgb(50, 50, 50)
   - transform: scale(1.2) `缩放1.2倍`

2. Percentages
3. Dimensions and lengths

   - Absolute lengths (以下是在 96dpi 情况下的换算，dpi：每英寸像素点数，96dpi 即每英寸 96 像素点。一般显示器为 96dpi。)

     - cm: 1cm = 96px/2.54 `厘米`
     - mm: 1mm = 1/10th of 1cm `毫米`
     - Q: 1Q = 1/40th of 1cm `1/4毫米`
     - in: 1in = 2.54cm = 96px `英寸`
     - pc: 1pc = 1/6th of 1in
     - pt: 1pt = 1/72th of 1in
     - px: 1px = 1/96th of 1in `像素`

   - Relative lengths

     - Font-size-relative units

       - em: `相对于父级字体大小的倍数，1.5em表示相对于父级字体的1.5倍`
       - rem: `相对于根元素字体大小的倍数`
       - ch: `1字符长度`
       - ex、cap、ic、lh、rlh

     - Viewport-relative units (相对于 viewport 的大小，width: 10vw 表示 10% viewport 的宽度)

       - vw、vh、vi、vb、vmin、vmax

4. Miscellaneous units

   - Angle units

## Layout

1. Flow layout

   - inline
   - block
   - inline-block
   - float `相对于父级元素`
   - position: relative，absolute，fixed

     - relative `相对于兄弟元素`
     - absolute `相对于 position 是 relative 的父级元素；如果直属父级元素不是 relative 的，则一直往上找，直到找到第一个是 relative 的；或者找到根元素，就跟 fixed 一样`
     - fixed `相对于根元素`

   - Multicolumn layout: column-count，column-gap

2. Flexbox
3. Grid

## Flexbox

1. display: flex
2. flex-direction: row，row-reverse，column，column-reverse
3. flex-wrap: wrap，nowrap
4. flex-flow: column wrap `flex-direction: column & flex-wrap: wrap`
5. direction: rtl
6. writing-mode: rl
7. flex-grow: 0 `0 can't grow，1 can grow`
8. flex-shrink: 1 `0 can't shrink，1 can shrink`
9. flex-basis: auto `auto，0`
10. flex

    - initial `flex: initial`

      - flex-grow: 0
      - flex-shrink: 1
      - flex-basis: auto

    - auto `flex: auto`

      - flex-grow: 1
      - flex-shrink: 1
      - flex-basis: auto

    - 1 `flex: 1`

      - flex-grow: 1
      - flex-shrink: 1
      - flex-basis: 0

    - flex: 1，flex: 2，flex: 3 `用在不同item中`
    - flex: 1 1 auto `flex-grow: 1，flex-shrink: 1，flex-basis: auto`

11. order
12. justify-content: flex-start，flex-end，center，space-around，space-between，space-evenly
13. align-content: stretch，flex-start，flex-end，center，space-around，space-between，space-evenly
14. place-content

    - place-content: space-between `sets both (justify-content & align-content) to space-between`
    - place-content: center flex-end `justify-content: center & align-content: flex-end`

15. align-self: flex-start，flex-end，center，stretch，baseline
16. align-items: stretch，flex-start，flex-end，center
17. margin-inline-start

```css
.parent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  direction: rtl;
  writing-mode: rl;
  justify-content: center;
  align-content: center;
  place-content: center;
  margin-inline-start: auto;
}

.child {
  flex: initial;
  flex: 1;
  flex: 1 1 auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  order: 1;
  align-self: flex-start;
  align-items: flex-start;
}
```

## Grid

1. display: grid
2. grid-template-columns: 5em 100px 30%
3. grid-template-rows: 200px auto
4. gap: 10px
5. grid-template-columns: repeat(3, min-content)

   - min-content
   - max-content
   - fit-content(10em)

6. grid-template-columns: 1fr 1fr 1fr
7. grid-template-columns: repeat(12, minmax(0, 1fr))
8. grid-template-columns: repeat(auto-fill, 200px)

   - auto-fill
   - auto-fit

9. grid-auto-flow

   - row，row dense
   - column，column dense

10. writing-mode

    - horizontal-tb
    - vertical-rl
    - vertical-lr

11. grid-row: auto / span 2，grid-column: auto / span 2
12. Placing items

    - grid-column-start
    - grid-column-end
    - grid-row-start
    - grid-row-end
    - grid-column
    - grid-row

13. Negative line numbers

    - grid-row: 1 / -1

14. grid-auto-rows: minmax(10em, auto)
15. grid-auto-columns: 100px 200px
16. grid-template-areas:\
     "header header header header"\
     "sidebar content content content"\
     "sidebar footer footer footer"

    - grid-area: header
    - grid-area: sidebar
    - grid-area: content
    - grid-area: footer

17. grid-template:\
     "head head head" minmax(150px, auto)\
     "sidebar content content" auto\
     "sidebar footer footer" auto / 1fr 1fr 1fr

18. Alignment

    - justify-content and align-content
    - justify-self and align-self
    - justify-items and align-items

```css
.parent {
  display: grid;
  grid-template-columns: 5em 100px 30%;
  grid-template-rows: 200px auto;
  gap: 10px;
  grid-auto-flow: row;
  grid-auto-rows: minmax(10em, auto);
  grid-auto-columns: 100px 200px;
  grid-template-columns:
    [main-start aside-start] 1fr
    [aside-end content-start] 2fr
    [content-end main-end];
  grid-template-areas:
    "header header header header"
    "sidebar content content content"
    "sidebar footer footer footer";
  grid-template:
    "head head head" minmax(150px, auto)
    "sidebar content content" auto
    "sidebar footer footer" auto / 1fr 1fr 1fr;
  grid: repeat(2, 80px) / auto-flow 120px;
  writing-mode: rl;
  justify-content: center;
  align-content: center;
}

.child {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-column: aside-start / aside-end;
  grid-area: header;
  align-self: flex-start;
  align-items: flex-start;
}
```

## Logical Properties

1. Block flow

   - block start
   - block end
   - block size

2. Inline flow

   - inline start
   - inline end
   - inline size

3. Sizing

```css
.my-element {
  max-width: 150px;
  max-height: 100px;
}
```

equivalents:

```css
.my-element {
  max-inline-size: 150px;
  max-block-size: 100px;
}
```

4. Start and end

```css
p {
  text-align: right;
}
```

equivalents:

```css
p {
  text-align: end;
}
```

5. Spacing and positioning

```css
.my-element {
  padding-top: 2em;
  padding-bottom: 2em;
  margin-left: 2em;
  position: relative;
  top: 0.2em;
}
```

equivalents:

```css
.my-element {
  padding-block-start: 2em;
  padding-block-end: 2em;
  margin-inline-start: 2em;
  position: relative;
  inset-block-start: 0.2em;
}
```

equivalents:

```css
.my-element {
  padding-block: 2em;
  margin-inline: 2em 0;
  position: relative;
  inset-block: 0.2em 0;
}
```

6. Borders

```css
.my-element {
  border-bottom: 1px solid red;
  border-right: 1px solid red;
  border-bottom-right-radius: 1em;
}
```

equivalents:

```css
.my-element {
  border-block-end: 1px solid red;
  border-inline-end: 1px solid red;
  border-end-end-radius: 1em;
}
```

7. Units

   - vi `1% vw`
   - vb `1% wh`

## Spacing

1. HTML spacing

   - `<br>`
   - `<hr>`

2. Margin

   - Margin shorthand

     - margin: 20px `上下左右：20px`
     - margin: 20px 40px `上下：20px，左右：40px`
     - margin: 20px 40px 30px `上：20px，左右：40px，下：30px`

   - Percentages with margin

     - margin: 20% `相对于父级元素的 20%`

   - Auto margins

     - margin-inline-start: auto `start 方向的全部可用空间设为 margin`
     - margin: 0 auto `左右方向的全部可用空间设为 margin，可达到元素居中的效果`

   - Negative margin
   - Margin collapse

下面的 margin，会折叠成 3rem。

```html
<article>
  <h1>My heading with teal margin</h1>
  <p>
    A paragraph of text that has blue margin on it, following the heading with
    margin.
  </p>
</article>
```

```css
h1 {
  margin-bottom: 2rem;
}

p {
  margin-top: 3rem;
}
```

- Preventing margin collapse

  - position、float
  - flexbox、grid

3. Padding
4. Positioning
5. Grid and flexbox

   - gap
   - row-gap
   - column-gap
