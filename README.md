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

[Everything You Need To Know About CSS Margins](https://www.smashingmagazine.com/2019/07/margins-in-css/)

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

## Pseudo-elements

1. ::before and ::after
2. ::first-letter
3. ::first-line
4. ::backdrop
5. ::marker
6. ::selection
7. ::placeholder
8. ::cue

## Pseudo-classes

[CSS TRICKS :nth Tester](https://css-tricks.com/examples/nth-child-tester/)

[Quantity Queries Builder](https://quantityqueries.com/)

1. Interactive states

   - :hover
   - :active
   - :focus, :focus-within, and :focus-visible
   - :target

2. Historic states

   - :link
   - :visited

3. Form states

   - :disabled and :enabled
   - :checked and :indeterminate
   - :placeholder-shown
   - Validation states

     - :valid and :invalid
     - :in-range

4. Selecting elements by their index, order and occurrence

   - :first-child and :last-child
   - :only-child
   - :first-of-type and :last-of-type
   - :nth-child and :nth-of-type

     - :nth-child(2)
     - :nth-child(even)
     - :nth-child(3n+3)

   - :only-of-type

5. Finding empty elements

   - :empty

6. Finding and excluding multiple elements

   - :is()
   - :not()

## Borders

1. Border properties

   - border-width `thin，medium，thick，px, em, rem or %。默认：medium`
   - border-style `none，hidden，dotted，dashed，solid，double，groove，ridge，inset，outset`
   - border-color `默认使用：currentColor`
   - Shorthand `border: 1px solid red;`

2. Logical properties

   - border-block `top，bottom`
   - border-inline `left，right`

3. Border radius

   - border-radius: 1em
   - border-radius: 1em 2em 3em 4em
   - border-radius: 95px 155px 148px 103px / 48px 95px 130px 203px
   - border-top-left-radius: 1em 2em

4. Border images

   - border-image-source

     - url('path/to/image.png')
     - linear-gradient(to bottom, #000, #fff) `线性渐变`

   - border-image-slice

     - border-image-slice: 61 58 51 48 `上右下左方向的切线位置，切成九宫格`
     - border-image-slice: 30
     - border-image-slice: 30 fill `fill 代表中间的填充`

   - border-image-repeat

     - stretch `拉伸填充`
     - repeat `重复填充`
     - round `重复填充+拉伸调整`
     - space `重复填充+间隙调整`

   - border-image-width
   - border-image-outset `border-image 与 border 之间的间隙`

## Shadows

1. Box shadow

   - box-shadow: 5px 5px 20px 5px #000 `Horizontal offset，Vertical offset，Blur radius，Spread radius，Color`
   - box-shadow: inset 5px 5px 20px 5px #000
   - box-shadow: 5px 5px 20px 5px darkslateblue, -5px -5px 20px 5px dodgerblue, inset 0px 0px 10px 2px darkslategray, inset 0px 0px 20px 10px steelblue
   - `会受 border-radius 和 overflow: hidden 的影响`

2. Text shadow

   - text-shadow: 3px 3px 3px hotpink
   - text-shadow: 1px 1px 0px white, 2px 2px 0px firebrick
   - `没有 spread 和 inset，透明字也会有阴影`

3. Drop shadow

   - filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%))
   - filter: drop-shadow(0px 0px 10px hotpink) drop-shadow(10px 10px 20px rgba(0 0 0 / 30%))
   - `没有 spread 和 inset，应用于图片`

## Focus

1. tabindex `负数，0，正数`
2. focus

```css
a:focus {
  outline: 2px solid slateblue;
  outline-offset: 6px;
}

button:focus {
  outline: none;
  box-shadow: 0px 0px 0px 3px #192a56;
}
```

## Z-index and stacking contexts

[层叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)

## Functions

1. Functional selectors

```css
.post :is(h1, h2, h3) {
	line-height: 1.2;
}
```

2. Custom properties and var()

```css
:root {
	--base-color: #ff00ff;
}

.my-element {
	background: var(--base-color, hotpink);
}
```

3. Functions that return a value

- ttr(), url() 

4. Color functions

- rgb(), rgba(), hsl(), hsla(), hwb(), lab() and lch()

5. Mathematical expressions

- calc()

```css
.my-element {
	width: calc(100% - 2rem);
}
```

- min() and max()

```css
.my-element {
  width: min(20vw, 30rem);
  height: max(20vh, 20rem);
}
```

- clamp(), The clamp() function takes three arguments: the minimum size, the ideal size and the maximum.

```css
h1 {
  font-size: clamp(2rem, 1rem + 3vw, 3rem);
}
```

6. Shapes

- circle(), ellipse(), inset() and polygon()

```css
.circle {
  clip-path: circle(50%);
}

.polygon {
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}
```

7. Transforms

- rotate(), rotateX(), rotateY(), rotateZ() and rotate3d() `旋转`
- scale(), scaleX(), scaleY(), scaleZ() and scale3d() `缩放`
- translate(), translateX(), translateY(), translateZ() and translate3d() `平移`
- skew(), skewX(), skewY() `倾斜`
- perspective `透视`

```css
.my-element {
  transform: rotateX(10deg) rotateY(10deg) rotateZ(10deg);
}
```

8. Animation functions, gradients and filters

## Gradients

[conic.css](https://www.conic.style/)

[Ultimate CSS Gradient Generator](https://www.colorzilla.com/gradient-editor/)

1. Linear gradient

```css
.my-element {
  background: linear-gradient(black, white);
}

.my-element {
  background: linear-gradient(to right, black, white);
}

.my-element {
  background: linear-gradient(45deg, darkred 30%, crimson);
}

.my-element {
  background: linear-gradient(45deg, darkred 20%, crimson, darkorange 60%, gold, bisque);
}
```

2. Radial gradient

```css
.my-element {
  background: radial-gradient(white, black);
}

.my-element {
  background: radial-gradient(closest-side, darkorange 50%, gold, bisque, darkred 20%, crimson);
}
```

3. Conic gradient

```css
.my-element {
  background: conic-gradient(white, black);
}

.my-element {
  background: conic-gradient(from 10deg at 20% 30%, white, black);
}

.my-element {
  background: conic-gradient(
     gold 20deg, lightcoral 20deg 190deg, mediumturquoise 190deg 220deg, plum 220deg 320deg, steelblue 320deg);
  border-radius: 50%;
  border: 10px solid;
}
```

4. Repeating and mixing

```css
.my-element {
  background: repeating-linear-gradient(
    45deg,
    red,
    red 30px,
    white 30px,
    white 60px
  );
}

.my-element {
  background: linear-gradient(-45deg, blue -30%, transparent 80%), linear-gradient(45deg, darkred 20%, crimson, darkorange 60%, gold, bisque);
}
```

## Animations

1. @keyframes

```css
@keyframes my-animation {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes my-animation {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
```

2. animation-duration

```css
.my-element {
  animation-duration: 10s;
}
```

3. animation-timing-function: linear, ease, ease-in, ease-out, ease-in-out

- [cubic-bezier](https://cubic-bezier.com/)

```css
.my-element {
  animation-timing-function: ease-in-out;
}

.my-element {
  animation-timing-function: cubic-bezier(.42, 0, .58, 1);
}

.my-element {
  animation-timing-function: steps(10, end);
}
```

1. animation-iteration-count

- infinite: `无限循环`

```css
.my-element {
  animation-iteration-count: 10;
}

.my-element {
  animation-iteration-count: infinite;
}
```

1. animation-direction: normal, reverse, alternate, alternate-reverse

```css
.my-element {
  animation-direction: reverse;
}
```

6. animation-delay

```css
.my-element {
  animation-delay: 5s;
}
```

7. animation-play-state: running, paused

```css
.my-element:hover {
  animation-play-state: paused;
}
```

8. animation-fill-mode: forwards, backwards, both

```css
.my-element:hover {
  animation-fill-mode: forwards;
}
```

9. The animation shorthand

- order
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode
  - animation-play-state

```css
.my-element {
  animation: my-animation 10s ease-in-out 1s infinite reverse forwards running;
}
```