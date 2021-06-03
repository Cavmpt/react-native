import * as React from 'react'

export interface INotificationBoundaryProps {
  children: any
}

export default function NotificationBoundary(
  props: INotificationBoundaryProps,
): JSX.Element {
  const {children} = props
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
