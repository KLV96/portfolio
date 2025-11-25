export class WeatherSystem {
    constructor() {
        this.rainContainer = document.querySelector('.rain-container');
        this.isRaining = false;
        this.drops = [];
        this.maxDrops = 100;
    }

    init() {
        this.createRainDrops();
        this.toggleRain(true); // Start with rain immediately
        this.startCycle();
    }

    createRainDrops() {
        for (let i = 0; i < this.maxDrops; i++) {
            const drop = document.createElement('div');
            drop.classList.add('rain-drop');
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // 0.5s - 1s
            drop.style.animationDelay = `${Math.random() * 2}s`;
            this.rainContainer.appendChild(drop);
            this.drops.push(drop);
        }
    }

    startCycle() {
        const nextChange = Math.random() * 10000 + 10000; // 10-20 seconds
        setTimeout(() => {
            this.toggleRain(!this.isRaining);
            this.startCycle();
        }, nextChange);
    }

    toggleRain(raining) {
        this.isRaining = raining;
        if (this.isRaining) {
            document.body.classList.add('raining');
            console.log('Weather: It started raining.');
        } else {
            document.body.classList.remove('raining');
            console.log('Weather: The rain stopped.');
        }
    }
}
