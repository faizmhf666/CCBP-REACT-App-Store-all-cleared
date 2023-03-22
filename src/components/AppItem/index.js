// Write your code here
import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p className="app-item-title">{appName}</p>
    </li>
  )
}

export default AppItem
