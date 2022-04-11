import { defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps, TreeItem } from './tree-types'
import IconOpen from './components/icon-open'
import IconClose from './components/icon-close'
import useToggle from './composables/use-toggle'
import useHighlightNode from './composables/use-highlight'
import './tree.scss'

export default defineComponent({
  name: 'ZTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)
    const { nodeClassNameReflect, getNodeIdRef, handleClickOnNode } = useHighlightNode();

    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block; width: 16px; height: 16px;"></span>
    }

    const renderIcon = (item: TreeItem) => {
      return item.children
        ? <span class={item.disableToggle && 'toggle-disabled'}>
          {
            item.open
              ? <IconOpen class="mr-xs" onClick={() => toggle(item)} /> // 给节点绑定点击事件
              : <IconClose class="mr-xs" onClick={() => toggle(item)} /> // 给节点绑定点击事件
          }
        </span>
        : <Indent />
    }

    const renderNode = (item: TreeItem) => {
      const { key = "", label, disabled, open, level } = item
      const nodeId = getNodeIdRef(disabled, key, label)
      return (
        <div
          class={['zioui-tree-node', open && 'zioui-tree-node__open']}
          style={{ paddingLeft: `${24 * (level - 1)}px` }}
        >
          <div class={['zioui-tree-node__content', `${nodeClassNameReflect.value[nodeId]}`]}
            onClick={() => handleClickOnNode(nodeId)}>
            <div class="zioui-tree-node__content--value-wrapper">
              {renderIcon(item)}
              <span class="zioui-tree-node__title">{label}</span>
            </div>
          </div>
        </div>
      )
    }

    return () => {
      return (
        <div class="zioui-tree">
          {openedData.value.map((item: TreeItem) => renderNode(item))}
        </div>
      )
    }
  }
})