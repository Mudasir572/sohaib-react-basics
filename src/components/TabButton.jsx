export default function tabButton({selectedTopic,changeSelectedTopic,children}){
    return <li>
    <button className={selectedTopic ? 'active': ""} onClick={changeSelectedTopic}>{children}</button>
  </li>
}