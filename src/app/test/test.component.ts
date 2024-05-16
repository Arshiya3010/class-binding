import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  template: `<h2>
  welcome {{name}}
  </h2>
  <h2 class="text-success">codeevlovution</h2>
  <h2 [class]="successclass">code evloution</h2>
  <h2 class="text-special" [class]="successclass">codeevolution</h2>
  <h2 [class.text-danger]="haserror">codeevolution</h2>
  <h2 [ngClass]="messageclasses">code evolution</h2>
  <button [class.highlight]="buttonclass">click me</button>
  
  <h2 [style.color]="'orange'">style binding </h2>
 <h2 [style.color]="haserror ? 'red':'green'">style binding</h2>
 <h2 [style.color]="highlightColor">style binding </h2> 
 <h2 [ngStyle]="titlestyles">style binding 3</h2>
 
 <div [style.color]="textcolor">dynamic text color</div>
 
 <button (click)="onClick()">greet</button>
 {{greeting}}
 <input #myinput type="text">
 <button (click)="logInputValue(myinput.value)">log</button>
 <h3 *ngIf="isLoggedIn; else elseblock">arsh</h3>
 <ng-template #elseblock>
 <h3>name is hidden </h3>
 </ng-template>

 <h4 *ngIf="isLoggedIn; then thenBlock; ekse elseBlock"></h4>
 <ng-template #thenBlock>
  <h4>code evolution </h4>
</ng-template>
 
 `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  .highlight{
    color:yellow;
  }
  
  `]
})
export class TestComponent {
  public name="arsh";
  public successclass="text-success";
  public haserror=false;
  public isspecial=true;
  public messageclasses={
    "text-success":!this.haserror,
    "text-danger":this.haserror,
    "text-special":this.isspecial,
  }
  public highlightColor="blue";
  public buttonclass="highlight";
  public titlestyles={
    color:"brown",
    fontStyle:"italic",
  }
  public textcolor="blue"

  onClick(){
      this.greeting="welcome to code evolution";
      return "code evolution";

  }
  isLoggedIn=false;
  public greeting="";

  constructor(){
  }
  ngOnInit(){
  }
  logInputValue(value:string){
    console.log(value);

  }
}
