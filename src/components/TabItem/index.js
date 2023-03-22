import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, isSelected} = props
  const {tabId, displayText} = tabDetails
  const selectedTabClass = isSelected ? 'selected-tab-btn' : ''

  const onChangeList = () => {
    changeTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${selectedTabClass}`}
        onClick={onChangeList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
