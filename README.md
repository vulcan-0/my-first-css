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
   - float
   - position: relative，absolute，fixed
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
