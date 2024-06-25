import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';

// type User ={
//   id: string,
//   avatar: string,
//   name: string
// };

//Or

interface User{
  id: string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Decorator method
  // In Angular, an input property is a way to pass data from a parent
  // component to a child component. It's a key feature of Angular's component architecture.

  //The function of an input property is to:

  // 1. Allow data to be passed from a parent component to a child component.
  // 2. Enable the child component to receive and display the data.
  // 3. Create a one-way data binding between the parent and child components.

  //Decorator method for Input
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //Best way to the above code
  // @Input({required:true}) user!:{
  //   id: string,
  //   avatar: string,
  //   name: string
  // };

  //Better way
  @Input({required:true}) user!:User;

  //function methed for input
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  //Decorator method for Output
  @Output() select = new EventEmitter(); //Decorator

  //function method for output
  //select = output<string>(); //function

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
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
    this.select.emit(this.user.id);
  }
}
