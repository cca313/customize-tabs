import { defineComponent, reactive } from 'vue'
import './index.less'
interface ITabProps {
  name: string
  value: unknown
}

export default defineComponent({
  name: 'Tabs',
  setup() {
    const list = reactive([
      { name: '标签页1', value: '1' },
      { name: '标签页2', value: '2' },
      { name: '标签页3', value: '3' },
      { name: '标签页4', value: '4' },
      { name: '标签页5', value: '5' },
    ])
    return () => (
      <>
        <div class="tab-nav-box">
          {list.map((tabNav: ITabProps) => (
            <div class="tab-nav">
              <div class="tab-nav-content">
                <span class="tab-nav-title">{tabNav.name}</span>
              </div>
              <div class="tab-nav__close">x</div>
            </div>
          ))}
        </div>

        <div class="tab-pane">tabpane</div>
      </>
    )
  },
})
