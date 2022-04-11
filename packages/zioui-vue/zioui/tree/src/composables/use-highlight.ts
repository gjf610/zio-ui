import { ref, Ref } from 'vue';

interface TypeHighlightClass {
  [key: string]: 'active' | '' | 'zioui-tree_isDisabledNode';
}
type TypeUseHighlightNode = () => {
  nodeClassNameReflect: Ref<TypeHighlightClass>;
  handleClickOnNode: (index: string) => void;
  getNodeIdRef: (isDisabled: boolean, ...keys: Array<string>) => string;
};

const HIGHLIGHT_CLASS = 'active';
const IS_DISABLED_FLAG = 'zioui-tree_isDisabledNode';
const useHighlightNode: TypeUseHighlightNode = () => {
  const nodeClassNameReflectRef = ref<TypeHighlightClass>({});
  const prevActiveNodeKey = ref<string>('');
  const getNodeId = (isDisabled = false, ...keys) => {
    const key = keys.join('-');
    nodeClassNameReflectRef.value[key] = isDisabled
      ? IS_DISABLED_FLAG
      : nodeClassNameReflectRef.value[key] || '';
    return key;
  };
  const handleClick = (key) => {
    if (nodeClassNameReflectRef.value[key] === IS_DISABLED_FLAG) { return; }
    if (prevActiveNodeKey.value === key) { return; }
    if (prevActiveNodeKey.value) { nodeClassNameReflectRef.value[prevActiveNodeKey.value] = ''; }
    nodeClassNameReflectRef.value[key] = HIGHLIGHT_CLASS;
    prevActiveNodeKey.value = key;
  };
  return {
    nodeClassNameReflect: nodeClassNameReflectRef,
    handleClickOnNode: handleClick,
    getNodeIdRef: getNodeId
  };
};
export default useHighlightNode;