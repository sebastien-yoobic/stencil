import { Component, State, Method } from '../../../../dist';


@Component({
  tag: 'slot-map-state-update-root'
})
export class SlotMapStateUpdateRoot {

  @State() items: Array<string> = ['a', 'b', 'c'];


  @Method()
  addItem(item: string) {
    this.items = [...this.items, item];
  }

  render() {
    return <slot-map-state-update>
      {this.items.map(item =>
        <div><input type="text" value={item}/></div>
      )}
    </slot-map-state-update>
  }

}
