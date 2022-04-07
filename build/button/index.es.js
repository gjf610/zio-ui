import { computed, defineComponent, toRefs, createVNode } from "vue";
const buttonProps = {
  variant: {
    type: String,
    default: "outline"
  },
  size: {
    type: String,
    default: "md"
  },
  color: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
};
function useButton(props) {
  const colorMap = {
    solid: "primary",
    outline: "secondary",
    text: "secondary"
  };
  const defaultColor = colorMap[props.variant];
  console.log(props.loading);
  const classes = computed(() => ({
    "zioui-btn": true,
    [`zioui-btn-${props.variant}`]: true,
    [`zioui-btn-${props.variant}-${props.color || defaultColor}`]: true,
    [`zioui-btn-${props.size}`]: true
  }));
  return { classes };
}
var button = "";
var Button = defineComponent({
  name: "ZButton",
  emits: ["click"],
  props: buttonProps,
  setup(props, ctx) {
    const {
      disabled,
      loading
    } = toRefs(props);
    const {
      classes
    } = useButton(props);
    const onClick = (e) => {
      ctx.emit("click", e);
    };
    return () => {
      var _a, _b;
      return createVNode("button", {
        "class": classes.value,
        "disabled": disabled.value,
        "onClick": onClick
      }, [loading.value && createVNode("span", {
        "class": "zioui-btn-loading"
      }, null), (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
};
var index = {
  title: "Button \u6309\u94AE",
  category: "\u901A\u7528\u7EC4\u4EF6",
  status: "0%",
  install(app) {
    app.use(Button);
  }
};
export { Button, index as default };
