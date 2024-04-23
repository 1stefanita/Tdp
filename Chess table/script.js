function setup() {
    createCanvas(700, 500);
    background(200);

}
function draw() {
    var rows = 0;
    var cols = 0;
    var firstColor = "black";
    var secondColor = "white";

    while (rows < 8) {
        if (rows % 2 == 0) {
            var firstColor = "white";
            var secondColor = "black";
        } else {
            var firstColor = "black";
            var secondColor = "white";
        }
        var cols = 0;
        while (rows < 8) {

            if (cols % 2 == 0) {
                fill(firstColor)
            }
            else {
                fill(secondColor)
            }

            rect(cols * 50, rows * 50, 50, 50)
            cols = cols + 1;

        }
        rows = rows + 1;
    }
}