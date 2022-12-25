import React from 'react'

/**
 * Компонент Widget группирует компоненты и элементы
 */

export default function Widget({children, title, ...props}) {
  return (
    <section {...props}>
      {title && <h4>{title}</h4>}
      {children}
    </section>
  )
}
