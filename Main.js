// "triangle*" bei point face funktioniert nicht
class Main {
    constructor() {
        this.board = JXG.JSXGraph.initBoard("jxgbox", { boundingbox: [-40, 3.5, 600, 2.5], axis: true, keepaspectratio: false });
        this.animationPoint = this.board.create('point', [-1, 1], { visible: false });
        this.piLine = this.board.create('line', [[0, Math.PI], [10, Math.PI]], { strokeColor: "#bbbbbb" });
        this.calulateNewNumber = this.calulateNewNumber.bind(this);
        this.pointList = { x: [], y: [] };
        this.strokeColor = "#777777";
        this.curve = this.board.create('curve', [this.pointList.x, this.pointList.y], { strokeColor: this.strokeColor, strokeWidth: 3 });
        this.pi = 4;
        this.iterations = 0;
        this.piOutput = document.getElementById("pi_output");
        this.iterationOutput = document.getElementById("iteration_output");


    }

    start() {
        this.animationPoint.moveAlong(this.calulateNewNumber, 0);
    }

    plotNewValue(time, plotValue) {
        this.pointList.x.push(time);
        this.pointList.y.push(plotValue);
        this.board.update();
    }

    calulateNewNumber() {
        let den = this.iterations * 2 + 3;
        if (this.iterations % 2 == 0) {
            this.pi -= (4 / den);
        } else {
            this.pi += (4 / den);
        }
        this.plotNewValue(this.iterations, this.pi);
        this.piOutput.innerHTML = this.pi;
        this.iterationOutput.innerHTML = this.iterations;
        this.iterations++;
        return [-1, 1];
    }

}
let m = new Main();
m.start();