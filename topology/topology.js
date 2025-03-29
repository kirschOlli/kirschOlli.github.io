let cols = 60;
let rows = 60;
let scale = 10;
let terrain = [];
let cnv;
let rotationAngle = 0;

function setup() {
    cnv = createCanvas(1000, 800, WEBGL);
    cnv.position((windowWidth - width) / 2);

    // Generate terrain using Perlin noise
    for (let y = 0; y < rows; y++) {
        terrain[y] = [];
        for (let x = 0; x < cols; x++) {
            terrain[y][x] = noise(x * 0.1, y * 0.1) * scale * 10.5;
        }
    }
}

function draw() {
    background(255);

    // Adjust rotation
    rotationAngle = (millis() / 2000) * PI / 2;

    // Center and rotate the terrain
    push();
    rotateX(PI/2.5);
    rotateZ(rotationAngle);

    // Calculate the total width and height of the terrain
    let terrainWidth = (cols - 1) * scale;
    let terrainHeight = (rows - 1) * scale;

    // Translate to center the terrain
    translate(-terrainWidth / 2, -terrainHeight / 2, -200);

    // Render terrain
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            let z1 = terrain[y][x];
            let z2 = terrain[y + 1][x];

            // Color mapping with more distinct height variations
            let colorLow = color(34, 139, 34);     // Forest Green (low terrain)
            let colorMid = color(173, 216, 230);   // Light Blue (mid terrain)
            let colorHigh = color(255, 255, 255);  // Pure White (high terrain)

            // More aggressive color mapping to reach white peaks
            let fillColor1 = z1 < scale * 4 ? colorLow :
                z1 < scale * 7 ? colorMid :
                    z1 < scale * 9 ? lerpColor(colorMid, colorHigh, 0.5) :
                        colorHigh;

            let fillColor2 = z2 < scale * 4 ? colorLow :
                z2 < scale * 7 ? colorMid :
                    z2 < scale * 9 ? lerpColor(colorMid, colorHigh, 0.5) :
                        colorHigh;

            fill(fillColor1);
            vertex(x * scale, y * scale, z1);

            fill(fillColor2);
            vertex(x * scale, (y + 1) * scale, z2);
        }
        endShape();
    }
    pop();
}