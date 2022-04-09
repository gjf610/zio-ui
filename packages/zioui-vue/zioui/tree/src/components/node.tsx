import IconOpen from './icon-open'
import IconClose from './icon-close'
import Indent from './indent'
import { TreeItem } from '../tree-types'
const renderNode = (item: TreeItem, toggle: any) => (
  <div style={{ paddingLeft: `${24 * (item.level - 1)}px` }}>
    {
      item.children
        ? item.open
          ? <IconOpen onClick={() => toggle(item)} />
          : <IconClose onClick={() => toggle(item)} />
        : <Indent />
    }
    <span class={['zioui-tree-node__title']}>{item.label}</span>
  </div>
)

export default renderNode