/**
 * T.B.D.
 * 1. THE MOST IMPORTANT: add check for FINISHED
 * 
 * 2. move the disks smoothly by setInterval 
 * 
 * 3. add input for the number of Disks (set Max = 8 or less)
 * 
 */

const towers = [], disks = [], twoClicks = [], solution = [];

const numOfDisks = 6, maxWidth = 180, difference = 10;

const towerElList = document.querySelectorAll('.tower');
const main = document.querySelector('main');
const recursionBtn = document.querySelector('#recursion');

/* get tower-bottom/disk height */
const oneTowerBottom = document.querySelector('.tower-bottom');
// this takes only the first one
const diskHeight = oneTowerBottom.offsetHeight;

const getColor = () => {

    const getRandom = () => {
        return Math.floor(Math.random() * 256);
    };

    return `rgb(${getRandom()},${getRandom()},${getRandom()})`;

};

class Tower {

    constructor(towerEl, id) {

        this.disks = [];
        this.towerEl = towerEl;
        this.id = id;
    }

    removeDisk() {
        return this.disks.pop();
        // pop() returns the removed element
    }

    addDisk(newDisk) {

        let startLeft, startBottom, endLeft, endBottom, left, bottom;

        if (!(newDisk.diskEl.style.left)) {
            newDisk.diskEl.style.left = "0px";
            startLeft = 0;
        } else startLeft = parseInt((newDisk.diskEl.style.left));
        if (!(newDisk.diskEl.style.bottom)) {
            startBottom = 0;
            newDisk.diskEl.style.bottom = "0px";
        } else startBottom = parseInt((newDisk.diskEl.style.bottom));

        console.log(startLeft);
        console.log(startBottom);
        left = startLeft;
        bottom = startBottom;

        if (this.disks.length === 0 || newDisk.size < this.disks[this.disks.length - 1].size) {
            endLeft = this.middle - newDisk.size / 2;
            /*bottom height = disk height*/
            this.disks.push(newDisk);

            // if the margin is the same at top and bottom of the tower
            endBottom = this.towerEl.offsetTop
                + diskHeight + (this.disks.length - 1) * diskHeight;

            let stepVert = 1, stepHoriz = 1;


            if (endBottom < startBottom) stepVert = -stepVert;
            if (endLeft < startLeft) stepHoriz = -stepHoriz;


            let timer = setInterval(() => {

                if (left === endLeft && bottom === endBottom) {
                    clearInterval(timer);
                    if (solution.length > 0) move(...solution.shift());
                };

                if (left !== endLeft) left += stepHoriz;
                if (bottom !== endBottom) bottom += stepVert;
                newDisk.diskEl.style.left = left + 'px';
                newDisk.diskEl.style.bottom = bottom + 'px';

            }, 0.5);

        }
        /* if (this.disks.length === 0 || newDisk.size < this.disks[this.disks.length-1].size) {
            newDisk.diskEl.style.left = this.middle - newDisk.size / 2 + 'px';
            
            this.disks.push(newDisk);
            
            
            // if the margin is the same at top and bottom of the tower
            newDisk.diskEl.style.bottom = this.towerEl.offsetTop 
            + diskHeight + (this.disks.length-1)*diskHeight + 'px';
                                
        } */
    }

    getMiddle() {

        this.middle = this.towerEl.offsetLeft + this.towerEl.offsetWidth / 2;
    }

    getUpperDiskSize() {
        if (this.disks.length === 0) return 0;

        return this.disks[this.disks.length - 1].size;

    }

}

class Disk {

    constructor(size, diskEl) {
        this.size = size;
        this.diskEl = diskEl;
        this.color = getColor();
    }

    colorDisk() {
        this.diskEl.style.backgroundColor = this.color;
    }
    setWidth() {
        this.diskEl.style.width = this.size + 'px';
    }

}

const onClickTower = (e) => {

    let id = Number(e.target.id);


    console.log(`Before:`, twoClicks);
    if (twoClicks.length === 0 && towers[id].disks.length > 0) {
        twoClicks.push(id);
    }
    else if (twoClicks.length > 0 && twoClicks[0] !== id) {

        twoClicks.push(id);
        moveDisk();
    }
    console.log(`After:`, twoClicks);

};

// twoClicks
//  [0,1]
const moveDisk = () => {

    if (towers[twoClicks[1]].disks.length === 0 || towers[twoClicks[0]].getUpperDiskSize() < towers[twoClicks[1]].getUpperDiskSize()) {

        towers[twoClicks[1]].addDisk(towers[twoClicks[0]].removeDisk());

    }
    twoClicks.pop();
    twoClicks.pop();

};

towerElList.forEach((towerEl, id) => {

    const newTower = new Tower(towerEl, id);
    newTower.getMiddle();
    towers.push(newTower);
    towerEl.addEventListener('click', onClickTower);

});

for (let i = 0; i < numOfDisks; i++) {

    const newDiskEl = document.createElement('div');
    newDiskEl.classList.add('disk');

    const newDisk = new Disk(maxWidth - difference * i,
        newDiskEl);
    // 180 - 20 * 0 = 180
    // 180 - 20 * 1 = 160
    // 180 - 20 * 2 = 140 ...
    newDisk.setWidth();
    newDisk.colorDisk();

    main.append(newDiskEl);

    console.log(newDisk);
    towers[0].addDisk(newDisk);

}

// for recursion
const move = (t1, t2) => {

    t2.addDisk(t1.removeDisk());

};

const solve = (n, start, middle, end) => {

    if (n === 1) {
        move(start, end);
        return;
    }

    solve(n - 1, start, end, middle);

    solve(1, start, middle, end);

    solve(n - 1, middle, start, end);

};

const solve2 = (n, start, middle, end) => {

    if (n === 1) {
        solution.push([start, end]);
        return;
    }

    solve2(n - 1, start, end, middle);

    solve2(1, start, middle, end);

    solve2(n - 1, middle, start, end);

};

/* recursionBtn.addEventListener('click',() => {
    solve(numOfDisks,towers[0],towers[1],towers[2])
}) */
recursionBtn.addEventListener('click', () => {
    solve2(numOfDisks, towers[0], towers[1], towers[2]);
    move(...solution.shift());
})


