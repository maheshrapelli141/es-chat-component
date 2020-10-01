import * as React from 'react'
import styles from './styles.module.css'

import { ChatHeader } from './components/ChatHeader/ChatHeader';

interface Props {

}

export const ExampleComponent = ({ }: Props) => {
  return <div className={styles.mainFrame}>
  	<ChatHeader />
  	<ul className={styles.chatList}>
  		<li><img src="https://swapperswall.com/images/default-user.png" height="50px" width="50px"/></li>
  		<li>
  			<ul className={styles.chatList}>
	  		<li>Mahesh Rapelli (0xcbDCc863C74A1f63f4FF0867695649364E88b874)</li>
	  		<li>Hello Mahesh</li>
	  		</ul>
	  	</li>
  	</ul>
  </div>
}
