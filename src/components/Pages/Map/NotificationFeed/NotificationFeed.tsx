import * as React from 'react'

import './NotificationFeed.scss'

export interface INotificationFeedProps {
  placeholder?: null
}

const notifications = [
  {message: 'Drone recharging'},
  {message: 'alert 1'},
  {message: 'emergency recall 1'},
  {message: 'alert 1'},
  {message: 'drone 2 battery change'},
  {message: 'solar pannel issue'},
]

export default function NotificationFeed(
  props: INotificationFeedProps,
): JSX.Element {
  return (
    <div className='notification-feed' data-testid='notification-feed'>
      <span className='notification-feed__title'>Activity</span>
      <div className='notification-feed__feed'>
        {notifications.map(item => (
          <div className='notification-feed__item'>
            <i className='fas fa-question-circle' />
            <span className='notification-feed__text'> {item.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
