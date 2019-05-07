import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'my-marauders-map',
  styleUrl: 'my-marauders-map.css',
  shadow: true,
})
export class MyMaraudersMap {
  /**
   * The first name
   */
  @Prop()
  reader: string

  render() {
    return (
      <div>
        <p>
          Mr Moony presents his compliments to {this.reader}, and begs them to
          keep their abnormally large nose out of other people's business.
        </p>

        <p>
          Mr Prongs agrees with Mr Moony, and would like to add that
          {this.reader} is an ugly git.
        </p>

        <p>
          Mr Padfoot would like to register his astonishment that an idiot like
          that ever became a Professor.
        </p>

        <p>
          Mr Wormtail bids {this.reader} good day, and advises them to wash
          their hair, the slimeball.
        </p>
      </div>
    )
  }
}
