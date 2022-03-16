import IconOpen from './icon-open'
import IconClose from './icon-close'
import Indent from './indent'

const renderNode = (item, toggle) => (
  <div style={{ paddingLeft: `${24 * (item.level - 1)}px` }}>
    {
      item.children
        ? item.open
          ? <IconOpen onClick={() => toggle(item)} />
          : <IconClose onClick={() => toggle(item)} />
        : <Indent />
    }
    {item.label}
  </div>
)

export default renderNode