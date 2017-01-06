function Circle() {
    this.y = height / 2;
    this.x = 64;
    this.radius
    this.velocity = 0;
    this.gravity = 0.5;
    this.bounceCount = 0;
    this.reverse = false;
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    this.update = function() {
        if (this.y >= height + 4) {
            this.reverse = true;
            this.bounceCount++;
        }
        if (this.y < 0) {
            this.reverse = false;
            this.bounceCount++;
        }
        if (this.bounceCount % 5 == 1) {
            this.velocity = 1;
        }
        // console.log(this.velocity);
        // console.log(this.bounceCount);
        if (this.reverse) {
            this.up();
        } else {
            this.down();
        }
        if (this.x <= 4) {
            this.x = 4;
        }
        if (this.x >= height) {
            this.x = height;
        }

    }
    this.right = function() {
        this.x += 5;
    }
    this.left = function() {
        this.x -= 5;

    }
    this.down = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }
    this.up = function() {
        this.velocity += this.gravity;
        this.y -= this.velocity;
    }
}
