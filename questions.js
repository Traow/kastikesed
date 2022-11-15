import inquirer from 'inquirer';

inquirer
    .prompt([
        {type:'number', name:'number', message:'How old are you?'},
        {type:'input', name:'name', message:'what is ur name?'},
        
        {type:'list', name:'list', message:'what is ur fav color?', choices:['red', 'green', 'blue']},
        {type:'rawlist', name:'rawlist', message:'How many people are you living with?', choices:['1', '2', '3','4+']},
        {type:'checkbox', name:'checkbox', message:'Check what numbers you like?', choices: ['1', '2', '3','4']},
        
        {type:'password', name:'password', message:'What is ur password?'},
        {type:'input', name:'location', message:'Where are you now?'},
        {type:'confirm', name:'confirm', message:'Are you scared?'},


        
    ])
    .then((answers)=>{
        console.log(`I am  ${answers.number} yrs old` );
        console.log(`My name is ${answers.name}`);
        console.log(`My fav color is ${answers.list}`);
        console.log(`You live with ${answers.rawlist} people`);
        console.log(`You like ${answers.checkbox}`);
        console.log(`My password is ${answers.password}`);
        console.log(`Right now I am at ${answers.location}`);
        console.log(`Am I scared? ${answers.confirm}`);
    })
