import { trigger, style, state, animate, transition, AnimationMetadata } from '@angular/animations';

export class MarkerAnimations {

  SetTrigger(nameTrigger: string, setNewsStates?: AnimationMetadata[], setNewTransitions?: AnimationMetadata[]): any {
    let metaData: AnimationMetadata[] = animationStyle();
    if (setNewsStates) {
      metaData.concat(setNewsStates);
    }

    if (setNewTransitions) {
      metaData.concat(setNewTransitions);
    }

    return trigger(nameTrigger, metaData);
  }
}

function animationStyle(): any[] {
  const anims = [
    state('false', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    transition('false => true', animate(3000))
  ];
  return anims;
  // let retArr = [];
  // retArr.push(state('inactive', style({
  //     backgroundColor: '#eee',
  //     transform: 'scale(1)'
  // })));

  // retArr.push(state('active', style({
  //     backgroundColor: '#cfd8dc',
  //     transform: 'scale(1.1)'
  // })));

  // retArr.push(
  //     transition('inactive => active', animate('100ms ease-in'))
  // );

  // retArr.push(
  //     transition('active => inactive', animate('100ms ease-out'))
  // );

  // return retArr;
}
