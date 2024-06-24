import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

//NOTE: the capita letter Input is a decorator while the small letter is special function

//Since signal is new to angular I will go with decorator


//signal method
  //avatar = input('');
  //avatar = input<string>('');
  
  //Or better put
  //avatar = input.required<string>(); // this is better than decorator
  //name = input.required<string>();

  //using singnal for imagePath
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar;
  // });


  onSelectUser() {



  }
}
