const towers = [], disks = [], twoClicks = []

const numOfDisks = 23, maxWidth = 180, difference = 5
const recursionBtn = document.querySelector('#recursion');
const towerElList = document.querySelectorAll('.tower');
const main = document.querySelector('main');

/* get tower-bottom/disk height */
const oneTowerBottom = document.querySelector('.tower-bottom');
// this takes only the first one
const diskHeight = oneTowerBottom.offsetHeight;

const getColor = () => {

    const getRandom = () => {
        return Math.floor(Math.random() * 256);
    }

    return `rgb(${getRandom()},${getRandom()},${getRandom()})`

}

class Tower {

    constructor(towerEl,id) {

        this.disks = []
        this.towerEl = towerEl
        this.id = id
    }

    removeDisk() {
        return this.disks.pop();
        // pop() returns the removed element
    }

    addDisk(newDisk) {

        if (this.disks.length === 0 || newDisk.size < this.disks[this.disks.length-1].size) {
            newDisk.diskEl.style.left = this.middle - newDisk.size / 2 + 'px';
            /*bottom height = disk height*/
            this.disks.push(newDisk);
            
            /* newDisk.diskEl.style.bottom = main.offsetHeight - this.towerEl.offsetTop 
            - this.towerEl.offsetHeight 
            + diskHeight + (this.disks.length-1)*diskHeight + 'px'; */
            // if the margin is the same at top and bottom of the tower
            newDisk.diskEl.style.bottom = this.towerEl.offsetTop 
            + diskHeight + (this.disks.length-1)*diskHeight + 'px';
                                
        }
    }

    getMiddle() {

        this.middle = this.towerEl.offsetLeft + this.towerEl.offsetWidth / 2;
    }

    getUpperDiskSize() {
        if (this.disks.length === 0) return 0;

        return this.disks[this.disks.length-1].size;

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


    // console.log(`Before:`,twoClicks)
    if (twoClicks.length===0 && towers[id].disks.length > 0) {
        twoClicks.push(id)
    }
    else if (twoClicks.length >0 && twoClicks[0] !== id) {
        
        twoClicks.push(id)
        moveDisk();
    }
    // console.log(`After:`,twoClicks)
    
}

// twoClicks
//  [0,1]
const moveDisk = () => {

    if (towers[twoClicks[1]].disks.length===0 || towers[twoClicks[0]].getUpperDiskSize() < towers[twoClicks[1]].getUpperDiskSize()) {

        towers[twoClicks[1]].addDisk(towers[twoClicks[0]].removeDisk())

    }
    twoClicks.pop();
    twoClicks.pop();

}

towerElList.forEach((towerEl,id) => {

    const newTower = new Tower(towerEl,id)
    newTower.getMiddle();
    towers.push(newTower);
    towerEl.addEventListener('click',onClickTower)

})

for (let i=0; i < numOfDisks; i++) {

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

    // console.log(newDisk)
    towers[0].addDisk(newDisk);

}

const move = (t1, t2) => {
let sleep = 1000;
setTimeout(() => {
    t2.addDisk(t1.removedisk())
}, sleep)
}

setTimeout(() => {const solve = (n, start, middle, end) => {
if (n === 1) {
    move (start, end);
    return;
}
setTimeout(() => {solve(n-1, start, end, middle);
}, 500)
solve(1, start,middle,end);
solve(n-1,middle,start,end);
}}, 1000)

recursionBtn.addEventListener('click', ()=> {
    solve(numOfDisks,towers[0],towers[1],towers[2])
})