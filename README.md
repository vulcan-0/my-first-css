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
