import { defineComponent, reactive } from 'vue'
import './index.less'
interface ITabProps {
  name: string
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
        <div>
          <div class="tab-nav">
            <div class="tab-nav-box">
              <div class="tab-nav-title">321</div>
            </div>
            <div class="tab-nav-box">
              <div class="tab-nav-title">321</div>
            </div>
          </div>
          <div class="tab-pane">tabpane</div>
          {list.map((tab: ITabProps) => {
            return <div>{tab.name}</div>
          })}
        </div>
      </>
    )
  },
})
