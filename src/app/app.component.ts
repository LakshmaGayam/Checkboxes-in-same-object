import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  newObject = [ {
    name: 'Location',
    childArray : [{
      childName: 'LeftEye',
      status: true
    },
    {
      childName: 'RightEye',
      status: true
    }]
  },{
      name: 'Quality',
    childArray : [{
      childName: 'Aching',
      status: true
    },
    {
      childName: 'Dull',
      status: true
    }]
  }]

  getCheckedItems() {
    let reurnValue = false;
    if(this.newObject) {
 this.newObject.forEach((res) => {
   res.childArray.forEach((child) => {
console.log(child)
   })
    })
  }
    }

    onChange(event , obj ,index ,childIndex) {
      if(event.target.checked) {
        // console.log(i)
         this.newObject[index].childArray[childIndex].status = true;
      } else {
        // console.log(obj ,index)
        // this.newObject.forEach((res) => {
        //   res.childArray[index].status = false;
        // })
        this.newObject[index].childArray[childIndex].status = false;
      }
console.log(this.newObject)
    }

    getJson() {
      alert(JSON.stringify(this.newObject))
    }

}
