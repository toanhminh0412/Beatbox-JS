/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(location) {
        this.audio = new Audio(location);
    }
    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode) {
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(this.keyCode);
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
        // console.log(this.element);
    }

    // Solution 1: remove style on keyup
    // Solution 2: Wait a certain amount of time to remove style
    // Solution 3: React on transitionend event

    setATransitionEndListener = () => {
            this.element.addEventListener('transitionend', () => {
                this.deselect();
            });
        }
        /**
         * Set the button color based on color specified
         */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     * A box shadow looks like this 0px 0px 17px 0px #FFFFFF
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = '0px 0px 17px 0px #FFFFFF';
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = 'none';
    }
}