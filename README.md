# rock-paper-scissors
Rock paper scissors game, made for the Odin Project's foundations.


UI Version Notes:
- Added a full UI, with buttons, score and images. 
- Refactoring the code and writing new functions was pretty straightforward, although I wonder if there's some redundancies. Might be worth taking another look at it when I'm a bit further along? The hardest part was trying to get some kind of timer working; need to look more into SetTimeout and fully wrap my head around it. 
- Found the main CSS styling relatively easy too, although adding in the 'choose' animation took a while. 


Initial Version Notes: 
- Initial version is supposed to be javascript only and tested in the console, but I added some very basic html and css too, just for extra practice. Am aware (from looking ahead) that I'm going to be forking this later and adding a full UI. 
- Got a little stuck at first, due to rushing and not looking closely enough at some of the code. Things like overconfidently copy/pasting the prompt code from a previous example without initially realizing it was wrapped inside a ParseInt()! Also, in a similar vein, banging my head against an undefined output for a while when I tried to run the game loop in the console, due to comparing two strings with capitalized first letters (while my player's had already been converted.toLowerCase() in the hope of making things _easier_ to check).
- Thought: Should I have been committing my various attempts/failures during this time to git, or - as I have done - wait until I got something actually working as intended? 
