//Idea for a game using split()!   "Can you remember what you wrote?". A game that asks what was your 1st/ 2nd/ 3rd etc last word.

let sentence =
    prompt(`Write something and remember each word & its order, you will be tested! 

    Must write a 3 word sentence`);

// const msg = 'This is my first message';

const sentenceWords = sentence.split(' '); //Array
const sentenceLength = sentenceWords.length;
const index = Math.round(Math.random() * sentenceWords.length);
const word = sentenceWords[index];
let answer;

//sl => Sequence Length
let sl;
for (let lvl = 1; lvl <= 10; lvl++) {
    sl = 2 + lvl;

    if (lvl == 1) {
        //Level 1

        console.log(sentenceLength);
        console.log(sl);
        if (sentenceLength === sl) {
            answer = prompt(`Level ${lvl}
                which number word was the word " ${word} " from your sentence?
                

                Remember 0 = 1, 1 = 2, 2 = 3, etc...`);

            if (parseInt(answer) === index) {
                alert(`Correct!
                    
                    Congratulations on passing level 1!`);
            } else {
                alert('Wrong answer! \nTry again');
                location.reload();
            }
        }

    }
    if (lvl >= 2) {
        //Levels
        sentence = prompt(
            `
        Welcome to Level ${lvl}

        Write a sentence of 4 words minimum.
        `
        );

        if (sentence.split(' ').length >= sl) {
            answer = prompt(`Level ${lvl}
            which number word was the word " ${word} " from your sentence?
            

            Remember 0 = 1, 1 = 2, 2 = 3, etc...`);

            if (parseInt(answer) === Math.round(Math.random() * sentence.split(' ').length)) {
                alert(`Correct!
                
                Congratulations on passing level ${lvl}`);
            } else {
                alert('Wrong answer! \nTry again');
                --lvl;
            }
        } else {
            --lvl;
        }
    }

}