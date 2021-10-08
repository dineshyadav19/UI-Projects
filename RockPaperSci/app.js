function selectOption(element) {
    let humanResponse = element.dataset.selection;
    let icon = element.innerText;
    document.querySelector("#human_player").innerText = icon;

    let options = ['r', 'p', 's']
    const getOptions = Math.floor(Math.random() * 3);
    let computerOption = options[getOptions];
    let computerIcon = '';
    switch(computerOption) {
        case 'r':
            computerIcon = '🤘🏻'; 
            break;
        case 'p':
            computerIcon = '📰';
            break;
        case 's':
            computerIcon = '✂';
            break;
    }
    document.querySelector('#computer_player').innerText = computerIcon;

    //winning logic
    if((humanResponse == 'p' && computerOption == 'r') || (humanResponse == 's' && computerOption == 'p') || (humanResponse == 'r' && computerOption == 's')){
        document.querySelector('#result').innerText = 'Human Won';
    } else if(humanResponse === computerOption) {
        document.querySelector('#result').innerText = 'It\'s a tie';
    } else {
        document.querySelector('#result').innerText = 'Computer Won';
    }
}