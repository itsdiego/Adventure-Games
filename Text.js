var ask= require('readline-sync');


var input = ask.question('Youre walking in the woods, There\'s no one around, and your phone is dead. Out of the corner of your eye you spot him. (run/hide)');

if (input == 'run') {

  input=ask.question ('He\'s following you, about thirty feet back. He gets on all fours and breaks into a sprint. (run/slow down) ');

  if (input == 'run' || input == 'slow down') {
    input=ask.question('HE\'S GAINING ON YOU. (jump/stop) ');

    if (input=='stop')
      console.log('HE FOUND YOU');

    if (input=='jump'){

      input=ask.question('He stops and stares at you right in the eyes, DO YOU ATTACK? (yes/no)');

      if (input=='yes') {
        console.log('....');
        console.log('BOOM');
        console.log('  ');
        console.log('He had a gun');
      }
    }
      if (input='no')
        input=ask.question('HE\'S RUNNING RIGHT AT YOU!!(fetal position/run away)');

        if (input=='fetal position'){
          console.log('You died.....')
          console.log('F*cking idiot.... ');
            return;
        }
        if (input=="run away"){
          console.log('You can\'t run anymore....');
        }

        input=ask.question('FOUND A SHARP OBJECT! (stab/hide)');

        if (input=='stab'){
          console.log('No one can stab a level 9 celebrity')
        }
      }
  }


if (input=='hide'){

    input = ask.question ('You hear him behind you.(run/keep hiding)');

    if (input=='run' || 'keep hiding'){

      input = ask.question('You see a cabin in the dark. (enter/ignore)');

        if (input=='enter'){

          ask.question('Do you enter through the front door or back door? (front/back)');

          if (input=='front'){
            console.log('OUCH! THE DOOR KNOB WAS COVERED IN NEEDLES! You can no longer use your hands ');
            input=ask.question("WHAT DO YOU DO?(backdoor/ignore)")
          }

          if (input=='back')
            console.log('smart move')
            console.log('YOU FOUND SOME MATCHES!')
            input=ask.question('You\'re inside the house. It\'s very dark. You hear some footsteps. (use matches/walk into dark)');

          if (input=='use matches')
              console.log('You see a rat and walk back, AH YOUR FOOT, IT\'S CAUGHT IN A BEAR TRAP!!');

            if (input=='walk into dark'){
              console.log('The ceiling is dripping some liquid')
              input=ask.question('Use matches?(yes/no)')

              if (input=='no')
                console.log('YOU\'VE FALLEN DOWN A PIT! You hear a voice say \'It puts the lotion on the skin or else it gets the hose again...')

              if (input=='yes'){
                input=ask.question('You see a chair at the end of the room. Sitting on it is Shia LaBeouf. HE\'S SHARPENING A KNIFE! (/) ');

              }
            }

        }
        if (input=='ignore'){
          console.log('SHIA STABS YOU FROM BEHIND')
          console.log('you died')
        }
    }
}
