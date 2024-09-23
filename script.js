

let text = prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math');

let question
let answer

userChooise=text.toLowerCase();


switch(true){

    case userChooise === 'strings' || userChooise === '1':
        question=prompt('question = "რა არის typeof(5)?')
        console.log(question);
        answer=question.toLocaleLowerCase();
        if(answer === 'number'){
            console.log('correct answer');
        }else{
            console.log('samwuxarod ver gamoicani');
        }
        break;


    case userChooise === 'variable' || userChooise === '2':
        question=prompt("შეიძლება თუ არა let-ის რედეკლალირება")
        console.log(question);
        answer=question.toLocaleLowerCase();
        if(answer === 'yes'){
            console.log('correct answer');
        }else{
            console.log('samwuxarod ver gamoicani');
        }
        break;


    case userChooise === 'math'  || userChooise === '3':
        question=prompt("რას აბრუნებს console.log(Math.floor(2.1)) ")
        console.log(question);
        answer=question.toLocaleLowerCase();
        if(answer === 'ori'){
            console.log('correct answer');
        }else{
            console.log('samwuxarod ver gamoicani');
        }
        break;


    default:
        console.log('try again... ');
    break;



}


