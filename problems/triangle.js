class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        let s1 = this.side1;
        let s2 = this.side2;
        let s3 = this.side3;
        return (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2);
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }
}

class Scalene extends Triangle {

}


class Isosceles extends Triangle {

}


module.exports = { Triangle };
