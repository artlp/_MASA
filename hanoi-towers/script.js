let numOfDisks = 3;
const towers = [];
const disks = [];
const towerElList = document.querySelectorAll('.tower');
const main = document.querySelector('main');
let maxWidth = 180;
let difference = 20;

class Tower {

    constructor(towerEl) {

        this.disks = [];
        this.towerEl = towerEl;

    }

    addDisk(newDisk) {
        console.log(newDisk);
        if (this.disks.length === 0 || newDisk.size < this.disks[this.disks.length - 1].size) {
            this.disks.push(newDisk);
            newDisk.diskEl.style.left = this.middle - newDisk.size / 2 + 'px';
        }
    }
    getMiddle() {
        this.middle = this.towerEl.offsetLeft + this.towerEl.offsetWidth / 2;
    }


}

class Disk {

    constructor(size, diskEl) {
        this.size = size;
        this.diskEl = diskEl;
        this.color = `rgb(${getColor()},${getColor()},${getColor()})`;
    }
    colorDisk() {
        this.diskEl.style.backgroundColor = this.color;
    }
    setWidth() {
        this.diskEl.style.width = this.size + 'px';
    }

}

towerElList.forEach((e) => {
    const newTower = new Tower(e);
    newTower.getMiddle();
    towers.push(newTower);
});
const getColor = () => {
    return Math.floor(Math.random() * 256);
};

for (let i = 0; i < numOfDisks; i++) {
    const newDiskEl = document.createElement('div');
    newDiskEl.classList.add("disk");
    const newDisk = new Disk(maxWidth - difference * i,
        newDiskEl);
    newDisk.colorDisk();
    newDisk.setWidth();
    main.append(newDiskEl);
    // console.log(newDisk);
    towers[0].addDisk(newDisk);

}



// console.log(`rgb(${getColor()},${getColor()},${getColor()})`);
console.log(towers);

