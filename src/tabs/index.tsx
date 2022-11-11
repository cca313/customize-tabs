import { defineComponent, reactive, ref, PropType } from 'vue'
import {
  TTabPosition,
  TTabSize,
  TTabType,
  TTabEffect,
  TTabActiveName,
  onBeforeLeave,
} from './type'
import './index.less'

interface ITabsProps {
  activeName: TTabActiveName
  disabled: boolean
  effect: TTabEffect
}
export type tabsEmits = {
  'update:modelValue': (name: TTabActiveName) => void
}
export const tabsProps = {
  modalValue: {
    type: [String, Number],
  },
  activeName: {
    type: [String, Number] as PropType<TTabActiveName>,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<TTabEffect>,
  },
  size: {
    type: String as PropType<TTabSize>,
    default: 'middle',
  },
  position: {
    type: String as PropType<TTabPosition>,
    default: 'top',
  },
  type: {
    type: String as PropType<TTabType>,
    default: 'line',
  },
  beforeLeave: {
    type: Function as PropType<onBeforeLeave>,
  },
}

export default defineComponent({
  name: 'Tabs',
  props: {},
  setup(props, { emit, slots, expose }) {
    const list = reactive([
      { name: '标签页1', value: '1' },
      { name: '标签页2', value: '2' },
      { name: '标签页3', value: '3' },
      { name: '标签页4', value: '4' },
      { name: '标签页5', value: '5' },
    ])
    // 位置
    const position = 'right'
    // 容器类名
    const containerClass = ''
    // 选中key
    const activeKey = ref(0)
    const $nav = ref()
    const funcPromise = () =>
      new Promise((resolve, reject) => {
        // setTimeout(() => { reject(false) },1000)
        reject(false)
      })
    const funcBoolean = () => {
      return false
    }
    const handleTabNavClick = async (event: MouseEvent, index: number) => {
      console.log(event, index)
      // todo 在点击事件里判断beforeleave的条件
      // const flag = funcBoolean()
      // const flag1 =
      // console.log(funcBoolean())
      try {
        const flag = await funcPromise()
        if (flag !== false) {
          activeKey.value = index
        }
        console.log(flag, 'flag')
        activeKey.value = index
      } catch (error) {}
    }
    // const setCurrentTabName = (tabName:string) => {
    //   // if (currentName !== value && this.beforeLeave) {
    //   //   const before = this.beforeLeave(value, this.currentName);
    //   //   if (before && before.then) {
    //   //     before
    //   //       .then(() => {
    //   //         changeCurrentName();
    //   //         this.$refs.nav && this.$refs.nav.removeFocus();
    //   //       }, () => {
    //   //         // https://github.com/ElemeFE/element/pull/14816
    //   //         // ignore promise rejection in `before-leave` hook
    //   //       });
    //   //   } else if (before !== false) {
    //   //     changeCurrentName();
    //   //   }
    //   // } else {
    //   //   changeCurrentName();
    //   // }
    // }
    // const setCurrentName = async (value?: number) => {
    //   // should do nothing.
    //   if (activeKey.value === value || typeof(value) === 'undefined') return

    //   try {
    //     const canLeave = await
    //     if (canLeave !== false) {
    //       changeCurrentName(value)

    //       // call exposed function, Vue doesn't support expose in typescript yet.
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-expect-error
    //       nav$.value?.removeFocus?.()
    //     }
    //   } catch {}
    // }

    return () => (
      <>
        <div
          class={[
            'tabs-container',
            position ? `tabs-container--${position}` : '',
          ]}
        >
          <div
            class={['tab-nav-box', position ? `tab-nav-box--${position}` : '']}
          >
            {list.map((tabNav: ITabProps, idx: number) => (
              <div
                class={[
                  'tab-nav',
                  activeKey.value === idx ? 'tab-nav--active' : '',
                ]}
                key={idx}
              >
                <div
                  class="tab-nav-content "
                  onClick={e => handleTabNavClick(e, idx)}
                >
                  <span class="tab-nav-title tab-nav__active">
                    {tabNav.name}
                  </span>
                </div>
                <div class="tab-nav__close">x</div>
              </div>
            ))}
          </div>

          <div class={['tab-pane', position ? `tab-pane--${position}` : '']}>
            {activeKey.value}
          </div>
        </div>
      </>
    )
  },
})
