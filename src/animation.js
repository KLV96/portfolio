export class TrainAnimation {
    constructor() {
        this.track = document.querySelector('.track');
        this.mountains = document.querySelector('.mountains');
        this.sky = document.querySelector('.sky');
        this.wheels = document.querySelectorAll('.wheel');
        this.isMoving = false;
    }

    startMoving() {
        this.isMoving = true;
        this.wheels.forEach(w => w.classList.remove('stopped'));

        // Infinite scrolling background
        this.trackAnim = gsap.to(this.track, {
            x: "-50%",
            duration: 0.2, // Faster base speed
            ease: "none",
            repeat: -1
        });

        this.mountainAnim = gsap.to(this.mountains, {
            x: "-20%",
            duration: 10,
            ease: "none",
            repeat: -1
        });

        // Train bobbing effect
        gsap.to('.train', {
            y: -2,
            duration: 0.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });
    }

    stopMoving() {
        this.isMoving = false;
        this.wheels.forEach(w => w.classList.add('stopped'));

        if (this.trackAnim) this.trackAnim.pause();
        if (this.mountainAnim) this.mountainAnim.pause();

        gsap.killTweensOf('.train');
        gsap.to('.train', { y: 0, duration: 0.5 });
    }

    async travelToNextStation(duration = 1500) {
        this.startMoving();

        // Accelerate
        gsap.to(this.trackAnim, { timeScale: 5, duration: 0.5 });

        await new Promise(resolve => setTimeout(resolve, duration));

        // Decelerate
        gsap.to(this.trackAnim, {
            timeScale: 0, duration: 0.5, onComplete: () => {
                this.stopMoving();
            }
        });

        return new Promise(resolve => setTimeout(resolve, 500)); // Wait for full stop
    }
}
