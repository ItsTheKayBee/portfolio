import type { JSX as ReactJSX } from 'react'

declare global {
  namespace JSX {
    type Element = ReactJSX.Element
    type ElementClass = ReactJSX.ElementClass
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<C, P>
    type IntrinsicAttributes = ReactJSX.IntrinsicAttributes
    type IntrinsicClassAttributes<T> = ReactJSX.IntrinsicClassAttributes<T>
    type IntrinsicElements = ReactJSX.IntrinsicElements
  }
}
