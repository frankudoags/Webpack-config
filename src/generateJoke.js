function generateJoke() {
    const jokes = [
        'What do you call a bear with no teeth? A gummy bear!',
        'What do you call a fake noodle? An impasta.',
        'How many apples grow on a tree? All of them.',
        'Want to hear a joke about paper? Nevermind it\'s tearable.',
        'I just watched a program about beavers. It was the best dam program I\'ve ever seen.',
        'Why did the coffee file a police report? It got mugged.',
        'How does a penguin build it\'s house? Igloos it together.',
        'Dad, did you get a haircut? No I got them all cut.',
        'This graveyard looks overcrowded. People must be dying to get in there.',
        '5/4 of people admit that they’re bad with fractions.',
        'Why did the scarecrow win an award? Because he was outstanding in his field.',
        'Dad, can you put my shoes on? No, I don\'t think they\'ll fit me.',
        'I wouldn\'t buy anything with velcro. It\'s a total rip-off.',
        'A ham sandwich walks into a bar and orders a beer. The bartender says, "Sorry we don\'t serve food here."',
        'What do you call a belt made out of watches? A waist of time.',
        'Why couldn\'t the bicycle stand up by itself? It was two tired.',
    ];
    const ourJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerHTML = ourJoke;
}

export default generateJoke;