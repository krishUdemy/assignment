//import the Polymer library
import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js"; //import the template repeater

import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

class EmployeeList extends PolymerElement {
  constructor() {
    super();
    /* TODO:
     * - Change the first and last names inside this.employees
     * - Add another employee by inserting another object
     *   into the array definition after Tony Mori:
     *   {first: 'Shawna', last: 'Williams'}
     *   Remember to make sure your commas are correct!
     */

    this.employees = [{
      first: 'Yeshu',
      last: 'Anthati'
    }, {
      first: 'Ayesha',
      last: 'Johnson'
    }, {
      first: 'Fatma',
      last: 'Kumari'
    }, {
      first: 'John',
      last: 'Doe'
    }];
  }

  static get template() {
    return html`
    <div> Employee list: </div>
    <p></p>
    <template is="dom-repeat" items="{{employees}}">
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
        <p></p>
    </template>
    `;
  }

}

customElements.define('employee-list', EmployeeList);