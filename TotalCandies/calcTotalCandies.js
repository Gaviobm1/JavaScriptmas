function calcTotalCandies(children, candy) {
        if (candy % children == 0) {
            return candy 
        }
        return candy - (candy % children)
    }
    